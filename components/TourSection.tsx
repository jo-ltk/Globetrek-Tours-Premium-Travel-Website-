import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";
import PackageCard from "@/components/PackageCard";
import type { TourPackage } from "@/types/package";

export default function TourSection({
  locale = "en",
  tours,
}: {
  locale?: "en" | "de";
  tours: TourPackage[];
}) {
  const content =
    locale === "de"
      ? {
          label: "Unsere Highlights",
          title: "Entdecke unsere beliebtesten Ziele!",
          cta: "Alle Touren",
          summary:
            "Eine Auswahl unserer beliebtesten Touren, gestaltet fur ruhige Ablaufe, private Flexibilitat und eindrucksvolle Tage in Griechenland.",
          accentLabel: "Ausgewahlt fur",
          accentValue: "Private Tage mit Struktur",
          statLabel: "Beliebte Routen",
          rhythmLabel: "Servicerhythmus",
          rhythmValue: "Ruhig, kuratiert, premium",
          browseCopy:
            "Sieh dir die Touren unten an, um die Route, den Ablauf und den Reisestil zu finden, die am besten zu deinem Plan passen.",
        }
      : {
          label: "Must-see",
          title: "Explore our popular destinations!",
          cta: "View all tours",
          summary:
            "A selection of our most requested journeys, shaped for private comfort, smooth pacing, and memorable days across Greece.",
          accentLabel: "Chosen for",
          accentValue: "Private days with structure",
          statLabel: "Popular routes",
          rhythmLabel: "Service rhythm",
          rhythmValue: "Calm, curated, premium",
          browseCopy:
            "Browse the tours below to see the routes, pacing, and travel style that fit your plan best.",
        };

  return (
    <section className="space-y-6 py-12">
      <div className="overflow-hidden border-[5px] border-[#f0efea]">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="flex h-full flex-col justify-between gap-10 bg-[#03111b] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
            <div className="flex items-start gap-4">
              <span className="mt-5 h-px w-12 bg-white/40 sm:w-16" />
              <div>
                <p className="text-[0.69rem] uppercase tracking-[0.24em] text-white/56">
                  {content.label}
                </p>
                <h2 className="mt-3 max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-5xl lg:text-[3.55rem]">
                  {content.title}
                </h2>
              </div>
            </div>

            <div className="max-w-md space-y-8">
              <p className="text-sm leading-7 text-white/68">{content.summary}</p>

              <div className="rounded-[1.5rem] border border-white/12 bg-white/6 px-5 py-5">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/45">
                  {content.accentLabel}
                </p>
                <p className="mt-3 text-xl font-medium tracking-[-0.05em] text-white">
                  {content.accentValue}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.06}
            className="flex h-full flex-col justify-between gap-8 bg-[#ece7dc] px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
          >
            <div className="grid gap-px overflow-hidden rounded-[1.6rem] bg-[rgba(3,17,27,0.08)] sm:grid-cols-2">
              <div className="bg-[#f6f2e8] px-5 py-5">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {content.statLabel}
                </p>
                <p className="mt-3 text-[2.6rem] font-medium leading-none tracking-[-0.08em] text-[#13232d]">
                  {String(tours.length).padStart(2, "0")}
                </p>
              </div>

              <div className="bg-[#f6f2e8] px-5 py-5">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {content.rhythmLabel}
                </p>
                <p className="mt-3 text-xl font-medium tracking-[-0.05em] text-[#13232d]">
                  {content.rhythmValue}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
                {content.browseCopy}
              </p>

              <Link
                href={`/${locale}/packages`}
                className="inline-flex items-center justify-between gap-4 rounded-[0.35rem] bg-[#03111b] px-5 py-4 text-white transition-transform duration-200 hover:-translate-y-0.5 sm:min-w-[15rem] sm:px-6"
              >
                <span className="text-sm uppercase tracking-[0.22em]">{content.cta}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-[0.28rem] bg-white text-[#03111b]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="bg-[#e7e1d5] p-4 sm:p-5">
          <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {tours.map((tour) => (
              <StaggerItem key={tour.slug}>
                <PackageCard locale={locale} tour={tour} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
