import { clearSession, isSameOrigin } from "../../../auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: "来源校验失败" }, { status: 403 });
  await clearSession();
  return Response.json({ signedIn: false });
}
