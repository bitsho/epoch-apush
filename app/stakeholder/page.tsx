import UserNav from "../components/UserNav";

export default function StakeholderReactionPage() {
  return (
    <main className="stakeholder-frame-shell">
      <div className="frame-account-strip dark">
        <a className="frame-home-link" href="/">← 返回网站主页</a>
        <UserNav compact hideHome analysisGame="stakeholder" />
      </div>
      <iframe
        className="stakeholder-frame"
        src="/apush-stakeholder-game.html"
        title="APUSH 历史利益相关者立场推演"
      />
    </main>
  );
}
