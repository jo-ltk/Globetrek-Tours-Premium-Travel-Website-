import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, CircleDollarSign, Clock3, Users } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSection from "@/components/HeroSection";
import PageShell from "@/components/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";
import { faqItems, getTourBySlug } from "@/lib/site-data";
import { formatCurrency } from "@/utils/helpers";

export default function EnglishPackageDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const tour = getTourBySlug(params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <PageShell chatbot locale="en">
      <HeroSection
        title={tour.title}
        image={tour.heroImage}
        imageAlt={tour.title}
        compact
      />

      <Reveal className="flex flex-wrap gap-3 pb-8">
        {tour.badges.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/65 px-4 py-2 text-sm text-[var(--muted)]"
          >
            <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
            {badge}
          </span>
        ))}
      </Reveal>

      <section className="grid gap-8 pb-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="space-y-10">
          <div>
            <h2 className="text-4xl font-medium tracking-[-0.06em]">About the tour</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-[var(--muted)]">
              {tour.longDescription}
            </p>
          </div>

          <div>
            <p className="text-xl font-medium">Note</p>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[var(--muted)]">{tour.note}</p>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem]">
              <Image alt={tour.title} className="object-cover" fill sizes="100vw" src={tour.gallery[0]} />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {tour.gallery.map((image, index) => (
                <div key={image} className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    alt={`${tour.title} gallery ${index + 1}`}
                    className="object-cover"
                    fill
                    sizes="25vw"
                    src={image}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="luxury-card sticky top-6 p-6">
            <p className="section-kicker">Private</p>
            <h3 className="mt-3 text-3xl font-medium tracking-[-0.06em]">Private group tours</h3>
            <div className="mt-8 flex items-end justify-between border-b border-[var(--line)] pb-5">
              <span className="text-sm text-[var(--muted)]">For up to 4 people</span>
              <div className="text-right">
                <p className="text-4xl font-medium tracking-[-0.06em]">
                  {formatCurrency(tour.price, "en")}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">per group</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-[var(--muted)]">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
                <span>Flexible departure and route timing based on your schedule</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
                <span>Tickets to monuments or entrance fees are not included</span>
              </div>
              <div className="flex items-start gap-3">
                <CircleDollarSign className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
                <span>Drinking, personal expenses, and meals are not included in the price</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-[var(--accent)] px-5 py-3.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book
            </button>
          </aside>
        </Reveal>
      </section>

      <section className="grid gap-8 py-10 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <p className="section-kicker">Support</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <FaqAccordion items={faqItems} />
        </Reveal>
      </section>
    </PageShell>
  );
}
