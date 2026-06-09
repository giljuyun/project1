import { createConsultationsTable } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await createConsultationsTable();
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
