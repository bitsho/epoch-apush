"use client";

import { useEffect, useMemo, useState } from "react";
import UserNav from "../components/UserNav";
import {
  clearGuestResults,
  isCodenamesResult,
  isQuoteResult,
  normalizeTimelineResult,
  readCodenamesResults,
  readQuoteResults,
  readTimelineResults,
  type CodenamesResult,
  type QuoteResult,
  type TimelineResult,
} from "../game-results";

type AnalyticsGame = "codenames" | "timeline" | "quotes";

const MEDALS = [
  { key: "perfect", label: "完美通关" },
  { key: "gold", label: "金牌" },
  { key: "silver", label: "银牌" },
  { key: "bronze", label: "铜牌" },
] as const;

const CODENAME_DIFFICULTIES = [
  { key: "easy", label: "简单" },
  { key: "medium", label: "中等" },
  { key: "hard", label: "困难" },
] as const;

const TIMELINE_DIFFICULTIES = [
  { key: "bronze", label: "青铜" },
  { key: "silver", label: "白银" },
  { key: "gold", label: "黄金" },
  { key: "platinum", label: "铂金" },
  { key: "diamond", label: "钻石" },
] as const;

function percent(correct: number, total: number) {
  return total ? Math.round((correct / total) * 100) : 0;
}

function RecentAccuracyChart({ values, label }: { values: number[]; label: string }) {
  const recent = [...values].reverse().slice(-10);
  if (!recent.length) return <div className="analytics-empty-chart">完成一局后，这里会显示正确率走势。</div>;
  const points = recent.map((value, index) => ({
    x: recent.length === 1 ? 50 : 4 + (index * 92) / (recent.length - 1),
    y: 94 - Math.max(0, Math.min(100, value)) * 0.84,
    value,
  }));
  return (
    <svg className="analytics-line-chart" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label={label}>
      {[25, 50, 75].map((y) => <line key={y} x1="3" x2="97" y1={y} y2={y} />)}
      <polyline points={points.map((point) => `${point.x},${point.y}`).join(" ")} />
      {points.map((point, index) => <circle key={index} cx={point.x} cy={point.y} r="1.8"><title>{point.value}%</title></circle>)}
    </svg>
  );
}

