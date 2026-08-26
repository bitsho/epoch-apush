import Link from "next/link";
import { getCurrentUser } from "../auth";
import AccountClient from "./AccountClient";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const user = await getCurrentUser();
  return (
    <main className="account-shell">
      <Link className="analysis-back" href="/">← 返回网站主页</Link>
      <AccountClient initialUser={user ? { username: user.username } : null} />
    </main>
  );
}
