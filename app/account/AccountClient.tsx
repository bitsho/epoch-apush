"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AccountClient({ initialUser }: { initialUser: { username: string } | null }) {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const form = new FormData(event.currentTarget);
    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: form.get("username"), password: form.get("password") }),
    }).catch(() => null);
    const data = response ? await response.json().catch(() => ({})) as { error?: string } : {};
    if (!response?.ok) {
      setMessage(data.error ?? "网络连接失败，请稍后重试");
      setBusy(false);
      return;
    }
    window.location.href = "/analytics?game=codenames";
  }

  async function logout() {
    setBusy(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.refresh();
    window.location.href = "/";
  }

  if (initialUser) {
    return (
      <section className="account-card">
        <p className="eyebrow">EPOCH 学习账户</p>
        <h1>账户已登录</h1>
        <p>游戏记录会保存到你的个人账户，并同步展示在数据分析页。</p>
        <div className="account-identity"><strong>{initialUser.username}</strong><span>用户名账户</span></div>
        <div className="account-actions">
          <a className="primary-button" href="/analytics?game=codenames">查看个人数据 →</a>
          <button className="account-text-button" type="button" disabled={busy} onClick={logout}>退出登录</button>
        </div>
      </section>
    );
  }

  return (
    <section className="account-card">
      <p className="eyebrow">EPOCH 学习账户</p>
      <h1>{mode === "login" ? "登录学习账户" : "创建学习账户"}</h1>
      <p>使用用户名和密码保存学习记录；不登录也可以继续游玩并保留本机数据。</p>
      <div className="account-tabs" role="tablist" aria-label="账户操作">
        <button type="button" role="tab" aria-selected={mode === "login"} onClick={() => { setMode("login"); setMessage(""); }}>登录</button>
        <button type="button" role="tab" aria-selected={mode === "register"} onClick={() => { setMode("register"); setMessage(""); }}>注册</button>
      </div>
      <form className="account-form" onSubmit={submit}>
        <label>用户名<input name="username" autoComplete="username" minLength={3} maxLength={24} required /></label>
        <label>密码<input name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={8} maxLength={72} required /></label>
        {message && <p className="account-error" role="alert">{message}</p>}
        <button className="primary-button" type="submit" disabled={busy}>{busy ? "请稍候…" : mode === "login" ? "登录 →" : "注册并登录 →"}</button>
      </form>
      <small>密码会经过加盐哈希后保存，站点不会存储明文密码。</small>
    </section>
  );
}
