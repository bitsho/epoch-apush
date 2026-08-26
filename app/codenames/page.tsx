"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { storeCodenamesResult } from "../game-results";
import UserNav from "../components/UserNav";

type EpochBridgeWindow = Window & {
  EPOCH_SITE_BRIDGE?: {
    recordGameResult: (payload: unknown) => Promise<boolean>;
    openAnalytics: (gameType?: string) => void;
    goHome: () => void;
  };
};

export default function CodenamesPage() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();

  const installBridge = useCallback(() => {
    const gameWindow = frameRef.current?.contentWindow as EpochBridgeWindow | null;
    if (!gameWindow) return;
    gameWindow.EPOCH_SITE_BRIDGE = {
      recordGameResult: async (payload) => storeCodenamesResult(payload),
      openAnalytics: () => router.push("/analytics?game=codenames"),
      goHome: () => router.push("/"),
    };
  }, [router]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || !event.data || typeof event.data !== "object") return;
      const message = event.data as { type?: string; payload?: unknown };
      if (message.type === "epoch:game-result") void storeCodenamesResult(message.payload);
      if (message.type === "epoch:open-analytics") router.push("/analytics?game=codenames");
      if (message.type === "epoch:go-home") router.push("/");
    };
    window.addEventListener("message", handleMessage);
    const timer = window.setTimeout(installBridge, 0);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("message", handleMessage);
    };
  }, [installBridge, router]);

  return (
    <main className="codenames-frame-shell">
      <div className="frame-account-strip codenames-strip">
        <a className="frame-home-link" href="/">← 返回网站主页</a>
        <UserNav compact hideHome analysisGame="codenames" />
      </div>
      <iframe
        ref={frameRef}
        className="codenames-frame"
        src="/apush-codenames-game.html"
        title="APUSH Codenames 历史概念关联游戏"
        onLoad={installBridge}
        allow="clipboard-write"
      />
    </main>
  );
}
