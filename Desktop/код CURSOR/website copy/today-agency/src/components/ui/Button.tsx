import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "outline-light";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: never;
}

interface ButtonActionProps extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = ButtonLinkProps | ButtonActionProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-hover",
  outline:
    "border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
  "outline-light":
    "border border-white text-white hover:bg-white hover:text-brand-blue",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 sm:px-7 sm:py-3 ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonActionProps).type ?? "button"}
      onClick={(props as ButtonActionProps).onClick}
      className={base}
    >
      {children}
    </button>
  );
}
