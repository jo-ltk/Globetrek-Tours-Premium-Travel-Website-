"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Mail, PenSquare, Phone } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";
import { motion } from "framer-motion";
import { getLocaleFromPathname } from "@/utils/locale";

export default function ContactPanel() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const contactCards = [
    {
      icon: Mail,
      title: "Write us",
      body: "Reach out by email for planning, pricing, and availability.",
      foot: "info@veda-aura.com",
      href: "mailto:info@veda-aura.com",
    },
    {
      icon: PenSquare,
      title: "Fill out form",
      body: "Send your trip details online and we will get back to you.",
      foot: "Leave request",
      href: locale === "de" ? "/de/contact" : "/en/contact",
    },
    {
      icon: Phone,
      title: "Call us",
      body: "Speak with us directly for quick questions and assistance.",
      foot: "+30 694 455 3616",
      href: "tel:+306944553616",
    },
  ];

  return (
    <section className="py-16">
      <Reveal className="bg-transparent">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">

            {/* Left Panel — same dark curved style as GallerySection */}
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#03111b] px-8 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              {/* Subtle radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-px w-10 bg-white/30" />
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] font-bold text-white/60">
                    Get in touch
                  </p>
                </div>

                <h2 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
                  Have a question or need{" "}
                  <span className="italic text-white/90">assistance?</span>
                </h2>

                <p className="mt-10 max-w-md text-lg leading-relaxed text-white/70 font-light">
                  We are here to help with private tours, transfers, route planning, and
                  accessibility needs in the way that feels easiest for you.
                </p>
              </div>

              <div className="relative z-10 mt-16 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Fast reply", value: "Personal support" },
                  { label: "Tailored help", value: "Tours & Transfers" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
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

            {/* Right — contact method cards */}
            <Stagger className="flex h-full flex-col gap-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <StaggerItem key={card.title} className="flex flex-1">
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative flex flex-1 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white"
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
                        className="pointer-events-none absolute right-6 top-6 h-32 w-32 rounded-full bg-[var(--surface-strong)] blur-3xl"
                      />
                      <motion.div
                        variants={{
                          rest: { scaleX: 0, opacity: 0 },
                          hover: { scaleX: 1, opacity: 1 },
                        }}
                        className="absolute bottom-0 left-0 h-1 w-full origin-left bg-[var(--ink)]/80"
                      />

                      <Link
                        href={card.href}
                        className="relative z-10 flex h-full w-full items-center justify-between gap-6 px-8 py-8 sm:px-10 sm:py-9"
                      >
                        <div className="flex items-center gap-6">
                          {/* Icon pill */}
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
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                          >
                            <Icon className="h-5 w-5" />
                          </motion.div>

                          <motion.div
                            variants={{
                              rest: { y: 0 },
                              hover: { y: -3 },
                            }}
                          >
                            <motion.p
                              variants={{
                                rest: { opacity: 0.68, x: 0 },
                                hover: { opacity: 1, x: 2 },
                              }}
                              className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]"
                            >
                              0{index + 1}
                            </motion.p>
                            <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">
                              {card.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                              {card.body}
                            </p>
                          </motion.div>
                        </div>

                        <div className="flex shrink-0 flex-col items-end gap-3 text-right">
                          <motion.span
                            variants={{
                              rest: {
                                x: 0,
                                borderColor: "rgba(32, 53, 35, 0.12)",
                              },
                              hover: {
                                x: 4,
                                borderColor: "rgba(32, 53, 35, 0.22)",
                              },
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full border text-[var(--ink)]"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </motion.span>
                          <motion.p
                            variants={{
                              rest: { opacity: 0.7, x: 0 },
                              hover: { opacity: 1, x: -2 },
                            }}
                            className="text-sm font-medium text-[var(--ink)]"
                          >
                            {card.foot}
                          </motion.p>
                        </div>
                      </Link>
                    </motion.div>
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
