import { createSession, hashPassword, isSameOrigin, normalizeUsername, validateCredentials } from "../../../auth";
import { getDb } from "../../../../db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: "来源校验失败" }, { status: 403 });
  const body = (await request.json().catch(() => null)) as { username?: unknown; password?: unknown } | null;
  const username = typeof body?.username === "string" ? body.username.normalize("NFKC").trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  const validationError = validateCredentials(username, password);
  if (validationError) return Response.json({ error: validationError }, { status: 400 });

  const sql = getDb();
  try {
    const rows = await sql`
      INSERT INTO users (username, username_normalized, password_hash)
      VALUES (${username}, ${normalizeUsername(username)}, ${await hashPassword(password)})
      RETURNING id
    `;
    await createSession(String(rows[0].id));
    return Response.json({ signedIn: true, user: { displayName: username, username } }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && /unique|duplicate/i.test(error.message)) {
      return Response.json({ error: "该用户名已被使用" }, { status: 409 });
    }
    console.error("Registration failed", error);
    return Response.json({ error: "暂时无法创建账户，请稍后重试" }, { status: 500 });
  }
}
