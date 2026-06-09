export default function Home() {
  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#0058A3" fillOpacity=".1" />
          <path d="M8 22l5-7 4 5 3-4 5 6H8z" fill="#0058A3" />
          <circle cx="22" cy="11" r="3" fill="#FFDA1A" stroke="#0058A3" strokeWidth="1.5" />
        </svg>
      ),
      title: "데이터 분석 및 인사이트 도출",
      description:
        "비즈니스 데이터를 수집·분석하여 의미 있는 인사이트를 발굴하고, 데이터 기반의 의사결정을 지원합니다.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#0058A3" fillOpacity=".1" />
          <rect x="7" y="14" width="6" height="11" rx="1" fill="#0058A3" />
          <rect x="15" y="10" width="6" height="15" rx="1" fill="#FFDA1A" stroke="#0058A3" strokeWidth="1" />
          <rect x="23" y="7" width="2" height="18" rx="1" fill="#0058A3" />
        </svg>
      ),
      title: "맞춤형 솔루션 개발",
      description:
        "고객의 요구사항을 정확히 파악하여 최적화된 소프트웨어 솔루션을 설계하고 개발합니다.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#0058A3" fillOpacity=".1" />
          <circle cx="12" cy="13" r="5" fill="#FFDA1A" stroke="#0058A3" strokeWidth="1.5" />
          <circle cx="22" cy="13" r="5" fill="#0058A3" fillOpacity=".3" stroke="#0058A3" strokeWidth="1.5" />
          <path d="M7 24c0-3 2.2-5 5-5h6c2.8 0 5 2 5 5" stroke="#0058A3" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "전략 컨설팅 및 기술 지원",
      description:
        "디지털 전환 전략 수립부터 운영 최적화까지, 전문 컨설팅과 지속적인 기술 지원을 제공합니다.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--ikea-white)", color: "var(--ikea-ink)" }}>

      {/* ── IKEA-style Header ── */}
      <header style={{ backgroundColor: "var(--ikea-blue)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Team name badge in IKEA yellow */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center px-4 py-2 font-bold text-lg tracking-tight"
              style={{
                backgroundColor: "var(--ikea-yellow)",
                color: "var(--ikea-ink)",
                borderRadius: "4px",
              }}
            >
              Alpha Team
            </div>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-bold">
            <a href="#services" className="transition-opacity hover:opacity-75" style={{ color: "var(--ikea-white)" }}>
              서비스
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-75" style={{ color: "var(--ikea-yellow)" }}>
              문의하기
            </a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col flex-1">

        {/* ── Hero ── */}
        <section
          className="px-6 py-20 sm:py-28"
          style={{ backgroundColor: "var(--ikea-warm-beige)" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-10">
            <div className="flex-1">
              {/* Eyebrow label */}
              <span
                className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1"
                style={{
                  backgroundColor: "var(--ikea-yellow)",
                  color: "var(--ikea-ink)",
                  borderRadius: "4px",
                }}
              >
                Team Introduction
              </span>

              {/* Hero title – IKEA scale: 40px, weight 700 */}
              <h1
                className="font-bold leading-tight mb-5"
                style={{ fontSize: "40px", color: "var(--ikea-ink)" }}
              >
                Alpha Team
              </h1>

              {/* Body large – 18px */}
              <p style={{ fontSize: "18px", color: "var(--ikea-muted)", lineHeight: "1.7", maxWidth: "480px" }}>
                데이터와 기술로 비즈니스의 가능성을 확장합니다.<br />
                함께 더 나은 미래를 만들어 갑니다.
              </p>
            </div>

            {/* Decorative IKEA-blue block */}
            <div
              className="hidden sm:flex items-center justify-center w-56 h-56 flex-shrink-0"
              style={{ backgroundColor: "var(--ikea-blue)", borderRadius: "8px" }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <rect x="10" y="40" width="16" height="30" rx="2" fill="white" fillOpacity=".6" />
                <rect x="32" y="26" width="16" height="44" rx="2" fill="var(--ikea-yellow)" />
                <rect x="54" y="14" width="16" height="56" rx="2" fill="white" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-20 px-6" style={{ backgroundColor: "var(--ikea-white)" }}>
          <div className="max-w-5xl mx-auto">

            {/* Section title – 30px, weight 700 */}
            <h2
              className="font-bold mb-2"
              style={{ fontSize: "30px", color: "var(--ikea-ink)" }}
            >
              우리 팀이 하는 일
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ikea-muted)", marginBottom: "36px" }}>
              전문성과 경험을 바탕으로 세 가지 핵심 서비스를 제공합니다.
            </p>

            {/* IKEA-style horizontal rule */}
            <div style={{ height: "2px", backgroundColor: "var(--ikea-yellow)", width: "48px", marginBottom: "36px" }} />

            <div className="grid sm:grid-cols-3 gap-5">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="ikea-card flex flex-col gap-4 p-6"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid var(--ikea-border)",
                    backgroundColor: "var(--ikea-white)",
                  }}
                >
                  {service.icon}

                  {/* Card title – 22px, weight 600 */}
                  <h3 style={{ fontSize: "22px", fontWeight: 600, color: "var(--ikea-ink)", lineHeight: "1.35" }}>
                    {service.title}
                  </h3>

                  {/* Small body – 14px */}
                  <p style={{ fontSize: "14px", color: "var(--ikea-muted)", lineHeight: "1.7" }}>
                    {service.description}
                  </p>

                  {/* Inline link */}
                  <span
                    className="mt-auto text-sm font-bold flex items-center gap-1 cursor-pointer"
                    style={{ color: "var(--ikea-blue)" }}
                  >
                    자세히 보기
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA (Contact) ── */}
        <section
          id="contact"
          className="py-20 px-6"
          style={{ backgroundColor: "var(--ikea-surface-gray)" }}
        >
          <div
            className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 p-10"
            style={{
              backgroundColor: "var(--ikea-blue)",
              borderRadius: "16px",
            }}
          >
            <div>
              {/* Section title in white */}
              <h2
                className="font-bold mb-2"
                style={{ fontSize: "30px", color: "var(--ikea-white)" }}
              >
                함께 일하고 싶으신가요?
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)" }}>
                궁금한 점이 있거나 협업을 원하신다면 언제든지 연락해 주세요.
              </p>
            </div>

            {/* IKEA Primary Button – black, pill shape, 44px+ height */}
            <a
              href="mailto:contact@alphateam.com"
              className="flex-shrink-0 flex items-center gap-2 font-bold transition-opacity hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "var(--ikea-ink)",
                color: "var(--ikea-white)",
                borderRadius: "999px",
                padding: "14px 32px",
                fontSize: "16px",
                minHeight: "44px",
                textDecoration: "none",
              }}
            >
              문의하기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid var(--ikea-border)",
          backgroundColor: "var(--ikea-white)",
        }}
      >
        <div
          className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between"
          style={{ fontSize: "12px", color: "var(--ikea-muted)" }}
        >
          <span>© 2026 Alpha Team. All rights reserved.</span>
          <span
            className="font-bold uppercase tracking-widest px-2 py-1"
            style={{ backgroundColor: "var(--ikea-yellow)", color: "var(--ikea-ink)", borderRadius: "2px", fontSize: "10px" }}
          >
            Alpha Team
          </span>
        </div>
      </footer>
    </div>
  );
}
