import "server-only";

import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { getDb } from "../db";

const scrypt = promisify(scryptCallback);
const SESSION_COOKIE = "epoch_session";
const SESSION_DAYS = 30;

export type AccountUser = {
  userId: string;
  username: string;
  displayName: string;
};

export function normalizeUsername(value: string) {
  return value.normalize("NFKC").trim().toLocaleLowerCase("zh-CN");
}

export function validateCredentials(username: string, password: string) {
  const cleanUsername = username.normalize("NFKC").trim();
  const usernameLength = [...cleanUsername].length;
  if (usernameLength < 3 || usernameLength > 24 || !/^[\p{L}\p{N}_-]+$/u.test(cleanUsername)) {
    return "用户名需为 3–24 个字符，仅可使用文字、数字、下划线或连字符";
  }
  if (password.length < 8 || password.length > 72) return "密码需为 8–72 个字符";
  return null;
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  const derived = (await scrypt(password, salt, 64)) as Buffer;
  return `scrypt$${salt.toString("base64url")}$${derived.toString("base64url")}`;
}

export async function verifyPassword(password: string, stored: string) {
  const [algorithm, saltText, hashText] = stored.split("$");
  if (algorithm !== "scrypt" || !saltText || !hashText) return false;
  const expected = Buffer.from(hashText, "base64url");
  const actual = (await scrypt(password, Buffer.from(saltText, "base64url"), expected.length)) as Buffer;
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

function hashSessionToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function createSession(userId: string) {
  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashSessionToken(token);
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 86_400_000);
  const sql = getDb();
  await sql`INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (${tokenHash}, ${userId}, ${expiresAt.toISOString()})`;
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function clearSession() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (token) {
    const sql = getDb();
    await sql`DELETE FROM sessions WHERE token_hash = ${hashSessionToken(token)}`;
  }
  store.set(SESSION_COOKIE, "", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 0 });
}

export async function getCurrentUser(): Promise<AccountUser | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const sql = getDb();
  const rows = await sql`
    SELECT u.id, u.username
    FROM sessions s
    JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ${hashSessionToken(token)} AND s.expires_at > now()
    LIMIT 1
  `;
  const row = rows[0] as { id?: string; username?: string } | undefined;
  if (!row?.id || !row.username) return null;
  return { userId: row.id, username: row.username, displayName: row.username };
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}
