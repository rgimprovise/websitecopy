import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionBg = "default" | "gray" | "blue" | "dark";

interface SectionProps {
  children: ReactNode;
  id?: string;
  bg?: SectionBg;
  largePadding?: boolean;
  paddingClassName?: string;
  className?: string;
}

const bgClasses: Record<SectionBg, string> = {
  default: "",
  gray: "bg-brand-gray",
  blue: "bg-brand-blue",
  dark: "bg-brand-dark text-white",
};

export function Section({
  children,
  id,
  bg = "default",
  largePadding = false,
  paddingClassName,
  className = "",
}: SectionProps) {
  const padding =
    paddingClassName ??
    (largePadding
      ? "py-16 sm:py-20 md:py-28 lg:py-36"
      : "py-16 sm:py-20 md:py-24 lg:py-28");

  return (
    <section id={id} className={`${padding} ${bgClasses[bg]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
