import Image from "next/image";
import { CarFront, Plane, ShipWheel } from "lucide-react";
import ContactPanel from "@/components/ContactPanel";
import HeroSection from "@/components/HeroSection";
import PageShell from "@/components/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";
import { vehicles } from "@/lib/site-data";

export default function EnglishExperiencesPage() {
  return (
    <PageShell locale="en">
      <HeroSection
        title="Transfer Services"
        sideNote="At Veda Aura, we combine premium service with attention to detail on every airport, port, and city transfer."
        image="https://images.pexels.com/photos/13512045/pexels-photo-13512045.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Luxury transfer vehicle on a road"
        compact
      />

      <Reveal className="mx-auto flex max-w-sm justify-center gap-10 pb-10 text-sm">
        <div className="pill-tab" data-active="false">
          Day rate
        </div>
        <div className="pill-tab" data-active="true">
          Night rate
        </div>
      </Reveal>

      <Stagger className="grid gap-5 lg:grid-cols-3">
        {vehicles.map((vehicle, index) => (
          <StaggerItem key={vehicle.type}>
            <article className="luxury-card h-full p-4">
              <div className="relative aspect-[1.2/0.9] overflow-hidden rounded-[1.2rem] bg-[var(--surface-strong)]">
                <Image alt={vehicle.type} className="object-cover" fill sizes="33vw" src={vehicle.image} />
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-[var(--muted)]">
                {index === 0 ? <CarFront className="h-3.5 w-3.5" /> : null}
                {index === 1 ? <Plane className="h-3.5 w-3.5" /> : null}
                {index === 2 ? <ShipWheel className="h-3.5 w-3.5" /> : null}
                {vehicle.type}
              </div>
              <h3 className="mt-3 text-3xl font-medium tracking-[-0.06em]">
                Capacity: {vehicle.capacity}
              </h3>
              <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {vehicle.rates.map(([route, amount]) => (
                  <div key={route} className="flex items-center justify-between">
                    <span>{route}</span>
                    <span className="text-[var(--ink)]">{amount}</span>
                  </div>
                ))}
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="flex justify-center py-10">
        <button
          type="button"
          className="rounded-xl bg-[var(--accent)] px-8 py-3.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Book Transfer
        </button>
      </Reveal>

      <ContactPanel />
    </PageShell>
  );
}
