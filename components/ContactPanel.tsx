import Link from "next/link";
import { Mail, PenSquare, Phone } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";

const contactCards = [
  {
    icon: Mail,
    title: "Write us",
    body: "Reach out to us by email",
    foot: "info@veda-aura.com",
  },
  {
    icon: PenSquare,
    title: "Fill out form",
    body: "Submit your request online",
    foot: "Leave request",
  },
  {
    icon: Phone,
    title: "Call us",
    body: "Mon-Fri from 8am to 5pm",
    foot: "+30 694 455 3616",
  },
];

export default function ContactPanel() {
  return (
    <section className="rounded-[1.9rem] bg-[var(--surface-strong)] px-5 py-10 sm:px-8 lg:px-10">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="section-kicker justify-center">Get in touch</p>
        <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
          Have a question or need assistance?
        </h2>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          We are here to help in the way most convenient for you.
        </p>
      </Reveal>

      <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
        {contactCards.map((card) => {
          const Icon = card.icon;

          return (
            <StaggerItem key={card.title}>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium">{card.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{card.body}</p>
                {card.title === "Fill out form" ? (
                  <Link
                    href="/en/contact"
                    className="mt-5 inline-flex rounded-lg bg-[var(--accent)] px-4 py-3 text-sm text-white"
                  >
                    {card.foot}
                  </Link>
                ) : (
                  <p className="mt-5 text-sm font-medium">{card.foot}</p>
                )}
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
