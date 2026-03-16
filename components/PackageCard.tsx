"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Accessibility, Clock3 } from "lucide-react";
import { HoverScale } from "@/components/animated";
import type { TourPackage } from "@/types/package";
import { getLocaleFromPathname } from "@/utils/locale";

export default function PackageCard({
  locale = "en",
  tour,
}: {
  locale?: "en" | "de";
  tour: TourPackage;
}) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) || locale;
  const moreInfo = currentLocale === "de" ? "Mehr Info" : "More Info";
  const book = currentLocale === "de" ? "Buchen" : "Book";
  const accessibilityLabel = currentLocale === "de" ? "Rollstuhlgerecht" : "Wheelchair Accessible";

  return (
    <HoverScale className="h-full">
      <article className="group flex h-full flex-col rounded-[2rem] border border-[rgba(32,53,35,0.12)] bg-[#e7e1d5] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] sm:p-5">
        <div className="relative aspect-[1.1/0.82] overflow-hidden rounded-[1.6rem] bg-[#d9d4c8]">
          <Image
            alt={tour.title}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            src={tour.heroImage}
          />
          {tour.accessible ? (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#d3d8b8] px-3.5 py-1.5 text-[0.7rem] font-medium text-[#2d4725] shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
              <Accessibility className="h-3 w-3" />
              {accessibilityLabel}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
          <div className="mb-3 inline-flex items-center gap-2 text-[0.95rem] text-[var(--muted)]">
            <Clock3 className="h-4 w-4" />
            {tour.duration}
          </div>
          <h3 className="max-w-[15rem] text-[2.1rem] font-medium leading-[1.08] tracking-[-0.06em] text-[var(--ink)]">
            {tour.title}
          </h3>
          <p className="mt-4 max-w-[18rem] text-[1.02rem] leading-8 text-[var(--muted)]">
            {tour.description}
          </p>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-7">
            <Link
              href={`/${currentLocale}/packages/${tour.slug}`}
              className="rounded-[1.1rem] bg-[#f4f1ec] px-4 py-4 text-center text-[1.02rem] font-medium text-[var(--ink)] transition-colors duration-200 hover:bg-white"
            >
              {moreInfo}
            </Link>
            <Link
              href={`/${currentLocale}/packages/${tour.slug}`}
              className="rounded-[1.1rem] bg-[#284d22] px-4 py-4 text-center text-[1.02rem] font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              {book}
            </Link>
          </div>
        </div>
      </article>
    </HoverScale>
  );
}
