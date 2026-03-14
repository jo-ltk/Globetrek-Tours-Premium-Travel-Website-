"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/animated";
import { testimonials } from "@/lib/site-data";

function formatRating(value: number) {
  return Number.isInteger(value) ? value.toFixed(1) : value.toString();
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-12">
      <Reveal className="overflow-hidden border-[5px] border-[#f0efea] bg-[#efede7]">
        <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0))]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-white/35 blur-3xl"
          />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="section-kicker justify-center">Reviews</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.07em] sm:text-5xl lg:text-[3.65rem]">
              What our clients say about us
            </h2>

            <div className="mx-auto mt-10 max-w-4xl">
              <p className="line-clamp-4 text-[2rem] font-medium leading-[1.24] tracking-[-0.06em] text-[#31414d] sm:text-[2.55rem] lg:text-[3.4rem]">
                <span className="text-[#445662]/70">&ldquo;</span>
                {activeTestimonial.quote}
                <span className="text-[#445662]/70">&rdquo;</span>
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center">
              <p className="text-xl font-bold tracking-[-0.05em] text-[#16232d]">
                {activeTestimonial.name}
              </p>
              <p className="text-base text-[#55616b] mt-1">
                {activeTestimonial.company
                  ? `${activeTestimonial.role}, ${activeTestimonial.company}`
                  : activeTestimonial.role}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Show testimonial from ${testimonial.name}`}
                    className={`group relative overflow-hidden rounded-full transition-all duration-300 ${
                      isActive
                        ? "h-16 w-16 shadow-md"
                        : "h-12 w-12 opacity-50 hover:opacity-100 grayscale-[30%] hover:grayscale-0"
                    }`}
                    initial={false}
                    animate={{
                      y: [0, -4 - (index % 3), 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Image
                      alt={testimonial.name}
                      className="object-cover"
                      fill
                      sizes={isActive ? "64px" : "48px"}
                      src={testimonial.image}
                    />
                    <span
                      className={`absolute inset-0 transition-colors duration-300 ${
                        isActive ? "bg-transparent" : "bg-white/10 group-hover:bg-transparent"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
