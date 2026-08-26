'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';
import { peopleById, quotes, type Person } from './data';
import { historicalProfiles } from './profiles';
import { storeQuoteResult } from '../game-results';

type Progress = { answered:string[]; attempts:number; correct:number; streak:number; bestStreak:number; mistakes:string[] };
const initialProgress: Progress = { answered:[], attempts:0, correct:0, streak:0, bestStreak:0, mistakes:[] };

function shuffle<T>(items:T[], seedText:string) {
  const copy = [...items];
  let seed = 2166136261;
  for (const character of seedText) seed = Math.imul(seed ^ character.charCodeAt(0), 16777619);
  const random = () => {
    seed += 0x6D2B79F5;
    let value = seed;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function inferApushUnit(date:string) {
  const year = Number(date.match(/\b(1[5-9]\d{2}|20\d{2})\b/)?.[1] ?? 0);
  if (!year) return null;
  if (year < 1607) return 1;
  if (year < 1754) return 2;
  if (year < 1800) return 3;
  if (year < 1848) return 4;
  if (year < 1877) return 5;
  if (year < 1898) return 6;
  if (year < 1945) return 7;
  if (year < 1980) return 8;
  return 9;
}

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [progress, setProgress] = useState<Progress>(initialProgress);
  const [modal, setModal] = useState<'stats'|'settings'|'mistakes'|null>(null);
  const [showEnglish, setShowEnglish] = useState(true);
  const [quietMotion, setQuietMotion] = useState(false);
  const [reviewQueue, setReviewQueue] = useState<string[]>([]);
  const question = quotes[questionIndex];
  const correctPerson = peopleById[question.personId];
  const historicalProfile = historicalProfiles[correctPerson.id];

  const options = useMemo(() => {
    const ids = [correctPerson.id, ...correctPerson.distractors];
    return shuffle(ids.map((id) => peopleById[id]), correctPerson.id);
  }, [correctPerson.id, correctPerson.distractors]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const saved = localStorage.getItem('apush-quote-progress');
        if (saved) {
          const parsed = JSON.parse(saved);
          const restored = { ...initialProgress, ...parsed, attempts:Number.isFinite(parsed.attempts) ? parsed.attempts : (parsed.answered?.length ?? 0), answered:Array.isArray(parsed.answered) ? parsed.answered : [], mistakes:Array.isArray(parsed.mistakes) ? parsed.mistakes : [] };
          setProgress(restored);
          const unseen = quotes.map((quote,index) => ({quote,index})).filter(({quote}) => !restored.answered.includes(quote.id));
          if (unseen.length) setQuestionIndex(unseen[Math.floor(Math.random() * unseen.length)].index);
          else setModal('stats');
        } else {
          setQuestionIndex(Math.floor(Math.random() * quotes.length));
        }
        setShowEnglish(localStorage.getItem('apush-show-english') !== 'false');
        setQuietMotion(localStorage.getItem('apush-quiet-motion') === 'true');
      } catch {}
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    localStorage.setItem('apush-quiet-motion', String(quietMotion));
  }, [quietMotion]);

  useEffect(() => {
    const handler = (event:KeyboardEvent) => {
      if (modal) return;
      const number = Number(event.key);
      if (!selected && number >= 1 && number <= 6) choose(options[number - 1].id);
      if (selected && (event.key === 'Enter' || event.key === 'ArrowRight')) nextQuestion();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  function saveProgress(next:Progress) {
    setProgress(next);
    localStorage.setItem('apush-quote-progress', JSON.stringify(next));
  }

  function choose(personId:string) {
    if (selected) return;
    setSelected(personId);
    const isCorrect = personId === correctPerson.id;
    const answered = progress.answered.includes(question.id) ? progress.answered : [...progress.answered, question.id];
    const streak = isCorrect ? progress.streak + 1 : 0;
    const mistakes = isCorrect
      ? progress.mistakes.filter((id) => id !== question.id)
      : progress.mistakes.includes(question.id) ? progress.mistakes : [...progress.mistakes, question.id];
    const nextProgress = { ...progress, answered, mistakes, attempts:progress.attempts + 1, correct:progress.correct + (isCorrect ? 1 : 0), streak, bestStreak:Math.max(progress.bestStreak, streak) };
    saveProgress(nextProgress);
    const selectedPerson = peopleById[personId];
    void storeQuoteResult({
      schemaVersion: 1,
      resultId: `quotes-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      gameType: 'quotes',
      score: isCorrect ? 100 : 0,
      correct: isCorrect ? 1 : 0,
      total: 1,
      maxStreak: nextProgress.bestStreak,
      completedAt: new Date().toISOString(),
      details: {
        accuracy: isCorrect ? 100 : 0,
        questionId: question.id,
        authorId: correctPerson.id,
        authorName: correctPerson.nameZh,
        selectedPersonId: selectedPerson.id,
        selectedPersonName: selectedPerson.nameZh,
        source: question.source,
        date: question.date,
        apush: question.apush,
        unit: inferApushUnit(question.date),
        correct: isCorrect,
        streak,
        reviewMode: reviewQueue.length > 0,
      },
    });
  }

  function nextQuestion() {
    const remainingReview = reviewQueue.filter((id) => id !== question.id);
    if (remainingReview.length) {
      setReviewQueue(remainingReview);
      setQuestionIndex(quotes.findIndex((quote) => quote.id === remainingReview[0]));
      setSelected(null);
      return;
    }
    if (reviewQueue.length) setReviewQueue([]);
    const unseen = quotes.map((quote,index) => ({quote,index})).filter(({quote}) => !progress.answered.includes(quote.id) && quote.id !== question.id);
    if (!unseen.length) {
      setModal('stats');
      return;
    }
    setQuestionIndex(unseen[Math.floor(Math.random() * unseen.length)].index);
    setSelected(null);
    if (window.innerWidth <= 1260) window.scrollTo({ top:0, behavior:quietMotion ? 'auto' : 'smooth' });
  }

  function startMistakeReview(mode:'all'|'random') {
    if (!progress.mistakes.length) return;
    const queue = mode === 'random'
      ? [progress.mistakes[Math.floor(Math.random() * progress.mistakes.length)]]
      : [...progress.mistakes];
    setReviewQueue(queue);
    setQuestionIndex(quotes.findIndex((quote) => quote.id === queue[0]));
    setSelected(null);
    setModal(null);
  }

  async function shareQuestion() {
    const text = `APUSH Quote Challenge: “${question.text}” — Can you name the author?`;
    try {
      if (navigator.share) await navigator.share({ title:'APUSH Quote Challenge', text, url:location.href });
      else { await navigator.clipboard.writeText(`${text} ${location.href}`); alert('题目链接已复制 / Link copied'); }
    } catch {}
  }

  const isCorrect = selected === correctPerson.id;
  const accuracy = progress.attempts ? Math.round(progress.correct / progress.attempts * 100) : 0;
  const quoteDuration = Math.min(5, Math.max(2, question.text.length / 42));
  const quoteLengthClass = question.text.length > 185 ? 'quote-long' : question.text.length > 125 ? 'quote-medium' : 'quote-short';

  return (
    <main className={`quote-game-shell${quietMotion ? ' quiet-motion' : ''}`}>
      <header className="topbar">
        <button className="seal" aria-label="返回 EPOCH 学习主页" onClick={() => { window.location.href = '/'; }}><img src="/ui/federal-seal.png" alt="" /></button>
        <div className="brand-copy"><h1>APUSH QUOTE CHALLENGE</h1><p>Guess the author. Understand the era. Master APUSH.</p></div>
        <div className="capitol" aria-hidden="true"><img src="/ui/capitol-ornament.png" alt="" /></div>
        <div className="header-stats">
          <span>▣ <b>题库进度</b><small>{progress.answered.length} / {quotes.length}</small></span>
          <span>🏆 <b>连胜</b><small>{progress.streak}</small></span>
          <button onClick={() => setModal('mistakes')}>✎ <b>错题簿</b><small>{progress.mistakes.length}</small></button>
          <button onClick={() => setModal('settings')}>⚙ <b>设置</b><small>Settings</small></button>
        </div>
      </header>

      <section className={`experience-stage ${selected ? 'answer-mode' : 'quiz-mode'}`} aria-live="polite">
        {!selected ? <>
          <aside className="mystery-panel">
            <div className="oval-frame"><img className="mystery-medallion" src="/ui/mystery-medallion.png" alt="神秘历史人物侧面剪影" /></div>
            <div className="who-card"><strong>Who said this?</strong><small>Choose the best answer.</small></div>
          </aside>

          <article className={`quote-paper ${quoteLengthClass}`}>
            <span className="ribbon">{reviewQueue.length ? `错题重做 · ${reviewQueue.length} 题` : `第 ${Math.min(progress.answered.length + 1, quotes.length)} 题 / 共 ${quotes.length} 题`}</span>
            <span className="quote-mark">“</span>
            <AnimatedQuote key={question.id} text={question.text} duration={quoteDuration}/>
            <span className="paper-flourish">✦ ─────────── ✦</span>
            <span className={`mistake-marker ${progress.mistakes.includes(question.id) ? 'saved' : ''}`} aria-label={progress.mistakes.includes(question.id) ? '本题在错题簿中' : '本题不在错题簿中'}>✎</span>
          </article>

          <section className="choices-panel">
            <h2>★　请选择最可能的作者 <em>(Choose the author)</em>　★</h2>
            <div className="choice-grid">
              {options.map((person, index) => <button className="person-card" key={person.id} onClick={() => choose(person.id)} aria-label={`${index + 1}. ${person.nameZh} ${person.nameEn}`}>
                <span className="number">{index + 1}</span>
                <img src={person.image} alt={`${person.nameEn} portrait`} />
                <strong>{person.nameZh}</strong><small>{person.nameEn}</small>
              </button>)}
            </div>
            <p className="keyboard-hint">按 1–6 快速作答 · Use keys 1–6</p>
          </section>
        </> : <>
          <article className="answer-person">
            <div className={`answer-ribbon ${isCorrect ? '' : 'incorrect'}`}>{isCorrect ? '★ 正确答案！' : '✦ 再接再厉'}</div>
            <div className="answer-portrait"><img className="answer-frame-art" src="/ui/answer-frame.png" alt=""/><div className="answer-photo-window"><img src={correctPerson.image} alt={correctPerson.nameEn}/></div></div>
            <div className="nameplate"><strong>{correctPerson.nameZh}</strong><span>{correctPerson.nameEn}</span><small>{correctPerson.years}</small></div>
          </article>

          <article className="history-card">
            <h3>✦　QUOTE 来源　✦</h3>
            <blockquote className="answer-quote">“{question.text}”</blockquote>
            <a className="source-citation" href={question.sourceUrl} target="_blank" rel="noreferrer"><span>{question.source} · {question.date}</span><b aria-hidden="true">↗</b></a>
            <div className="ornament">──────── ✦ ────────</div>
            <h4>历史背景 <span>(Historical Background)</span></h4>
            <p>{question.contextZh}</p>
            {showEnglish && question.contextEn && <p className="english-context">{question.contextEn}</p>}
            <div className="apush-focus"><b>APUSH 考点</b><span>{question.apush}</span></div>
            <section className="person-profile" aria-label={`${correctPerson.nameZh}人物简介与大事记`}>
              <h4>人物简介与大事记 <span>(Profile & Timeline)</span></h4>
              <p className="profile-bio">{historicalProfile.bioZh}</p>
              <ol className="person-timeline">{historicalProfile.timeline.map((item) => <li key={`${item.year}-${item.event}`}><time>{item.year}</time><span>{item.event}</span></li>)}</ol>
              <a className="profile-source" href={correctPerson.wiki} target="_blank" rel="noreferrer">资料主要来源：Wikipedia 人物条目 ↗</a>
            </section>
            <div className={`mistake-status ${isCorrect ? 'cleared' : 'added'}`}>{isCorrect ? '✓ 答对后已自动移出错题簿' : '✎ 已自动加入错题簿'}</div>
          </article>

          <aside className="wiki-card">
            <h3>✦　所有选项人物　✦</h3>
            <div className="wiki-list">{options.map((person, index) => <WikiRow key={person.id} person={person} index={index}/>)}</div>
          </aside>
        </>}
      </section>

      <nav className="bottom-nav" aria-label="底部导航">
        <button onClick={() => { window.location.href = '/'; }}><b>⌂</b><span>学习主页<small>Learning Hub</small></span></button>
        <button onClick={() => { window.location.href = '/analytics?game=quotes'; }}><b className="stats-nav-icon" aria-hidden="true"><i></i><i></i><i></i></b><span>数据分析<small>Analytics</small></span></button>
        <button className="next-button" onClick={nextQuestion}><b>✦</b><span>{reviewQueue.length ? '下一道错题' : '下一题'}<small>{reviewQueue.length ? 'Next Mistake' : 'Next Question'}</small></span></button>
        <button onClick={() => setModal('mistakes')}><b>▤</b><span>查看错题簿<small>Mistake Book</small></span></button>
        <button onClick={shareQuestion}><b>⌯</b><span>分享题目<small>Share</small></span></button>
      </nav>

      {modal && <div className="modal-backdrop" onMouseDown={() => setModal(null)}><section className="modal-card" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setModal(null)}>×</button>
        {modal === 'stats' ? <>
          <h2>学习统计 <span>Study Statistics</span></h2>
          <div className="stat-grid"><Stat value={`${progress.answered.length}/${quotes.length}`} label="已完成"/><Stat value={`${accuracy}%`} label="正确率"/><Stat value={String(progress.bestStreak)} label="最佳连胜"/><Stat value={String(progress.mistakes.length)} label="错题数量"/></div>
          <div className="progress-track"><i style={{width:`${progress.answered.length / quotes.length * 100}%`}}></i></div>
          <p>{progress.answered.length === quotes.length ? '已完成全部题目。清空学习记录后可开始新一轮。' : `坚持完成全部 ${quotes.length} 条引文，建立“人物—时代—主张”的联想网络。`}</p>
        </> : modal === 'mistakes' ? <>
          <h2>错题簿 <span>Mistake Book · {progress.mistakes.length}</span></h2>
          {progress.mistakes.length ? <>
            <div className="mistake-review-actions"><button onClick={() => startMistakeReview('all')}>全部重做</button><button onClick={() => startMistakeReview('random')}>随机重做一题</button></div>
            <div className="mistake-book-list">{progress.mistakes.map((id) => {
              const mistake = quotes.find((quote) => quote.id === id);
              if (!mistake) return null;
              const author = peopleById[mistake.personId];
              return <article key={id}><span>“{mistake.text}”</span><small>{author.nameZh} · {mistake.source}</small></article>;
            })}</div>
          </> : <div className="empty-mistakes">✦<strong>错题簿是空的</strong><small>答错的题目会自动加入，重做答对后自动移除。</small></div>}
        </> : <>
          <h2>设置 <span>Settings</span></h2>
          <label className="setting-row"><span><b>显示英文背景</b><small>Show English context</small></span><input type="checkbox" checked={showEnglish} onChange={(e) => {setShowEnglish(e.target.checked);localStorage.setItem('apush-show-english',String(e.target.checked));}}/></label>
          <label className="setting-row"><span><b>减少动画</b><small>Reduce motion</small></span><input type="checkbox" checked={quietMotion} onChange={(e) => setQuietMotion(e.target.checked)}/></label>
          <button className="reset-button" onClick={() => { if(confirm('确定清空学习记录？')) { saveProgress(initialProgress); setModal(null); } }}>清空学习记录</button>
        </>}
      </section></div>}
    </main>
  );
}

function WikiRow({person,index}:{person:Person;index:number}) {
  return <a href={person.wiki} target="_blank" rel="noreferrer"><span className="wiki-number">{index + 1}</span><img src={person.image} alt=""/><span><b>{person.nameZh}</b><small>{person.nameEn} · {person.years}</small></span><strong className="wiki-w">W</strong></a>;
}

function AnimatedQuote({text,duration}:{text:string;duration:number}) {
  const words = text.trim().split(/\s+/);
  const characterCount = words.reduce((total, word) => total + Array.from(word).length, 0);
  let offset = 0;
  return <blockquote className="handwriting-quote" aria-label={text}>{words.map((word,wordIndex) => {
    const wordStart = offset;
    offset += Array.from(word).length;
    return <Fragment key={`${wordIndex}-${word}`}>{wordIndex ? ' ' : null}<span className="handwriting-word" aria-hidden="true">{Array.from(word).map((character,index) => <span className="handwriting-character" key={`${index}-${character}`} style={{animationDelay:`${(wordStart + index) / Math.max(characterCount - 1, 1) * Math.max(duration - .18, 0)}s`}}>{character}</span>)}</span></Fragment>;
  })}</blockquote>;
}

function Stat({value,label}:{value:string;label:string}) { return <div><strong>{value}</strong><span>{label}</span></div>; }
