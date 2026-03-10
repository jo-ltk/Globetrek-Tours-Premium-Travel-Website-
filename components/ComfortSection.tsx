import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";

const comfortCards = [
  {
    title: "Made for Travelers",
    body: "Every route is designed around how the day should feel: calm, spacious, and easy from pickup to drop-off.",
    image:
      "https://images.pexels.com/photos/28704195/pexels-photo-28704195.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Travelers walking along a hillside path",
  },
  {
    title: "Structured Service",
    body: "Behind every effortless tour is careful timing, clear coordination, and premium planning that quietly holds everything together.",
    image:
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Architectural building facade in soft monochrome tones",
  },
  {
    title: "Where It Goes",
    body: "We shape each trip around the route, the rhythm, and the reason it matters so the experience feels intentional at every stop.",
    image:
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mountain landscape with soft muted colors",
  },
  {
    title: "Rooted in Place",
    body: "Our tours stay connected to the spirit of Greece, blending scenery, story, and comfort in a way that feels grounded and personal.",
    image:
      "https://images.pexels.com/photos/18910728/pexels-photo-18910728.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Historic Greek landmark overlooking Athens",
  },
];

export default function ComfortSection() {
  return (
    <section className="space-y-10 py-12">
      <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="mt-5 h-px w-12 bg-[var(--ink)]/75 sm:w-16" />
          <div>
            <p className="section-kicker">About us</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-medium tracking-[-0.07em] sm:text-5xl lg:text-[3.7rem]">
              The highest level of comfort, convenience, and service
            </h2>
          </div>
        </div>

        <div className="max-w-md">
          <p className="text-sm leading-7 text-[var(--muted)]">
            At Veda Aura, we build each journey around thoughtful pacing, polished logistics, and
            a private-service standard that keeps the whole day feeling effortless.
          </p>
          <Link
            href="/en/events"
            className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]"
          >
            More about us
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Reveal>

      <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {comfortCards.map((card) => (
          <StaggerItem key={card.title}>
            <article className="h-full">
              <div className="relative aspect-[0.92] overflow-hidden bg-[#d8d4cc]">
                <Image
                  alt={card.alt}
                  className="object-cover grayscale-[18%] sepia-[10%]"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  src={card.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,242,232,0.05),rgba(246,242,232,0.18))]" />
              </div>

              <div className="px-1 pb-1 pt-6">
                <h3 className="text-[2rem] font-medium tracking-[-0.06em] text-[var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-[18rem] text-[1.02rem] leading-8 text-[var(--muted)]">
                  {card.body}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
