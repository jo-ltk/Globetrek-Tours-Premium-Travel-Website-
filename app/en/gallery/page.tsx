import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import PageShell from "@/components/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";

const galleryImages = [
  "https://images.pexels.com/photos/18910728/pexels-photo-18910728.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/29459095/pexels-photo-29459095.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3224227/pexels-photo-3224227.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

export default function EnglishGalleryPage() {
  return (
    <PageShell locale="en">
      <HeroSection
        title="Gallery"
        sideNote="A visual collection built around the same calm, premium atmosphere as the reference design."
        image="https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Scenic coastline"
        compact
      />

      <section className="grid gap-8 pb-12 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <p className="section-kicker">Visual story</p>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
            Landmarks, coastlines, and quiet luxury in every frame
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-2xl text-sm leading-8 text-[var(--muted)]">
            The gallery page keeps the structure premium and restrained: generous spacing, rounded
            image containers, and a clean hierarchy that lets the photography lead the page.
          </p>
        </Reveal>
      </section>

      <Stagger className="grid gap-5 md:grid-cols-2">
        {galleryImages.map((image, index) => (
          <StaggerItem key={image} className={index === 1 ? "md:translate-y-10" : ""}>
            <div className="relative aspect-[1/1.05] overflow-hidden rounded-[1.7rem] border border-[var(--line)]">
              <Image
                alt={`Gallery image ${index + 1}`}
                className="object-cover"
                fill
                sizes="50vw"
                src={image}
              />
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </PageShell>
  );
}
