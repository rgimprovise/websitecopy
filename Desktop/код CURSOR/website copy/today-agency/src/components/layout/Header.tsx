"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <Container className="relative flex items-center justify-between py-3 sm:py-4 md:py-5">
        <Link href="/" className="block">
          <img
            src={scrolled ? "/images/main-logo-dark.svg" : "/images/Main Logo.svg"}
            alt="ALARCEV"
            className="h-[36px] w-auto transition-opacity"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:absolute md:left-1/2 md:-translate-x-1/2 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:opacity-70 ${
                scrolled ? "text-brand-dark" : "text-white"
              }`}
            >
              {link.label}.
            </Link>
          ))}
        </nav>

        <div className="hidden md:ml-auto md:block">
          <Button
            href="#contacts"
            variant={scrolled ? "primary" : "outline-light"}
          >
            контакты
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Меню"
        >
          <span
            className={`h-0.5 w-5 transition-all duration-300 ${
              menuOpen
                ? "translate-y-1 rotate-45 bg-white"
                : scrolled
                  ? "bg-brand-dark"
                  : "bg-white"
            }`}
          />
          <span
            className={`h-0.5 w-5 transition-all duration-300 ${
              menuOpen
                ? "-translate-y-1 -rotate-45 bg-white"
                : scrolled
                  ? "bg-brand-dark"
                  : "bg-white"
            }`}
          />
        </button>
      </Container>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-start justify-center bg-brand-blue px-8 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light text-white"
            >
              {link.label}.
            </Link>
          ))}
          <Link
            href="#contacts"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-light text-white"
          >
            контакты.
          </Link>
        </nav>
      </div>
    </header>
  );
}
