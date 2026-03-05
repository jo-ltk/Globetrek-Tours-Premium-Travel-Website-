import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PageShell from "@/components/PageShell";
import { Reveal } from "@/components/animated";

export default function EnglishEventsPage() {
  return (
    <PageShell locale="en">
      <HeroSection
        title="About Us"
        image="https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Acropolis and trees in Athens"
        compact
      />

      <section className="grid gap-10 pb-14 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
            Globetrek Tours was created with a clear purpose: to make every journey comfortable,
            seamless, and memorable.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            With many years of travel experience in the tourism industry, our team is driven by a
            passion for hospitality and a deep love for Greece.
          </p>
        </Reveal>
      </section>

      <section className="grid gap-8 pb-14 lg:grid-cols-3">
        <Reveal className="space-y-4">
          <p className="text-sm underline underline-offset-4">What we do?</p>
          <p className="text-3xl font-medium tracking-[-0.06em]">
            We provide premium transportation with a personal touch.
          </p>
        </Reveal>

        <Reveal className="space-y-4" delay={0.05}>
          <p className="text-sm underline underline-offset-4">Our vehicles</p>
          <p className="text-sm leading-7 text-[var(--muted)]">
            Our fleet includes luxury vehicles like the Mercedes Vito 8-seater, perfect for private
            tours and smooth transfers. To make your trip even easier, we offer reliable transfers
            to and from airports and ports.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[0.9/1.05] overflow-hidden rounded-[1.6rem]">
            <Image
              alt="Vehicle with a scenic background"
              className="object-cover"
              fill
              sizes="33vw"
              src="https://images.pexels.com/photos/33475308/pexels-photo-33475308.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />
          </div>
        </Reveal>

        <Reveal className="space-y-4">
          <p className="text-sm underline underline-offset-4">Accessibility</p>
          <p className="text-3xl font-medium tracking-[-0.06em]">
            At Globetrek, inclusivity is at the heart of what we do.
          </p>
          <p className="text-sm leading-7 text-[var(--muted)]">
            We believe travel should be effortless and enjoyable for everyone. That is why we offer
            wheelchair-friendly vehicles, ensuring every traveler experiences the beauty of Greece.
          </p>
        </Reveal>

        <Reveal className="space-y-4" delay={0.05}>
          <p className="text-sm underline underline-offset-4">Our team</p>
          <p className="text-sm leading-7 text-[var(--muted)]">
            Our drivers are not just there to get you from one place to another. They are
            professionals who prioritize safety and comfort, while sharing local stories and hidden
            gems during your journey.
          </p>
          <Link
            href="/en/packages"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]"
          >
            Explore destinations
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </section>

      <Reveal className="rounded-[1.8rem] bg-[var(--surface-strong)] px-6 py-14 text-center sm:px-10">
        <p className="section-kicker justify-center">With harmony</p>
        <h3 className="mx-auto mt-5 max-w-3xl text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
          We make every trip a harmonious blend of comfort and discovery.
        </h3>
        <Link
          href="/en/contact"
          className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]"
        >
          Contact us
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </Reveal>
    </PageShell>
  );
}
