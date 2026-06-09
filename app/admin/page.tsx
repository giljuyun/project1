import { getDb } from "@/lib/db";

interface Consultation {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export const revalidate = 0;

async function getConsultations(): Promise<Consultation[]> {
  const sql = getDb();
  return await sql`
    SELECT id, name, email, message, created_at
    FROM consultations
    ORDER BY created_at DESC
  `;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminPage() {
  const consultations = await getConsultations();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--ikea-surface-gray)" }}>
      {/* Header */}
      <header style={{ backgroundColor: "var(--ikea-blue)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-75"
              style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
            >
              ← 메인으로
            </a>
          </div>
          <div
            className="px-4 py-2 font-bold text-lg"
            style={{ backgroundColor: "var(--ikea-yellow)", color: "var(--ikea-ink)", borderRadius: "4px" }}
          >
            상담 내역 관리
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Summary */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-bold mb-1" style={{ fontSize: "30px", color: "var(--ikea-ink)" }}>
              상담 신청 내역
            </h1>
            <p style={{ fontSize: "14px", color: "var(--ikea-muted)" }}>
              총 <strong style={{ color: "var(--ikea-blue)" }}>{consultations.length}건</strong>의 상담이 접수됐습니다.
            </p>
          </div>
          <div style={{ height: "2px", width: "48px", backgroundColor: "var(--ikea-yellow)" }} />
        </div>

        {consultations.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-24"
            style={{ backgroundColor: "var(--ikea-white)", borderRadius: "16px", border: "1px solid var(--ikea-border)" }}
          >
            <div className="text-4xl mb-4">📭</div>
            <p style={{ color: "var(--ikea-muted)", fontSize: "16px" }}>아직 접수된 상담이 없습니다.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {consultations.map((c) => (
              <div
                key={c.id}
                className="ikea-card p-6 sm:p-8"
                style={{
                  backgroundColor: "var(--ikea-white)",
                  borderRadius: "16px",
                  border: "1px solid var(--ikea-border)",
                }}
              >
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="flex items-center justify-center w-10 h-10 font-bold text-base flex-shrink-0"
                      style={{ backgroundColor: "var(--ikea-yellow)", borderRadius: "50%", color: "var(--ikea-ink)" }}
                    >
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold" style={{ fontSize: "16px", color: "var(--ikea-ink)" }}>
                        {c.name}
                      </p>
                      <a
                        href={`mailto:${c.email}`}
                        style={{ fontSize: "13px", color: "var(--ikea-blue)", textDecoration: "none" }}
                      >
                        {c.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className="px-2 py-0.5 text-xs font-bold"
                      style={{ backgroundColor: "var(--ikea-surface-gray)", color: "var(--ikea-muted)", borderRadius: "4px" }}
                    >
                      #{c.id}
                    </span>
                    <span style={{ fontSize: "13px", color: "var(--ikea-muted)" }}>
                      {formatDate(c.created_at)}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: "var(--ikea-border)", marginBottom: "16px" }} />

                {/* Message */}
                <p style={{ fontSize: "15px", color: "var(--ikea-ink)", lineHeight: "1.75", whiteSpace: "pre-wrap" }}>
                  {c.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
