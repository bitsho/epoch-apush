import { getCurrentUser, isSameOrigin } from "../../auth";
import { getDb } from "../../../db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const GAME_TYPES = new Set(["cat", "stakeholder", "timeline", "codenames"]);

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return Response.json({ signedIn: false, results: [] }, { status: 401 });
  const sql = getDb();
  const rows = await sql`
    SELECT result_id AS "resultId", game_type AS "gameType", score, correct, total,
      max_streak AS "maxStreak", unit_filter AS "unitFilter", details, completed_at AS "completedAt"
    FROM game_results
    WHERE user_id = ${user.userId}
    ORDER BY completed_at DESC
    LIMIT 500
  `;
  return Response.json({ signedIn: true, user: { displayName: user.displayName, username: user.username }, results: rows });
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: "来源校验失败" }, { status: 403 });
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: "请先登录" }, { status: 401 });
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return Response.json({ error: "记录格式无效" }, { status: 400 });
  const resultId = String(body.resultId ?? "").slice(0, 80);
  const gameType = String(body.gameType ?? "");
  const details = body.details && typeof body.details === "object" ? body.details as Record<string, unknown> : {};
  const detailsJson = JSON.stringify(details);
  const score = Math.max(0, Math.min(1000, Number(body.score) || 0));
  const correct = Math.max(0, Math.min(1000, Number(body.correct ?? details.correctGuesses) || 0));
  const total = Math.max(0, Math.min(1000, Number(body.total ?? details.totalGuesses) || 0));
  const maxStreak = Math.max(0, Math.min(1000, Number(body.maxStreak) || 0));
  const completedAt = typeof body.completedAt === "string" && !Number.isNaN(Date.parse(body.completedAt))
    ? new Date(body.completedAt).toISOString()
    : new Date().toISOString();
  if (!resultId || !GAME_TYPES.has(gameType) || detailsJson.length > 120_000) {
    return Response.json({ error: "记录格式无效" }, { status: 400 });
  }
  const sql = getDb();
  await sql`
    INSERT INTO game_results
      (result_id, user_id, game_type, score, correct, total, max_streak, unit_filter, details, completed_at)
    VALUES
      (${resultId}, ${user.userId}, ${gameType}, ${Math.round(score)}, ${Math.round(correct)}, ${Math.round(total)}, ${Math.round(maxStreak)}, ${typeof body.unitFilter === "string" ? body.unitFilter.slice(0, 20) : null}, ${detailsJson}::jsonb, ${completedAt})
    ON CONFLICT (result_id) DO NOTHING
  `;
  return Response.json({ saved: true }, { status: 201 });
}
