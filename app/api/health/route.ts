import { getDb } from "../../../db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const sql = getDb();
    await sql`SELECT 1 AS ok`;
    return Response.json({ ok: true, database: "connected" });
  } catch (error) {
    console.error("Health check failed", error);
    return Response.json({ ok: false, database: "unavailable" }, { status: 503 });
  }
}
