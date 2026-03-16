import ContactPanel from "@/components/ContactPanel";
import ComfortSection from "@/components/ComfortSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import HoverCardStrip from "@/components/HoverCardStrip";
import PageShell from "@/components/PageShell";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Reveal } from "@/components/animated";
import StorytellingGallery from "@/components/StorytellingGallery";


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
        <div className="mx-auto max-w-[1400px]">
          <HoverCardStrip />
        </div>
      </Reveal>

      <StorytellingGallery />

      <GallerySection />
      <ComfortSection />

      <TestimonialsSection />
      <ContactPanel />
    </PageShell>
  );
}
