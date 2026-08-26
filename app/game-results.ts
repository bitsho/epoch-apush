export const GAME_RESULTS_KEY = "epochGuestGameResultsV1";

export type TimelineAttempt = {
  eventId: number;
  title: string;
  titleZh: string;
  year: number;
  unit: string;
  correct: boolean;
};

export type TimelineResult = {
  schemaVersion: number;
  resultId: string;
  gameType: "timeline";
  score: number;
  correct: number;
  total: number;
  maxStreak: number;
  unitFilter: string;
  completedAt: string;
  details: {
    accuracy: number;
    difficulty: "bronze" | "silver" | "gold" | "platinum" | "diamond";
    language: "en" | "zh";
    livesRemaining: number;
    poolSize: number;
    attempts: TimelineAttempt[];
  };
};

export type CodenamesGuess = {
  term: string;
  unit: number | null;
  correct: boolean;
  order: number;
};

export type CodenamesResult = {
  schemaVersion: number;
  resultId: string;
  gameType: "codenames";
  score: number;
  completedAt: string;
  details: {
    accuracy: number;
    medal: "perfect" | "gold" | "silver" | "bronze";
    livesRemaining: number;
    difficulty: "easy" | "medium" | "hard";
    pool: string;
    clue: string;
    clueLocalized: string;
    clueNumber: number;
    correctGuesses: number;
    totalGuesses: number;
    targets: Array<{ term: string; unit: number | null }>;
    wrongTerms: Array<{ term: string; unit: number | null }>;
    guesses: CodenamesGuess[];
    targetUnits: number[];
    language: string;
  };
};

export function isCodenamesResult(value: unknown): value is CodenamesResult {
  if (!value || typeof value !== "object") return false;
  const row = value as Partial<CodenamesResult>;
  return (
    row.gameType === "codenames" &&
    typeof row.resultId === "string" &&
    typeof row.completedAt === "string" &&
    typeof row.score === "number" &&
    !!row.details &&
    Array.isArray(row.details.guesses)
  );
}

export function normalizeTimelineResult(value: unknown): TimelineResult | null {
  if (!value || typeof value !== "object") return null;
  const row = value as Record<string, unknown>;
  if (row.gameType !== "timeline" || typeof row.resultId !== "string" || typeof row.completedAt !== "string") return null;
  const details = row.details && typeof row.details === "object" ? row.details as Record<string, unknown> : {};
  const rawAttempts = Array.isArray(details.attempts)
    ? details.attempts
    : Array.isArray(details.events)
      ? details.events
      : Array.isArray(details.history)
        ? details.history
        : [];
  const attempts = rawAttempts.flatMap((raw, index): TimelineAttempt[] => {
    if (!raw || typeof raw !== "object") return [];
    const item = raw as Record<string, unknown>;
    const event = item.event && typeof item.event === "object" ? item.event as Record<string, unknown> : item;
    return [{
      eventId: Number(event.eventId ?? event.id ?? index),
      title: String(event.title ?? event.name ?? "历史事件"),
      titleZh: String(event.titleZh ?? event.zh_title ?? event.title ?? event.name ?? "历史事件"),
      year: Number(event.year ?? 0),
      unit: String(event.unit ?? ""),
      correct: Boolean(item.correct ?? item.wasCorrect),
    }];
  });
  const correct = Number(row.correct ?? details.correct ?? attempts.filter((item) => item.correct).length) || 0;
  const total = Number(row.total ?? details.total ?? attempts.length) || 0;
  const difficulty = String(details.difficulty ?? row.difficulty ?? "bronze");
  return {
    schemaVersion: Number(row.schemaVersion ?? 1),
    resultId: row.resultId,
    gameType: "timeline",
    score: Number(row.score ?? correct) || 0,
    correct,
    total,
    maxStreak: Number(row.maxStreak ?? details.maxStreak ?? 0) || 0,
    unitFilter: String(row.unitFilter ?? details.unitFilter ?? "all"),
    completedAt: row.completedAt,
    details: {
      accuracy: Number(details.accuracy ?? percentForResult(correct, total)),
      difficulty: (["bronze", "silver", "gold", "platinum", "diamond"].includes(difficulty) ? difficulty : "bronze") as TimelineResult["details"]["difficulty"],
      language: details.language === "zh" ? "zh" : "en",
      livesRemaining: Number(details.livesRemaining ?? row.livesRemaining ?? 0) || 0,
      poolSize: Number(details.poolSize ?? row.poolSize ?? 0) || 0,
      attempts,
    },
  };
}

function percentForResult(correct: number, total: number) {
  return total ? Math.round((correct / total) * 100) : 0;
}

export function isTimelineResult(value: unknown): value is TimelineResult {
  return normalizeTimelineResult(value) !== null;
}

function readGuestResults(): unknown[] {
  try {
    const rows = JSON.parse(window.localStorage.getItem(GAME_RESULTS_KEY) ?? "[]");
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

export function readCodenamesResults(): CodenamesResult[] {
  return readGuestResults().filter(isCodenamesResult).sort((a, b) =>
    b.completedAt.localeCompare(a.completedAt),
  );
}

export function readTimelineResults(): TimelineResult[] {
  return readGuestResults().map(normalizeTimelineResult).filter((row): row is TimelineResult => row !== null).sort((a, b) =>
    b.completedAt.localeCompare(a.completedAt),
  );
}

export function clearGuestResults(gameType: "codenames" | "timeline") {
  const remaining = readGuestResults().filter((row) => {
    if (!row || typeof row !== "object" || !("gameType" in row)) return true;
    return (row as { gameType?: unknown }).gameType !== gameType;
  });
  window.localStorage.setItem(GAME_RESULTS_KEY, JSON.stringify(remaining));
  window.dispatchEvent(new CustomEvent("epoch:results-updated"));
}

async function storeGameResult(value: CodenamesResult | TimelineResult): Promise<boolean> {
  try {
    const response = await fetch("/api/results", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(value),
    });
    if (response.ok) return true;
  } catch {}
  try {
    const existing = readGuestResults();
    const existingIds = new Set(existing.flatMap((row) => {
      if (!row || typeof row !== "object" || !("resultId" in row)) return [];
      return [String((row as { resultId: unknown }).resultId)];
    }));
    if (existingIds.has(value.resultId)) return true;
    window.localStorage.setItem(
      GAME_RESULTS_KEY,
      JSON.stringify([value, ...existing].slice(0, 500)),
    );
    window.dispatchEvent(new CustomEvent("epoch:results-updated"));
    return true;
  } catch {
    return false;
  }
}

export async function storeCodenamesResult(value: unknown): Promise<boolean> {
  if (!isCodenamesResult(value)) return false;
  return storeGameResult(value);
}

export async function storeTimelineResult(value: unknown): Promise<boolean> {
  if (!isTimelineResult(value)) return false;
  return storeGameResult(value);
}
