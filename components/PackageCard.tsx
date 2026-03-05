import Image from "next/image";
import Link from "next/link";
import { Accessibility, Clock3 } from "lucide-react";
import { HoverScale } from "@/components/animated";
import type { TourPackage } from "@/types/package";

export default function PackageCard({
  locale = "en",
  tour,
}: {
  locale?: "en" | "de";
  tour: TourPackage;
}) {
  const moreInfo = locale === "de" ? "Mehr Info" : "More Info";
  const book = locale === "de" ? "Buchen" : "Book";

  return (
    <HoverScale className="h-full">
      <article className="luxury-card flex h-full flex-col p-3">
        <div className="relative aspect-[1.12/0.84] overflow-hidden rounded-[1.1rem]">
          <Image
            alt={tour.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            src={tour.heroImage}
          />
          {tour.accessible ? (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[10px] font-medium text-[var(--accent)]">
              <Accessibility className="h-3 w-3" />
              Wheelchair Accessible
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] text-[var(--muted)]">
            <Clock3 className="h-3.5 w-3.5" />
            {tour.duration}
          </div>
          <h3 className="text-[1.2rem] font-medium leading-tight">{tour.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{tour.description}</p>

          <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
            <Link
              href={`/${locale}/packages/${tour.slug}`}
              className="rounded-xl border border-[var(--line)] bg-white/70 px-4 py-3 text-center text-sm text-[var(--ink)] transition-colors duration-200 hover:bg-white"
            >
              {moreInfo}
            </Link>
            <Link
              href={`/${locale}/packages/${tour.slug}`}
              className="rounded-xl bg-[var(--accent)] px-4 py-3 text-center text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              {book}
            </Link>
          </div>
        </div>
      </article>
    </HoverScale>
  );
}
