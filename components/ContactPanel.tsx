import Link from "next/link";
import { ArrowUpRight, Mail, PenSquare, Phone } from "lucide-react";
import { Reveal } from "@/components/animated";

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
    href: "/en/contact",
  },
  {
    icon: Phone,
    title: "Call us",
    body: "Speak with us directly for quick questions and assistance.",
    foot: "+30 694 455 3616",
    href: "tel:+306944553616",
  },
];

export default function ContactPanel() {
  return (
    <section className="py-12">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[var(--accent)] px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
            <p className="section-kicker !text-white/65 before:!bg-white/25">Get in touch</p>
            <h2 className="mt-5 max-w-md text-4xl font-medium tracking-[-0.07em] sm:text-5xl">
              Have a question or need assistance?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
              We are here to help with private tours, transfers, route planning, and accessibility
              needs in the way that feels easiest for you.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.2rem] border border-white/14 bg-white/8 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">Fast reply</p>
                <p className="mt-2 text-lg font-medium">Personal support</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/14 bg-white/8 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">Tailored help</p>
                <p className="mt-2 text-lg font-medium">Tours and transfers</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="space-y-4">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group flex items-start justify-between gap-4 rounded-[1.4rem] border border-[var(--line)] bg-white/55 px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ink)]/18 hover:bg-white/72"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
                          {card.title}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-7 text-[var(--muted)]">
                          {card.body}
                        </p>
                        <p className="mt-4 text-sm font-medium text-[var(--ink)]">{card.foot}</p>
                      </div>
                    </div>

                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
