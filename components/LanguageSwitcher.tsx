import Link from "next/link";
import { ChevronDown, Globe } from "lucide-react";

export default function LanguageSwitcher({
  locale = "en",
}: {
  locale?: "en" | "de";
}) {
  const label = locale === "de" ? "Deutsch" : "English";

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/65 px-3 py-2 text-xs text-[var(--ink)] shadow-sm backdrop-blur">
      <Globe className="h-3.5 w-3.5 text-[var(--muted)]" />
      <div className="flex items-center gap-2">
        <Link href="/en" className={locale === "en" ? "font-medium" : "text-[var(--muted)]"}>
          English
        </Link>
        <span className="text-[var(--line)]">/</span>
        <Link href="/de" className={locale === "de" ? "font-medium" : "text-[var(--muted)]"}>
          Deutsch
        </Link>
      </div>
      <ChevronDown className="h-3.5 w-3.5 text-[var(--muted)]" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
