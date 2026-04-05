"use client";

import { useEffect, useRef, useState } from "react";
import { useLeadModal } from "@/context/LeadModalContext";

type Status = "idle" | "loading" | "success" | "error";

export function LeadModal() {
  const { isOpen, closeModal } = useLeadModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [niche, setNiche] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Focus first input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setName("");
        setPhone("");
        setNiche("");
        setStatus("idle");
      }, 300);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, niche }),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/60 px-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === overlayRef.current) closeModal(); }}
    >
      <div className="relative w-full max-w-[480px] bg-white p-8 shadow-2xl max-[480px]:p-6">
        {/* Close */}
        <button
          onClick={closeModal}
          aria-label="Закрыть"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center text-brand-dark/40 transition-colors hover:text-brand-dark"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-start py-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center bg-brand-blue">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 10l5 5 9-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-[24px] font-[400] leading-[1.1] text-brand-dark">
              заявка принята.
            </h2>
            <p className="mt-3 text-[15px] leading-[1.5] text-brand-dark/60">
              мы свяжемся с вами в ближайшее время.
            </p>
            <button
              onClick={closeModal}
              className="mt-8 inline-flex h-[52px] items-center justify-center bg-brand-dark px-8 text-[15px] font-[400] text-white transition-colors hover:bg-brand-dark/80"
            >
              закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="mb-1 text-[24px] font-[400] leading-[1.1] text-brand-dark max-[480px]:text-[20px]">
              оставьте заявку
            </h2>
            <p className="mb-7 text-[14px] leading-[1.5] text-brand-dark/50">
              и мы свяжемся с вами.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-[500] uppercase tracking-[0.12em] text-brand-dark/50">
                  как к вам обращаться?<span className="ml-0.5 text-brand-blue">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Имя"
                  className="h-[52px] border border-brand-dark/20 px-4 text-[15px] text-brand-dark outline-none placeholder:text-brand-dark/30 focus:border-brand-dark transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-[500] uppercase tracking-[0.12em] text-brand-dark/50">
                  телефон для связи<span className="ml-0.5 text-brand-blue">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+7 000 000 00 00"
                  className="h-[52px] border border-brand-dark/20 px-4 text-[15px] text-brand-dark outline-none placeholder:text-brand-dark/30 focus:border-brand-dark transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-[500] uppercase tracking-[0.12em] text-brand-dark/50">
                  в какой нише ваш бизнес?
                </label>
                <input
                  type="text"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="Например: e-commerce, B2B SaaS"
                  className="h-[52px] border border-brand-dark/20 px-4 text-[15px] text-brand-dark outline-none placeholder:text-brand-dark/30 focus:border-brand-dark transition-colors"
                />
              </div>
            </div>

            {status === "error" && (
              <p className="mt-4 text-[13px] text-brand-blue">
                произошла ошибка. попробуйте ещё раз.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading" || !name.trim() || !phone.trim()}
              className="mt-7 inline-flex h-[52px] w-full items-center justify-center bg-brand-blue text-[15px] font-[400] text-white transition-colors hover:bg-brand-blue-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "отправляем…" : "отправить заявку"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
