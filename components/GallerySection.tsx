import { Accessibility, BadgeCheck, CarFront, Wallet } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";

const cards = [
  {
    icon: CarFront,
    title: "Comfortable vehicles",
    body: "Mercedes Vito and premium sedans prepared for private rides and full-day tours.",
  },
  {
    icon: BadgeCheck,
    title: "Experienced guides",
    body: "Professional local guidance with concierge-level planning and responsive support.",
  },
  {
    icon: Accessibility,
    title: "Wheelchair accessibility",
    body: "Inclusive travel planning designed to keep every landmark and transfer within reach.",
  },
  {
    icon: Wallet,
    title: "Reserve now and pay later",
    body: "Flexible booking flow that keeps the experience premium without adding friction.",
  },
];

export default function GallerySection() {
  return (
    <section className="grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal className="space-y-6">
        <div>
          <p className="section-kicker">Our advantages</p>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
            The benefits of traveling with Veda Aura
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
          We take care of the details so you can enjoy Greece at your own pace, with services
          tailored to your travel rhythm and comfort level.
        </p>
      </Reveal>

      <Stagger className="grid gap-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <StaggerItem key={card.title}>
              <article className="luxury-card flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.05em]">{card.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    {card.body}
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/60">
                  <Icon className="h-5 w-5 text-[var(--accent)]" />
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
