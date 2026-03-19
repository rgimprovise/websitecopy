/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealAs =
  | "div"
  | "span"
  | "section"
  | "article"
  | "p"
  | "a"
  | "h1"
  | "h2"
  | "h3";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: RevealAs;
  /**
   * Controls the animation preset. Tilda page uses `data-animate-style=fadein`.
   * We keep this extensible for future presets.
   */
  preset?: "fadein";
  /**
   * Helpers to emulate `data-animate-chain` (row/element sequential delays).
   * If `chainIndex` is provided, effective delay becomes `delayMs + chainIndex*chainStepMs`.
   */
  chainIndex?: number;
  chainStepMs?: number;
}

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as: Tag = "div",
  preset = "fadein",
  chainIndex,
  chainStepMs,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const effectiveDelayMs =
    delayMs +
    (chainIndex != null && chainStepMs != null
      ? chainIndex * chainStepMs
      : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${effectiveDelayMs}ms` }}
      className={[
        "transform transition-all duration-700 ease-out",
        preset === "fadein" ? "translate-y-3 opacity-0" : "",
        visible ? "translate-y-0 opacity-100" : "",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