function CodenamesAnalytics({ rows }: { rows: CodenamesResult[] }) {
  const analysis = useMemo(() => {
    const totals = rows.reduce((sum, row) => ({
      correct: sum.correct + row.details.correctGuesses,
      guesses: sum.guesses + row.details.totalGuesses,
      lives: sum.lives + row.details.livesRemaining,
    }), { correct: 0, guesses: 0, lives: 0 });
    const medalCounts = Object.fromEntries(MEDALS.map(({ key }) => [key, rows.filter((row) => row.details.medal === key).length]));
    const difficulty = CODENAME_DIFFICULTIES.map((item) => {
      const group = rows.filter((row) => row.details.difficulty === item.key);
      const correct = group.reduce((sum, row) => sum + row.details.correctGuesses, 0);
      const guesses = group.reduce((sum, row) => sum + row.details.totalGuesses, 0);
      return { ...item, missions: group.length, accuracy: percent(correct, guesses) };
    });
    const units = Array.from({ length: 9 }, (_, index) => index + 1).map((unit) => {
      const guesses = rows.flatMap((row) => row.details.guesses).filter((guess) => guess.unit === unit);
      return { unit, count: guesses.length, accuracy: percent(guesses.filter((guess) => guess.correct).length, guesses.length) };
    });
    const misses = new Map<string, { term: string; unit: number | null; count: number }>();
    for (const guess of rows.flatMap((row) => row.details.guesses).filter((guess) => !guess.correct)) {
      const current = misses.get(guess.term) ?? { term: guess.term, unit: guess.unit, count: 0 };
      current.count += 1;
      misses.set(guess.term, current);
    }
    return {
      accuracy: percent(totals.correct, totals.guesses),
      perfectRate: percent(medalCounts.perfect ?? 0, rows.length),
      averageLives: rows.length ? (totals.lives / rows.length).toFixed(1) : "—",
      medalCounts,
      difficulty,
      units,
      misses: [...misses.values()].sort((a, b) => b.count - a.count || a.term.localeCompare(b.term)).slice(0, 10),
    };
  }, [rows]);

  if (!rows.length) return <EmptyState game="codenames" />;
  return <>
    <section className="analytics-kpis" aria-label="Codenames 核心指标">
      <article><span>总局数</span><strong>{rows.length}</strong><small>MISSIONS</small></article>
      <article><span>选择正确率</span><strong>{analysis.accuracy}%</strong><small>GUESS ACCURACY</small></article>
      <article><span>完美通关率</span><strong>{analysis.perfectRate}%</strong><small>PERFECT RATE</small></article>
      <article><span>平均剩余生命</span><strong>{analysis.averageLives}</strong><small>AVG. LIVES</small></article>
    </section>
    <section className="analytics-grid">
      <article className="analytics-panel analytics-wide">
        <div className="analytics-panel-head"><div><span>RECENT PERFORMANCE</span><h2>最近 10 局正确率</h2></div><b>{rows[0]?.details.accuracy}%</b></div>
        <RecentAccuracyChart values={rows.map((row) => row.details.accuracy)} label="Codenames 最近十局正确率" />
      </article>
      <article className="analytics-panel">
        <div className="analytics-panel-head"><div><span>MEDALS</span><h2>通关等级分布</h2></div></div>
        <div className="analytics-bars">{MEDALS.map((medal) => {
          const count = analysis.medalCounts[medal.key] ?? 0;
          return <div key={medal.key}><p><span>{medal.label}</span><b>{count}</b></p><i><em style={{ width: `${percent(count, rows.length)}%` }} /></i></div>;
        })}</div>
      </article>
      <article className="analytics-panel">
        <div className="analytics-panel-head"><div><span>DIFFICULTY</span><h2>各难度正确率</h2></div></div>
        <div className="analytics-bars">{analysis.difficulty.map((item) => <div key={item.key}><p><span>{item.label}<small>{item.missions} 局</small></span><b>{item.missions ? `${item.accuracy}%` : "—"}</b></p><i><em style={{ width: `${item.accuracy}%` }} /></i></div>)}</div>
      </article>
      <UnitChart units={analysis.units} />
      <article className="analytics-panel analytics-wide">
        <div className="analytics-panel-head"><div><span>DIAGNOSTIC</span><h2>最常误选的词条</h2></div></div>
        {analysis.misses.length ? <ol className="miss-list">{analysis.misses.map((item) => <li key={item.term}><span>{item.term}<small>{item.unit ? `AP Unit ${item.unit}` : "未标注 Unit"}</small></span><b>{item.count} 次</b></li>)}</ol> : <p className="analytics-no-misses">目前没有误选记录。</p>}
      </article>
    </section>
  </>;
}

