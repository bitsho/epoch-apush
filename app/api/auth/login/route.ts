import { createSession, isSameOrigin, normalizeUsername, verifyPassword } from "../../../auth";
import { getDb } from "../../../../db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: "来源校验失败" }, { status: 403 });
  const body = (await request.json().catch(() => null)) as { username?: unknown; password?: unknown } | null;
  const username = typeof body?.username === "string" ? body.username : "";
  const password = typeof body?.password === "string" ? body.password : "";
  if (!username || !password || password.length > 72) {
    return Response.json({ error: "用户名或密码不正确" }, { status: 401 });
  }

  const sql = getDb();
  const rows = await sql`
    SELECT id, username, password_hash
    FROM users
    WHERE username_normalized = ${normalizeUsername(username)}
    LIMIT 1
  `;
  const row = rows[0] as { id?: string; username?: string; password_hash?: string } | undefined;
  if (!row?.id || !row.username || !row.password_hash || !(await verifyPassword(password, row.password_hash))) {
    return Response.json({ error: "用户名或密码不正确" }, { status: 401 });
  }

  await createSession(row.id);
  return Response.json({ signedIn: true, user: { displayName: row.username, username: row.username } });
}
