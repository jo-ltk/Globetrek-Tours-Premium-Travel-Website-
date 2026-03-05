import { Reveal, Stagger, StaggerItem } from "@/components/animated";
import { testimonials } from "@/lib/site-data";

export default function TestimonialsSection() {
  return (
    <section className="space-y-8 py-12">
      <Reveal>
        <p className="section-kicker">Reviews</p>
        <h2 className="mt-4 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
          What our clients say about us
        </h2>
      </Reveal>

      <Stagger className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <article className="luxury-card h-full p-6">
              <p className="text-sm leading-7 text-[var(--muted)]">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {testimonial.route}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
