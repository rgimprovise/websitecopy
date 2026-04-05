"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface LeadModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <LeadModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal(): LeadModalContextValue {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}
