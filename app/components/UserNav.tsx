"use client";

import { useEffect, useState } from "react";

type Session = { signedIn: boolean; user?: { displayName: string; username: string } };

export default function UserNav({
  compact = false,
  hideHome = false,
  analysisGame = "codenames",
}: {
  compact?: boolean;
  hideHome?: boolean;
  analysisGame?: "codenames" | "stakeholder" | "timeline";
}) {
  const [session, setSession] = useState<Session | null>(null);
  const analysisHref = `/analytics?game=${analysisGame}`;

  useEffect(() => {
    fetch("/api/me", { cache: "no-store" })
      .then((response) => response.json())
      .then(setSession)
      .catch(() => setSession({ signedIn: false }));
  }, []);

  return (
    <nav className={`user-nav ${compact ? "compact" : ""}`} aria-label="用户与学习导航">
      {!hideHome && <a href="/">主页</a>}
      <a href={analysisHref}>{session?.signedIn ? session.user?.displayName || "个人数据" : "个人数据"}</a>
      <a className={session?.signedIn ? "user-chip" : "login-chip"} href="/account">
        {session?.signedIn ? "账户" : "登录"}
      </a>
    </nav>
  );
}
