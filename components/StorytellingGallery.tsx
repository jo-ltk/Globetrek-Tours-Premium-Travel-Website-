"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const galleryItems = [
  {
    category: "CURATED WORKSHOPS",
    title: "Croissant-Making Workshop",
    description: "Learn the secrets of the perfect buttery, flaky croissant in a traditional Parisian boulangerie setting.",
    image: "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    category: "ARTISANAL TASTING",
    title: "Macaron-Making Workshop",
    description: "Master the art of the delicate French macaron, from the perfect meringue to exquisite ganache fillings.",
    image: "https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    category: "HISTORIC WALKS",
    title: "Evening in Montmartre",
    description: "Stroll through the artistic heart of Paris, where history and romance meet under the glow of streetlights.",
    image: "https://images.pexels.com/photos/1530250/pexels-photo-1530250.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    category: "FINE DINING",
    title: "Private Eiffel Dining",
    description: "An exclusive culinary journey overlooking the Iron Lady, curated for those who seek the extraordinary.",
    image: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1920",
  }
];

interface GalleryItemProps {
  item: typeof galleryItems[0];
  index: number;
  totalItems: number;
  progress: any;
}

function GalleryCard({ item, index, totalItems, progress }: GalleryItemProps) {
  const share = 1 / totalItems;
  const start = index * share;
  const end = (index + 1) * share;

  const isFirst = index === 0;
  const isLast = index === totalItems - 1;

  // Continuous 3-point range for maximum fluidity.
  const y = useTransform(
    progress,
    [start - share, start, end],
    [isFirst ? "0%" : "100%", "0%", isLast ? "0%" : "-100%"]
  );

  // Subtle blur effect for depth only on exiting card
  const blurValue = useTransform(
    progress,
    [start - share, start, end],
    [0, 0, isLast ? 0 : 12] 
  );
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  // Subtle 3D-like scale effect for premium depth
  const scale = useTransform(
    progress,
    [start - share, start, end],
    [1, 1, isLast ? 1 : 0.88]
  );

  // Perspective transform for enhanced depth perception
  const perspective = useTransform(
    progress,
    [start - share, start, end],
    [2000, 2000, isLast ? 2000 : 1600]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        perspective,
        filter: blur,
        zIndex: totalItems + index,
        willChange: "transform, filter",
      }}
      className="absolute inset-0 flex items-center justify-center p-4 md:p-8 lg:p-12"
    >
      <div className="relative h-full w-full max-w-[1600px] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl bg-white">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-8 md:p-16 lg:p-24 flex flex-col justify-end text-white">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-[0.7rem] md:text-xs font-bold tracking-[0.2em] uppercase bg-[#c5b5ff] text-[#1a1a1a] rounded-sm">
              {item.category}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-[family-name:var(--font-serif)] font-medium leading-[1.1] mb-6 tracking-tight">
              {item.title}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StorytellingGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 35,
    mass: 1,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-transparent"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {galleryItems.map((item, index) => (
          <GalleryCard 
            key={index} 
            item={item} 
            index={index} 
            totalItems={galleryItems.length} 
            progress={smoothProgress} 
          />
        ))}
      </div>
    </section>
  );
}

