import { type ReactNode } from "react";
import { SectionLabel } from "./SectionLabel";

interface SectionHeaderProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function SectionHeader({
  label,
  children,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-4 text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
        {children}
      </h2>
    </div>
  );
}
