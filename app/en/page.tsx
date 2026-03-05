import Link from "next/link";
import { ArrowUpRight, Check, CircleDollarSign, Clock3, MapPin } from "lucide-react";
import ContactPanel from "@/components/ContactPanel";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import PageShell from "@/components/PageShell";
import TestimonialsSection from "@/components/TestimonialsSection";
import TourSection from "@/components/TourSection";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";
import { tours } from "@/lib/site-data";

const highlights = [
  "Mercedes Vito for 8 to 10 passengers",
  "Comfortable sedans and licensed drivers",
  "Wheelchair-friendly tour options",
  "Reserve now and pay later flexibility",
];

export default function EnglishHomePage() {
  return (
    <PageShell chatbot locale="en">
      <HeroSection
        title="Globetrek Excursions"
        sideNote="The most trusted premium travel agency for private tours, transfers, and seamless discovery across Greece."
        image="https://images.pexels.com/photos/29459095/pexels-photo-29459095.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Rock formations and lush cliffs in Greece"
        ctaHref="/en/packages"
        ctaLabel="Explore destinations"
      />

      <Reveal className="rounded-[1.9rem] bg-[var(--surface-strong)] px-6 py-14 text-center sm:px-10">
        <p className="section-kicker justify-center">With harmony</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-medium tracking-[-0.06em] sm:text-5xl lg:text-[3.9rem]">
          From the ancient wonders to the stunning landscapes of Greece, enjoy every step of your
          journey with Globetrek Tours.
        </h2>
        <div className="mt-8 inline-flex items-center gap-4 text-sm text-[var(--muted)]">
          <span>3500+ people trust us</span>
          <div className="flex -space-x-3">
            {["A", "K", "S"].map((initial) => (
              <div
                key={initial}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--surface-strong)] bg-[var(--accent)] text-sm text-white"
              >
                {initial}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <section className="grid gap-8 py-12 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal className="space-y-6">
          <div>
            <p className="section-kicker">Services</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
              Choose your way to explore Greece
            </h2>
          </div>
          <div className="space-y-3">
            <button
              type="button"
              className="w-full rounded-2xl bg-[var(--accent)] px-5 py-4 text-left text-white"
            >
              <span className="block text-lg font-medium">Private Tours</span>
              <span className="mt-1 block text-sm text-white/75">
                Great for families, groups, and private pickup.
              </span>
            </button>
            <button
              type="button"
              className="w-full rounded-2xl bg-[var(--surface-strong)] px-5 py-4 text-left text-[var(--ink)]"
            >
              <span className="block text-lg font-medium">Scheduled Tours</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">
                A simple itinerary option for solo travelers.
              </span>
            </button>
            <button
              type="button"
              className="w-full rounded-2xl bg-[var(--surface-strong)] px-5 py-4 text-left text-[var(--ink)]"
            >
              <span className="block text-lg font-medium">Transfers</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">
                Airport, port, and city connections with premium vehicles.
              </span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="luxury-card p-6 sm:p-8">
            <p className="text-3xl font-medium tracking-[-0.06em] sm:text-4xl">Private Group Tours</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Exclusive trips tailored to your group&apos;s preferences, offering flexible itinerary
              flow, polished logistics, and discreet premium service throughout the day.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--line)]">
                    <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/en/packages"
              className="mt-8 inline-flex rounded-xl bg-[var(--accent)] px-5 py-3 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book a Tour
            </Link>
          </div>
        </Reveal>
      </section>

      <TourSection locale="en" tours={tours.slice(0, 4)} />
      <GallerySection />

      <section className="grid gap-8 py-12 lg:grid-cols-[1fr_1.05fr]">
        <Reveal className="space-y-6">
          <p className="section-kicker">About us</p>
          <h2 className="max-w-xl text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
            The highest level of comfort, convenience, and service
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            At Globetrek Tours, we combine premium service with attention to detail. Whether it is
            a private journey tailored just for you, a shared group experience, or a seamless
            transfer, we handle every moving part so your trip feels effortless.
          </p>
          <Link
            href="/en/events"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]"
          >
            More about us
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: MapPin,
              title: "Curated routes",
              body: "Historic landmarks, coastal scenery, and slower private pacing built into each itinerary.",
            },
            {
              icon: Clock3,
              title: "Flexible timing",
              body: "From airport pickups to sunset departures, we adapt the schedule to the traveler.",
            },
            {
              icon: CircleDollarSign,
              title: "Clear pricing",
              body: "Premium presentation without hidden add-ons or hard-to-read extras.",
            },
            {
              icon: Check,
              title: "Reliable planning",
              body: "Every route is structured to feel polished, calm, and easy to follow on any screen size.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.title}>
                <article className="luxury-card h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/60">
                    <Icon className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.05em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <TestimonialsSection />
      <ContactPanel />
    </PageShell>
  );
}
