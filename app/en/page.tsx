import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ContactPanel from "@/components/ContactPanel";
import ComfortSection from "@/components/ComfortSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
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

      <GallerySection />
      <ComfortSection />

      <TestimonialsSection />
      <ContactPanel />
    </PageShell>
  );
}
