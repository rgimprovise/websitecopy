"use client";

import { useState } from "react";

export function PageReveal() {
  const [removed, setRemoved] = useState(false);

  if (removed) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999] bg-[#121212] animate-reveal-out"
      onAnimationEnd={() => setRemoved(true)}
    />
  );
}
