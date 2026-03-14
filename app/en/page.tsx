import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, CarFront, Map, Sparkles } from "lucide-react";
import ContactPanel from "@/components/ContactPanel";
import ComfortSection from "@/components/ComfortSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import PageShell from "@/components/PageShell";
import TestimonialsSection from "@/components/TestimonialsSection";
import TourSection from "@/components/TourSection";
import { Reveal } from "@/components/animated";
import StorytellingGallery from "@/components/StorytellingGallery";
import { tours } from "@/lib/site-data";

const highlights = [
  "Mercedes Vito for 8 to 10 passengers",
  "Comfortable sedans and licensed drivers",
  "Wheelchair-friendly tour options",
  "Reserve now and pay later flexibility",
];

const services = [
  {
    title: "Private Tours",
    description: "Tailored days for families, couples, and small groups with private pickup.",
    icon: Sparkles,
    accent: "Recommended",
    tone: "dark" as const,
  },
  {
    title: "Scheduled Tours",
    description: "A simpler route structure for travelers who prefer a ready-made itinerary.",
    icon: Map,
    tone: "light" as const,
  },
  {
    title: "Transfers",
    description: "Airport, port, and city connections handled with premium vehicles and calm timing.",
    icon: CarFront,
    tone: "light" as const,
  },
];

export default function EnglishHomePage() {
  return (
    <PageShell chatbot locale="en" hideNavbar>
      <HeroSection
        premium
        title="Live the dream you've only seen on screen"
        description="Created for people who dream of Paris- and want to live it, not just visit"
        image="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Beautiful view of Paris with the Eiffel Tower"
        ctaHref="/en/packages"
        ctaLabel="Explore destinations"
      />

      <Reveal className="px-6 py-20 text-center sm:px-10 border-y border-[var(--line)]">
        <p className="section-kicker justify-center">With harmony</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-medium tracking-[-0.06em] sm:text-5xl lg:text-[3.9rem]">
          From the ancient wonders to the stunning landscapes of Greece, enjoy every step of your
          journey with Veda Aura.
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

      <Reveal className="px-6 py-12 sm:px-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-[1400px] mx-auto">
          <div className="flex h-32 md:h-40 xl:h-48 items-center justify-center rounded-[2rem] md:rounded-[3rem] bg-[var(--surface-strong)] text-[var(--ink)] text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
            We
          </div>
          <div className="relative flex h-32 md:h-40 xl:h-48 items-center justify-center overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[var(--line)]">
            <Image
              src="https://images.pexels.com/photos/843144/pexels-photo-843144.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Iceberg protecting nature"
              fill
              className="object-cover brightness-90"
            />
            <span className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-medium text-white tracking-tight">Protect</span>
          </div>
          <div className="flex h-32 md:h-40 xl:h-48 items-center justify-center rounded-[2rem] md:rounded-[3rem] bg-[#eaff66] text-black">
            <ArrowRight className="h-10 w-10 md:h-12 md:w-12 stroke-[1.5]" />
          </div>
          <div className="relative flex h-32 md:h-40 xl:h-48 items-center justify-center overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[var(--line)]">
            <Image
              src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Nature canyon landscape"
              fill
              className="object-cover brightness-90"
            />
            <span className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-medium text-white tracking-tight">Nature</span>
          </div>
        </div>
      </Reveal>

      <StorytellingGallery />

      <section className="py-12">
        <div className="overflow-hidden bg-[#03111b]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="flex h-full flex-col justify-between gap-10 bg-[#03111b] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
              <div className="flex items-start gap-4">
                <span className="mt-5 h-px w-12 bg-white/40 sm:w-16" />
                <div>
                  <p className="text-[0.69rem] uppercase tracking-[0.24em] text-white/56">
                    Services
                  </p>
                  <h2 className="mt-3 max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-5xl lg:text-[3.55rem]">
                    Choose your way to explore Greece
                  </h2>
                </div>
              </div>

              <div className="max-w-md space-y-8">
                <p className="text-sm leading-7 text-white/68">
                  Every itinerary can begin with a different service style, from fully private day
                  planning to simple transfers designed around comfort, timing, and ease.
                </p>

                <div className="rounded-[1.5rem] border border-white/12 bg-white/6 px-5 py-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/45">
                    Best for
                  </p>
                  <p className="mt-3 text-xl font-medium tracking-[-0.05em] text-white">
                    Flexible private travel with polished logistics
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="bg-[#e7e1d5] p-4 sm:p-5 lg:p-6">
              <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
                <Reveal className="grid gap-4">
                  {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                      <article
                        key={service.title}
                        className={`rounded-[1.8rem] border p-5 sm:p-6 ${
                          service.tone === "dark"
                            ? "border-[#294825] bg-[#294825] text-white"
                            : "border-[rgba(32,53,35,0.12)] bg-[#f4f1e8] text-[var(--ink)]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[0.72rem] uppercase tracking-[0.22em] ${
                                  service.tone === "dark" ? "text-white/52" : "text-[var(--muted)]"
                                }`}
                              >
                                0{index + 1}
                              </span>
                              {"accent" in service ? (
                                <span className="rounded-full bg-white/12 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/80">
                                  {service.accent}
                                </span>
                              ) : null}
                            </div>

                            <div>
                              <h3 className="text-[1.8rem] font-medium tracking-[-0.05em]">
                                {service.title}
                              </h3>
                              <p
                                className={`mt-3 max-w-[22rem] text-[1rem] leading-7 ${
                                  service.tone === "dark" ? "text-white/72" : "text-[var(--muted)]"
                                }`}
                              >
                                {service.description}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-[1rem] ${
                              service.tone === "dark"
                                ? "bg-white text-[#294825]"
                                : "bg-[#03111b] text-white"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </Reveal>

                <Reveal
                  delay={0.08}
                  className="flex h-full flex-col justify-between rounded-[1.9rem] bg-[#f4f1e8] p-6 sm:p-7"
                >
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                      Private Group Tours
                    </p>
                    <p className="mt-4 text-3xl font-medium tracking-[-0.06em] text-[var(--ink)] sm:text-[2.35rem]">
                      Built around your group, your timing, and your pace.
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                      Exclusive trips tailored to your group&apos;s preferences, offering flexible
                      itinerary flow, polished logistics, and discreet premium service throughout
                      the day.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    {highlights.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--line)] bg-white">
                          <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/en/packages"
                    className="mt-8 inline-flex items-center justify-between gap-4 rounded-[0.35rem] bg-[#03111b] px-5 py-4 text-white transition-transform duration-200 hover:-translate-y-0.5 sm:min-w-[15rem] sm:px-6"
                  >
                    <span className="text-sm uppercase tracking-[0.22em]">Book a Tour</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-[0.28rem] bg-white text-[#03111b]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TourSection locale="en" tours={tours.slice(0, 4)} />
      <GallerySection />
      <ComfortSection />

      <TestimonialsSection />
      <ContactPanel />
    </PageShell>
  );
}
