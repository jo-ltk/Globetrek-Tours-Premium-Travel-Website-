"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/helpers";
import { getLocaleFromPathname } from "@/utils/locale";

export default function LanguageSwitcher({
  locale = "en",
}: {
  locale?: "en" | "de";
}) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) || locale;

  const getLocaleHref = (targetLocale: "en" | "de") => {
    if (!pathname || pathname === "/") {
      return `/${targetLocale}`;
    }

    if (pathname.startsWith("/en/") || pathname === "/en") {
      return pathname.replace(/^\/en\b/, `/${targetLocale}`);
    }

    if (pathname.startsWith("/de/") || pathname === "/de") {
      return pathname.replace(/^\/de\b/, `/${targetLocale}`);
    }

    return `/${targetLocale}`;
  };

  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-1 rounded-full border border-black/5 shadow-sm">
      <Link
        href={getLocaleHref("en")}
        aria-label="Switch to English"
        title="Switch to English"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold tracking-widest transition-all duration-300",
          currentLocale === "en" 
            ? "bg-black text-white shadow-lg scale-105" 
            : "text-black/40 hover:text-black hover:bg-black/5"
        )}
      >
        EN
      </Link>
      <Link
        href={getLocaleHref("de")}
        aria-label="Switch to German"
        title="Switch to German"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold tracking-widest transition-all duration-300",
          currentLocale === "de" 
            ? "bg-black text-white shadow-lg scale-105" 
            : "text-black/40 hover:text-black hover:bg-black/5"
        )}
      >
        DE
      </Link>
    </div>
  );
}

