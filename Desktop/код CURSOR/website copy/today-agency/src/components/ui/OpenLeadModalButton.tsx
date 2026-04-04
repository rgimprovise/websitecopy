"use client";

import { useLeadModal } from "@/context/LeadModalContext";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function OpenLeadModalButton({ children, className }: Props) {
  const { openModal } = useLeadModal();
  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
