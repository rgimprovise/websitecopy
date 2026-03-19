import { type AnchorHTMLAttributes, type ReactNode } from "react";

interface ContactLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

export function ContactLink({ children, className = "", ...props }: ContactLinkProps) {
  return (
    <a
      {...props}
      className={`text-sm text-white/60 transition-colors hover:text-white ${className}`}
    >
      {children}
    </a>
  );
}
