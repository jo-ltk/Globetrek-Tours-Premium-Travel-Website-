"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { cn } from "@/utils/helpers";

const navMap = {
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/events", label: "About us" },
    { href: "/en/experiences", label: "Transfers" },
    { href: "/en/packages", label: "Tours" },
    { href: "/en/contact", label: "Contacts" },
  ],
  de: [
    { href: "/de", label: "Start" },
    { href: "/de/events", label: "Uber uns" },
    { href: "/de/experiences", label: "Transfers" },
    { href: "/de/packages", label: "Touren" },
    { href: "/de/contact", label: "Kontakt" },
  ],
} as const;

export default function Navbar({
  locale = "en",
  fullscreenHero = false,
}: {
  locale?: "en" | "de";
  fullscreenHero?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const items = navMap[locale];
  const cta = locale === "de" ? "Tour buchen" : "Book a Tour";

  return (
    <header
      className={cn(
        "px-5 py-5 sm:px-8 lg:px-12 transition-colors duration-300",
        fullscreenHero
          ? "text-white"
          : ""
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href={locale === "de" ? "/de" : "/en"}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold shadow-sm transition-colors duration-200",
              fullscreenHero
                ? "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                : "border border-[var(--line)] bg-white/55"
            )}
          >
            /
          </Link>
          <LanguageSwitcher locale={locale} />
        </div>

        <nav
          className={cn(
            "hidden items-center gap-10 text-xs lg:flex",
            fullscreenHero ? "text-white/75" : "text-[var(--muted)]"
          )}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors duration-200",
                fullscreenHero ? "hover:text-white" : "hover:text-[var(--ink)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={locale === "de" ? "/de/packages" : "/en/packages"}
            className={cn(
              "rounded-lg px-5 py-3 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5",
              fullscreenHero
                ? "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[#203523]"
                : "bg-[var(--accent)] text-white"
            )}
          >
            {cta}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/60 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 lg:hidden",
          open ? "max-h-80 pt-4" : "max-h-0"
        )}
      >
        <div className="luxury-card space-y-3 p-4 text-sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3 py-2 text-[var(--muted)] transition-colors duration-200 hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={locale === "de" ? "/de/packages" : "/en/packages"}
            className="block rounded-xl bg-[var(--accent)] px-3 py-3 text-center text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            {cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
