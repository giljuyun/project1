import { getDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "모든 항목을 입력해주세요." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "올바른 이메일 형식이 아닙니다." }, { status: 400 });
  }

  const sql = getDb();
  await sql`
    INSERT INTO consultations (name, email, message)
    VALUES (${name.trim()}, ${email.trim()}, ${message.trim()})
  `;

  return NextResponse.json({ ok: true });
}

export async function GET() {
  const sql = getDb();
  const rows = await sql`
    SELECT id, name, email, message, created_at
    FROM consultations
    ORDER BY created_at DESC
  `;
  return NextResponse.json(rows);
}
