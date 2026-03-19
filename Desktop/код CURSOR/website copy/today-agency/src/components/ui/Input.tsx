import { type InputHTMLAttributes } from "react";

type InputVariant = "default" | "light";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
}

const variants: Record<InputVariant, string> = {
  default:
    "border-brand-dark/20 text-brand-dark placeholder:text-brand-muted focus:border-brand-dark",
  light:
    "border-white/30 text-white placeholder:text-white/40 focus:border-white",
};

export function Input({ variant = "default", className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`rounded-none border-b bg-transparent px-0 py-3 text-sm outline-none transition-colors ${variants[variant]} ${className}`}
    />
  );
}
