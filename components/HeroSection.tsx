import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animated";
import { cn } from "@/utils/helpers";

export default function HeroSection({
  eyebrow,
  title,
  description,
  sideNote,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  overlay = false,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  sideNote?: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlay?: boolean;
  compact?: boolean;
}) {
  return (
    <section className={cn("space-y-7", compact ? "pb-6" : "pb-12")}>
      <Reveal className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          {eyebrow ? <p className="section-kicker mb-5">{eyebrow}</p> : null}
          <h1 className="display-title max-w-4xl text-[3rem] font-semibold uppercase leading-none sm:text-[4.3rem] lg:text-[5.25rem]">
            {title}
          </h1>
        </div>
        <div className="max-w-sm justify-self-end text-sm leading-6 text-[var(--muted)]">
          {sideNote ? <p>{sideNote}</p> : null}
          {description ? <p className={sideNote ? "mt-4" : ""}>{description}</p> : null}
          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref}
              className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--ink)]"
            >
              {ctaLabel}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="relative overflow-hidden rounded-[1.7rem] border border-black/5">
          <div className={cn("relative", compact ? "aspect-[16/7]" : "aspect-[16/8]")}>
            <Image alt={imageAlt} className="object-cover" fill priority sizes="100vw" src={image} />
            {overlay ? (
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
