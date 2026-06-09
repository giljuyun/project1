"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "오류가 발생했습니다.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("네트워크 오류가 발생했습니다.");
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid var(--ikea-border)",
    borderRadius: "12px",
    fontSize: "15px",
    color: "var(--ikea-ink)",
    backgroundColor: "var(--ikea-white)",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 py-12"
        style={{ backgroundColor: "var(--ikea-warm-beige)", borderRadius: "16px", padding: "48px 32px" }}
      >
        <div
          className="flex items-center justify-center w-14 h-14 text-2xl"
          style={{ backgroundColor: "var(--ikea-yellow)", borderRadius: "50%" }}
        >
          ✓
        </div>
        <h3 className="font-bold text-xl" style={{ color: "var(--ikea-ink)" }}>
          상담 신청이 완료됐습니다!
        </h3>
        <p style={{ color: "var(--ikea-muted)", fontSize: "15px" }}>빠른 시일 내에 연락드리겠습니다.</p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            marginTop: "8px",
            padding: "10px 28px",
            borderRadius: "999px",
            backgroundColor: "var(--ikea-ink)",
            color: "var(--ikea-white)",
            fontSize: "14px",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
          }}
        >
          다시 신청하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-1.5 flex-1">
          <label style={{ fontSize: "13px", fontWeight: 700, color: "var(--ikea-ink)" }}>이름</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            required
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label style={{ fontSize: "13px", fontWeight: 700, color: "var(--ikea-ink)" }}>이메일</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            style={inputStyle}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label style={{ fontSize: "13px", fontWeight: 700, color: "var(--ikea-ink)" }}>상담 내용</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="문의하실 내용을 자유롭게 작성해주세요."
          required
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {status === "error" && (
        <p style={{ fontSize: "14px", color: "#c0392b", fontWeight: 600 }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          alignSelf: "flex-start",
          padding: "13px 36px",
          borderRadius: "999px",
          backgroundColor: status === "loading" ? "#555" : "var(--ikea-ink)",
          color: "var(--ikea-white)",
          fontSize: "15px",
          fontWeight: 700,
          border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "background-color 0.15s",
        }}
      >
        {status === "loading" ? "전송 중..." : "상담 신청하기"}
      </button>
    </form>
  );
}
