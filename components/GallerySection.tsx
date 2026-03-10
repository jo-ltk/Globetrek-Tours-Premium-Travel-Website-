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
    <section className="py-12">
      <div className="overflow-hidden border-[5px] border-[#f0efea] bg-[#03111b]">
        <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="flex h-full flex-col justify-between gap-10 px-6 py-8 text-white sm:px-8 sm:py-10 lg:border-r lg:border-white/10 lg:px-10">
            <div className="flex items-start gap-4">
              <span className="mt-5 h-px w-12 bg-white/45 sm:w-16" />
              <div>
                <p className="text-[0.69rem] uppercase tracking-[0.24em] text-white/58">
                  Our advantages
                </p>
                <h2 className="mt-3 max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl lg:text-[3.65rem]">
                  The benefits of traveling with Veda Aura
                </h2>
              </div>
            </div>

            <div className="space-y-8">
              <p className="max-w-md text-sm leading-7 text-white/68">
                We take care of the details so you can enjoy Greece at your own pace, with
                services tailored to your travel rhythm and comfort level.
              </p>

              <div className="grid max-w-md gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/12 bg-white/6 px-4 py-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/45">
                    Service style
                  </p>
                  <p className="mt-3 text-lg font-medium tracking-[-0.04em] text-white">
                    Private, flexible, calm
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-white/12 bg-white/6 px-4 py-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/45">
                    Designed for
                  </p>
                  <p className="mt-3 text-lg font-medium tracking-[-0.04em] text-white">
                    Tours, transfers, day plans
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-px bg-white/10 md:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <StaggerItem key={card.title}>
                  <article className="flex h-full flex-col justify-between bg-[#f4f1e8] p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                        0{index + 1}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#03111b] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-14 border-t border-[rgba(3,17,27,0.1)] pt-5">
                      <h3 className="max-w-[14rem] text-[2rem] font-medium tracking-[-0.06em] text-[#13232d]">
                        {card.title}
                      </h3>
                      <p className="mt-3 max-w-[18rem] text-[1rem] leading-7 text-[var(--muted)]">
                        {card.body}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