function TimelineAnalytics({ rows }: { rows: TimelineResult[] }) {
  const analysis = useMemo(() => {
    const totals = rows.reduce((sum, row) => ({ correct: sum.correct + row.correct, total: sum.total + row.total }), { correct: 0, total: 0 });
    const difficulty = TIMELINE_DIFFICULTIES.map((item) => {
      const group = rows.filter((row) => row.details.difficulty === item.key);
      const correct = group.reduce((sum, row) => sum + row.correct, 0);
      const total = group.reduce((sum, row) => sum + row.total, 0);
      return { ...item, missions: group.length, accuracy: percent(correct, total) };
    });
    const attempts = rows.flatMap((row) => row.details.attempts);
    const units = Array.from({ length: 9 }, (_, index) => index + 1).map((unit) => {
      const group = attempts.filter((attempt) => attempt.unit === `u${unit}`);
      return { unit, count: group.length, accuracy: percent(group.filter((attempt) => attempt.correct).length, group.length) };
    });
    const misses = new Map<string, { title: string; year: number; unit: string; count: number }>();
    for (const attempt of attempts.filter((item) => !item.correct)) {
      const key = `${attempt.eventId}:${attempt.title}`;
      const current = misses.get(key) ?? { title: attempt.titleZh || attempt.title, year: attempt.year, unit: attempt.unit, count: 0 };
      current.count += 1;
      misses.set(key, current);
    }
    return {
      accuracy: percent(totals.correct, totals.total),
      bestScore: rows.reduce((best, row) => Math.max(best, row.score), 0),
      averageStreak: rows.length ? (rows.reduce((sum, row) => sum + row.maxStreak, 0) / rows.length).toFixed(1) : "—",
      difficulty,
      units,
      misses: [...misses.values()].sort((a, b) => b.count - a.count || a.year - b.year).slice(0, 10),
    };
  }, [rows]);

  if (!rows.length) return <EmptyState game="timeline" />;
  return <>
    <section className="analytics-kpis" aria-label="时间线核心指标">
      <article><span>练习次数</span><strong>{rows.length}</strong><small>PRACTICES</small></article>
      <article><span>事件定位正确率</span><strong>{analysis.accuracy}%</strong><small>PLACEMENT ACCURACY</small></article>
      <article><span>单局最高得分</span><strong>{analysis.bestScore}</strong><small>BEST SCORE</small></article>
      <article><span>平均最高连击</span><strong>{analysis.averageStreak}</strong><small>AVG. MAX STREAK</small></article>
    </section>
    <section className="analytics-grid">
      <article className="analytics-panel analytics-wide">
        <div className="analytics-panel-head"><div><span>RECENT PERFORMANCE</span><h2>最近 10 次定位正确率</h2></div><b>{rows[0]?.details.accuracy}%</b></div>
        <RecentAccuracyChart values={rows.map((row) => row.details.accuracy)} label="时间线最近十次定位正确率" />
      </article>
      <article className="analytics-panel analytics-wide">
        <div className="analytics-panel-head"><div><span>DIFFICULTY</span><h2>各题库难度表现</h2></div></div>
        <div className="analytics-bars analytics-bars-five">{analysis.difficulty.map((item) => <div key={item.key}><p><span>{item.label}<small>{item.missions} 次</small></span><b>{item.missions ? `${item.accuracy}%` : "—"}</b></p><i><em style={{ width: `${item.accuracy}%` }} /></i></div>)}</div>
      </article>
      <UnitChart units={analysis.units} />
      <article className="analytics-panel analytics-wide">
        <div className="analytics-panel-head"><div><span>DIAGNOSTIC</span><h2>最常定位错误的历史事件</h2></div></div>
        {analysis.misses.length ? <ol className="miss-list">{analysis.misses.map((item) => <li key={`${item.year}-${item.title}`}><span>{item.title}<small>{item.year} · AP {item.unit.toUpperCase()}</small></span><b>{item.count} 次</b></li>)}</ol> : <p className="analytics-no-misses">目前没有定位错误记录。</p>}
      </article>
    </section>
  </>;
}

