"use client";

import { Accessibility, BadgeCheck, CarFront, Wallet, ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";
import { motion } from "framer-motion";

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
    <section className="py-16">
      <Reveal className="bg-transparent">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Content Side - Now with premium curvature */}
          <div className="relative flex h-full flex-col justify-between bg-[#03111b] px-8 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20 rounded-[2.5rem] overflow-hidden">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-10 bg-white/30" />
                <p className="text-[0.7rem] uppercase tracking-[0.25em] font-bold text-white/60">
                  Our advantages
                </p>
              </div>
              <h2 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
                The benefits of traveling with <span className="italic text-white/90">Veda Aura</span>
              </h2>
              
              <p className="mt-10 max-w-md text-lg leading-relaxed text-white/70 font-light">
                We take care of the details so you can enjoy Greece at your own pace, with
                services tailored to your travel rhythm and comfort level.
              </p>
            </div>

            <div className="relative z-10 mt-16 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Service style", value: "Private & Flexible" },
                { label: "Designed for", value: "Tours & Transfers" }
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-white/40 mb-2">
                    {item.label}
                  </p>
                  <p className="text-lg font-medium tracking-tight text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards Side - Individual curved cards for a cleaner blend */}
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <StaggerItem key={card.title}>
                  <motion.article
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative flex h-full min-h-[19rem] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[var(--line)] bg-white p-8 sm:p-10 lg:p-12"
                    variants={{
                      rest: {
                        y: 0,
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(32, 53, 35, 0.12)",
                        boxShadow: "0 0 0 rgba(3, 17, 27, 0)",
                      },
                      hover: {
                        y: -8,
                        backgroundColor: "#fcfbf7",
                        borderColor: "rgba(32, 53, 35, 0.2)",
                        boxShadow: "0 24px 60px rgba(3, 17, 27, 0.08)",
                      },
                    }}
                  >
                    <motion.div
                      variants={{
                        rest: { opacity: 0.18, scale: 0.72 },
                        hover: { opacity: 0.8, scale: 1.02 },
                      }}
                      className="pointer-events-none absolute right-10 top-10 -z-0 h-24 w-24 rounded-full bg-[var(--surface-strong)] blur-3xl"
                    />
                    <motion.div
                      variants={{
                        rest: { scaleX: 0, opacity: 0 },
                        hover: { scaleX: 1, opacity: 1 },
                      }}
                      className="absolute bottom-0 left-0 h-1 w-full origin-left bg-[var(--ink)]/80"
                    />

                    <div className="relative z-10 flex items-start justify-between">
                      <motion.div
                        variants={{
                          rest: {
                            backgroundColor: "var(--surface-strong)",
                            color: "var(--ink)",
                            rotate: 0,
                            x: 0,
                          },
                          hover: {
                            backgroundColor: "var(--ink)",
                            color: "#fff",
                            rotate: -6,
                            x: 4,
                          },
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                      <motion.span
                        variants={{
                          rest: { opacity: 0.18, x: 0 },
                          hover: { opacity: 0.32, x: -4 },
                        }}
                        className="font-serif text-2xl italic"
                      >
                        0{index + 1}
                      </motion.span>
                    </div>

                    <motion.div
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -4 },
                      }}
                      className="relative z-10 mt-12"
                    >
                      <motion.h3
                        className="mb-3 text-[1.4rem] font-semibold text-[var(--ink)]"
                      >
                        {card.title}
                      </motion.h3>
                      <p className="text-[0.95rem] leading-relaxed text-[var(--muted)]">
                        {card.body}
                      </p>
                      
                      <motion.div
                        variants={{
                          rest: { opacity: 0, x: -10 },
                          hover: { opacity: 1, x: 0 },
                        }}
                        className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--ink)]"
                      >
                        Explore <ArrowRight className="h-3.5 w-3.5" />
                      </motion.div>
                    </motion.div>
                  </motion.article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </Reveal>
  </section>
);
}
