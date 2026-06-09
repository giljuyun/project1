import { neon } from "@neondatabase/serverless";

export function getDb() {
  return neon(process.env.DATABASE_URL!);
}

export async function createConsultationsTable() {
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS consultations (
      id         SERIAL PRIMARY KEY,
      name       VARCHAR(100)  NOT NULL,
      email      VARCHAR(200)  NOT NULL,
      message    TEXT          NOT NULL,
      created_at TIMESTAMPTZ   DEFAULT NOW()
    )
  `;
}