function QuoteAnalytics({ rows }: { rows: QuoteResult[] }) {
  const analysis = useMemo(() => {
    const correct = rows.filter((row) => row.details.correct).length;
    const units = Array.from({ length: 9 }, (_, index) => index + 1).map((unit) => {
      const group = rows.filter((row) => row.details.unit === unit);
      return { unit, count: group.length, accuracy: percent(group.filter((row) => row.details.correct).length, group.length) };
    });
    const misses = new Map<string, { author: string; selected: string; count: number }>();
    for (const row of rows.filter((item) => !item.details.correct)) {
      const current = misses.get(row.details.authorId) ?? {
        author: row.details.authorName,
        selected: row.details.selectedPersonName,
        count: 0,
      };
      current.count += 1;
      current.selected = row.details.selectedPersonName;
      misses.set(row.details.authorId, current);
    }
    return {
      accuracy: percent(correct, rows.length),
      bestStreak: rows.reduce((best, row) => Math.max(best, row.maxStreak), 0),
      authorsMastered: new Set(rows.filter((row) => row.details.correct).map((row) => row.details.authorId)).size,
      reviewAccuracy: (() => {
        const review = rows.filter((row) => row.details.reviewMode);
        return review.length ? percent(review.filter((row) => row.details.correct).length, review.length) : null;
      })(),
      units,
      misses: [...misses.values()].sort((a, b) => b.count - a.count || a.author.localeCompare(b.author)).slice(0, 10),
    };
  }, [rows]);

  if (!rows.length) return <EmptyState game="quotes" />;
  return <>
    <section className="analytics-kpis" aria-label="历史引文挑战核心指标">
      <article><span>作答次数</span><strong>{rows.length}</strong><small>ATTEMPTS</small></article>
      <article><span>人物辨识正确率</span><strong>{analysis.accuracy}%</strong><small>AUTHOR ACCURACY</small></article>
      <article><span>最佳连胜</span><strong>{analysis.bestStreak}</strong><small>BEST STREAK</small></article>
      <article><span>已正确辨识人物</span><strong>{analysis.authorsMastered}/50</strong><small>AUTHORS MASTERED</small></article>
    </section>
    <section className="analytics-grid">
      <article className="analytics-panel analytics-wide">
        <div className="analytics-panel-head"><div><span>RECENT PERFORMANCE</span><h2>最近 10 次人物辨识表现</h2></div><b>{rows[0]?.details.accuracy}%</b></div>
        <RecentAccuracyChart values={rows.map((row) => row.details.accuracy)} label="历史引文挑战最近十次正确率" />
      </article>
      <UnitChart units={analysis.units} />
      <article className="analytics-panel analytics-wide">
        <div className="analytics-panel-head"><div><span>DIAGNOSTIC</span><h2>最常辨识错误的历史人物</h2></div>{analysis.reviewAccuracy !== null && <b>{analysis.reviewAccuracy}% 重练</b>}</div>
        {analysis.misses.length ? <ol className="miss-list">{analysis.misses.map((item) => <li key={item.author}><span>{item.author}<small>最近误选：{item.selected}</small></span><b>{item.count} 次</b></li>)}</ol> : <p className="analytics-no-misses">目前没有人物辨识错误记录。</p>}
      </article>
    </section>
  </>;
}

function UnitChart({ units }: { units: Array<{ unit: number; count: number; accuracy: number }> }) {
  return <article className="analytics-panel analytics-wide">
    <div className="analytics-panel-head"><div><span>AP UNITS</span><h2>Unit 1–9 正确率</h2></div></div>
    <div className="unit-chart">{units.map((item) => <div key={item.unit}><b>{item.count ? `${item.accuracy}%` : "—"}</b><i><em style={{ height: `${item.count ? Math.max(5, item.accuracy) : 0}%` }} /></i><span>U{item.unit}</span><small>{item.count} 次</small></div>)}</div>
  </article>;
}

function EmptyState({ game }: { game: AnalyticsGame }) {
  const timeline = game === "timeline";
  const quotes = game === "quotes";
  return <section className="analytics-empty">
    <span>{timeline ? "NO PRACTICE YET" : quotes ? "NO QUOTES ANSWERED" : "NO MISSIONS YET"}</span>
    <h2>{timeline ? "完成第一次时间线练习，数据会自动出现在这里。" : quotes ? "完成第一道人物引文题，数据会自动出现在这里。" : "完成第一局，数据会自动出现在这里。"}</h2>
    <p>{timeline ? "系统会记录定位正确率、最高连击、题库难度、AP Unit 和易错事件。" : quotes ? "系统会记录人物辨识正确率、连胜、AP Unit、错选人物和错题重练表现。" : "每局只记录一次；正确选择、误选词条、难度和 AP Unit 都会进入分析。"}</p>
    <a href={timeline ? "/timeline" : quotes ? "/quotes" : "/codenames"}>{timeline ? "开始时间线练习 →" : quotes ? "开始人物引文挑战 →" : "开始第一局 →"}</a>
  </section>;
}

