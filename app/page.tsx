import UserNav from "./components/UserNav";

const tools = [
  {
    number: "01",
    eyebrow: "CONCEPT ASSOCIATION",
    title: "APUSH Codenames\n历史代号",
    description:
      "根据线索找出彼此关联的美国史概念，在 16 张卡牌中识别目标、避开高迷惑干扰项，并用历史关系建立知识网络。",
    href: "/codenames",
    action: "开始历史代号挑战",
    meta: ["AP Unit 1–9", "三档难度", "中英双语"],
    tone: "codenames",
  },
  {
    number: "02",
    eyebrow: "STAKEHOLDER SIMULATION",
    title: "历史利益相关者\n立场推演",
    description:
      "进入不同历史角色的处境，判断政策与事件如何改变其利益、风险和政治支持，用五档反应训练历史情境化。",
    href: "/stakeholder",
    action: "进入历史立场推演",
    meta: ["39 个历史事件", "780 角色记录", "中英双语"],
    tone: "stakeholder",
  },
  {
    number: "03",
    eyebrow: "CHRONOLOGY CHALLENGE",
    title: "美国史时间线\n排序挑战",
    description:
      "把随机出现的关键事件插入正确年代位置，按 AP 单元与难度进行专项练习，并在结束后回顾完整历史时间线。",
    href: "/timeline",
    action: "开始时间线排序",
    meta: ["300+", "AP 九个单元", "中英双语"],
    tone: "timeline",
  },
];

export default function LearningHub() {
  return (
    <main className="hub-shell">
      <header className="hub-topbar">
        <a className="hub-brand" href="#top" aria-label="EPOCH 学习主页">
          <span className="hub-brand-mark">E</span>
          <span><strong>EPOCH</strong><small>APUSH LEARNING LAB</small></span>
        </a>
        <UserNav compact hideHome analysisGame="codenames" />
      </header>

      <section className="hub-hero" id="top">
        <p className="hub-eyebrow">AMERICAN HISTORY · LEARNING SUITE</p>
        <h1>用线索连接历史，<br />练会人物如何思考。</h1>
        <div className="hub-intro">
          <p>选择一种学习路径：用 Codenames 建立概念关联，通过利益相关者推演理解历史立场，或用时间线挑战巩固年代框架。</p>
          <span>SELECT A LEARNING PATH ↓</span>
        </div>
      </section>

      <section className="hub-tool-grid" aria-label="学习工具">
        {tools.map((tool) => (
          <a className={`hub-tool-card hub-tool-${tool.tone}`} href={tool.href} key={tool.href}>
            <div className="hub-tool-head">
              <span>{tool.number}</span>
              <p>{tool.eyebrow}</p>
            </div>
            <div className="hub-tool-body">
              <h2>{tool.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
              <p>{tool.description}</p>
            </div>
            <ul>
              {tool.meta.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="hub-tool-action"><span>{tool.action}</span><b aria-hidden="true">→</b></div>
          </a>
        ))}
      </section>

    </main>
  );
}
