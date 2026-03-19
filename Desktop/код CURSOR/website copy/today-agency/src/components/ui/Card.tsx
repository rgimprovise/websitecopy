import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  compact?: boolean;
  className?: string;
  as?: "div" | "article" | "p";
}

export function Card({
  children,
  compact = false,
  className = "",
  as: Tag = "div",
}: CardProps) {
  const padding = compact ? "pt-4 pb-4" : "pt-5 pb-6";

  return (
    <Tag className={`border-t border-brand-dark ${padding} ${className}`}>
      {children}
    </Tag>
  );
}