export default function AnalyticsPage() {
  const [game, setGame] = useState<AnalyticsGame>("codenames");
  const [codenamesRows, setCodenamesRows] = useState<CodenamesResult[]>([]);
  const [timelineRows, setTimelineRows] = useState<TimelineResult[]>([]);
  const [quoteRows, setQuoteRows] = useState<QuoteResult[]>([]);
  const [source, setSource] = useState<"loading" | "account" | "guest">("loading");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("game");
    if (requested === "timeline" || requested === "codenames" || requested === "quotes") setGame(requested);
    let usingAccount = false;
    const refreshGuest = () => {
      setCodenamesRows(readCodenamesResults());
      setTimelineRows(readTimelineResults());
      setQuoteRows(readQuoteResults());
      setSource("guest");
    };
    fetch("/api/results", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("guest");
        const data = await response.json() as { results?: unknown[] };
        const results = data.results ?? [];
        usingAccount = true;
        setCodenamesRows(results.filter(isCodenamesResult));
        setTimelineRows(results.map(normalizeTimelineResult).filter((row): row is TimelineResult => row !== null));
        setQuoteRows(results.filter(isQuoteResult));
        setSource("account");
      })
      .catch(refreshGuest);
    const refresh = () => { if (!usingAccount) refreshGuest(); };
    window.addEventListener("storage", refresh);
    window.addEventListener("epoch:results-updated", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("epoch:results-updated", refresh);
    };
  }, []);

  const timeline = game === "timeline";
  const quotes = game === "quotes";
  const gameHref = timeline ? "/timeline" : quotes ? "/quotes" : "/codenames";
  const currentRows = timeline ? timelineRows : quotes ? quoteRows : codenamesRows;
  const clearResults = () => {
    const label = timeline ? "时间线" : quotes ? "历史引文" : "Codenames";
    if (!window.confirm(`确定清空当前浏览器中的${label}历史数据吗？`)) return;
    clearGuestResults(game);
    if (timeline) setTimelineRows([]); else if (quotes) setQuoteRows([]); else setCodenamesRows([]);
  };

  return (
    <main className="analytics-shell">
      <header className="analytics-topbar">
        <a className="hub-brand" href="/" aria-label="返回 EPOCH 学习主页">
          <span className="hub-brand-mark">E</span>
          <span><strong>EPOCH</strong><small>LEARNING ANALYTICS</small></span>
        </a>
        <div className="analytics-nav-actions"><a className="analytics-back" href={gameHref}>返回游戏 →</a><UserNav compact hideHome analysisGame={game} /></div>
      </header>

      <section className="analytics-hero">
        <div><p className="hub-eyebrow">{timeline ? "APUSH TIMELINE · CHRONOLOGY" : quotes ? "APUSH QUOTES · HISTORICAL VOICES" : "APUSH CODENAMES · HISTORY"}</p><h1>学习数据分析</h1></div>
        <p>{timeline ? "从事件定位、连击、题库难度与 AP Unit 四个角度诊断年代框架掌握情况。" : quotes ? "从人物辨识、连胜、错选人物与 AP Unit 四个角度诊断史料引文掌握情况。" : "从任务正确率、奖牌、难度与 AP Unit 四个角度定位概念关联能力。"}{source === "account" ? "当前显示已同步的账户记录。" : source === "guest" ? "当前显示本浏览器的游客记录。" : "正在载入个人记录。"}</p>
      </section>

      <nav className="analytics-tabs" aria-label="游戏数据类别">
        <a className={game === "codenames" ? "active" : ""} href="/analytics?game=codenames">APUSH Codenames</a>
        <a className={timeline ? "active" : ""} href="/analytics?game=timeline">时间线排序</a>
        <a className={quotes ? "active" : ""} href="/analytics?game=quotes">历史引文人物</a>
      </nav>

      {timeline ? <TimelineAnalytics rows={timelineRows} /> : quotes ? <QuoteAnalytics rows={quoteRows} /> : <CodenamesAnalytics rows={codenamesRows} />}

      {currentRows.length > 0 && <div className="analytics-footer-actions">{source === "guest" ? <button onClick={clearResults}>清空本机记录</button> : <span />}<a href={gameHref}>继续挑战 →</a></div>}
    </main>
  );
}
