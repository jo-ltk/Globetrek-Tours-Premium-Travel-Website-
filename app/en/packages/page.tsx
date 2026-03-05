import HeroSection from "@/components/HeroSection";
import PackageCard from "@/components/PackageCard";
import PageShell from "@/components/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";
import { tours } from "@/lib/site-data";

export default function EnglishPackagesPage() {
  return (
    <PageShell locale="en">
      <HeroSection
        title="All Tours"
        image="https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Calm sea landscape at sunset"
        compact
      />

      <Reveal className="mx-auto flex max-w-md justify-center gap-8 pb-10 text-sm">
        <div className="pill-tab" data-active="true">
          All Tours
        </div>
        <div className="pill-tab" data-active="false">
          Wheelchair Accessible Tours
        </div>
      </Reveal>

      <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {tours.map((tour) => (
          <StaggerItem key={tour.slug}>
            <PackageCard locale="en" tour={tour} />
          </StaggerItem>
        ))}
      </Stagger>
    </PageShell>
  );
}
