import { getCurrentUser } from "../../auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return Response.json({ signedIn: false });
  return Response.json({ signedIn: true, user: { displayName: user.displayName, username: user.username } });
}
