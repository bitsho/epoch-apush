"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import UserNav from "../components/UserNav";
import { storeTimelineResult } from "../game-results";

type EpochBridgeWindow = Window & {
  EPOCH_SITE_BRIDGE?: {
    recordGameResult: (payload: unknown) => Promise<boolean>;
    openAnalytics: (gameType?: string) => void;
    goHome: () => void;
  };
};

export default function TimelineChallengePage() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();

  const installBridge = useCallback(() => {
    const gameWindow = frameRef.current?.contentWindow as EpochBridgeWindow | null;
    if (!gameWindow) return;
    gameWindow.EPOCH_SITE_BRIDGE = {
      recordGameResult: async (payload) => storeTimelineResult(payload),
      openAnalytics: () => router.push("/analytics?game=timeline"),
      goHome: () => router.push("/"),
    };
  }, [router]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || !event.data || typeof event.data !== "object") return;
      const message = event.data as { type?: string; payload?: unknown };
      if (message.type === "epoch:game-result") void storeTimelineResult(message.payload);
      if (message.type === "epoch:open-analytics") router.push("/analytics?game=timeline");
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
    <main className="timeline-frame-shell">
      <div className="frame-account-strip">
        <a className="frame-home-link" href="/">← 返回网站主页</a>
        <UserNav compact hideHome analysisGame="timeline" />
      </div>
      <iframe
        ref={frameRef}
        className="timeline-frame"
        src="/apush-timeline-game.html"
        title="AP 美国史时间线排序挑战"
        onLoad={installBridge}
      />
    </main>
  );
}
