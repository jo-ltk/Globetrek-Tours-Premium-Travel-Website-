import Link from "next/link";
import { cn } from "@/utils/helpers";

export default function LanguageSwitcher({
  locale = "en",
}: {
  locale?: "en" | "de";
}) {
  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-1 rounded-full border border-black/5 shadow-sm">
      <Link
        href="/en"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold tracking-widest transition-all duration-300",
          locale === "en" 
            ? "bg-black text-white shadow-lg scale-105" 
            : "text-black/40 hover:text-black hover:bg-black/5"
        )}
      >
        EN
      </Link>
      <Link
        href="/de"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold tracking-widest transition-all duration-300",
          locale === "de" 
            ? "bg-black text-white shadow-lg scale-105" 
            : "text-black/40 hover:text-black hover:bg-black/5"
        )}
      >
        DE
      </Link>
    </div>
  );
}

