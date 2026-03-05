import ContactPanel from "@/components/ContactPanel";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSection from "@/components/HeroSection";
import PageShell from "@/components/PageShell";
import { Reveal } from "@/components/animated";
import { faqItems } from "@/lib/site-data";

export default function EnglishContactPage() {
  return (
    <PageShell chatbot locale="en">
      <HeroSection
        title="Contacts"
        sideNote="Luxury travel support for bookings, transfers, route customization, and accessibility planning."
        image="https://images.pexels.com/photos/3224227/pexels-photo-3224227.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Greece columns"
        compact
      />

      <section className="grid gap-8 pb-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="section-kicker">Support</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <FaqAccordion items={faqItems} />
        </Reveal>
      </section>

      <section className="grid gap-6 pb-12 lg:grid-cols-3">
        {[
          ["Write us", "Reach out to us by email", "info@globetrek-tours.com"],
          ["Call us", "Mon-Fri from 8am to 5pm", "+30 694 455 3616"],
          ["Office", "Private transfers and departures", "Athens, Greece"],
        ].map(([title, body, foot]) => (
          <Reveal key={title} className="luxury-card p-6">
            <h3 className="text-2xl font-medium tracking-[-0.05em]">{title}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">{body}</p>
            <p className="mt-8 text-sm font-medium">{foot}</p>
          </Reveal>
        ))}
      </section>

      <ContactPanel />
    </PageShell>
  );
}
