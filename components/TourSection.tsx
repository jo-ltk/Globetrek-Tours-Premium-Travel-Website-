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
  const label = locale === "de" ? "Unsere Highlights" : "Must-see";
  const title =
    locale === "de" ? "Entdecke unsere beliebtesten Ziele!" : "Explore our popular destinations!";
  const cta = locale === "de" ? "Alle Touren" : "View all tours";

  return (
    <section className="space-y-7 py-12">
      <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">{label}</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
            {title}
          </h2>
        </div>
        <Link
          href={`/${locale}/packages`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--ink)]"
        >
          {cta}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </Reveal>

      <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {tours.map((tour) => (
          <StaggerItem key={tour.slug}>
            <PackageCard locale={locale} tour={tour} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
