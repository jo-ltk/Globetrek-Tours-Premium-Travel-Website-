"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/helpers";

const panels = [
  {
    title: "We",
    kind: "surface" as const,
  },
  {
    title: "Protect",
    kind: "image" as const,
    image:
      "https://images.pexels.com/photos/843144/pexels-photo-843144.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Iceberg protecting nature",
  },
  {
    title: "Arrow",
    kind: "accent" as const,
  },
  {
    title: "Nature",
    kind: "image" as const,
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Nature canyon landscape",
  },
];

const defaultDesktopColumns = "1fr 1fr 1fr 1fr";

const desktopColumnsByActive: Record<number, string> = {
  0: "1.85fr 0.85fr 0.7fr 0.7fr",
  1: "1fr 1.85fr 0.7fr 0.7fr",
  2: "1fr 1fr 1.65fr 0.55fr",
  3: "1fr 1fr 1fr 1.8fr",
};

function Panel({
  index,
  activeIndex,
  onHover,
}: {
  index: number;
  activeIndex: number | null;
  onHover: (index: number) => void;
}) {
  const panel = panels[index];
  const isActive = activeIndex === index;
  const isDimmed = activeIndex !== null && !isActive;

  return (
    <div
      className={cn(
        "group relative flex h-32 min-w-0 items-center justify-center overflow-hidden rounded-[2rem] md:h-40 md:rounded-[3rem] xl:h-48",
        panel.kind === "surface" && "bg-[var(--surface-strong)] text-[var(--ink)]",
        panel.kind === "accent" && "bg-[#eaff66] text-black",
        panel.kind === "image" && "bg-[var(--line)] text-white",
      )}
      onMouseEnter={() => onHover(index)}
    >
      {panel.kind === "image" && panel.image ? (
        <>
          <motion.div
            animate={{
              scale: isActive ? 1.08 : 1,
              filter: isDimmed ? "brightness(0.8)" : "brightness(0.92)",
            }}
            className="absolute inset-0"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={panel.image}
              alt={panel.alt}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 50vw, 25vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
        </>
      ) : null}

      {panel.kind === "accent" ? (
        <motion.div
          animate={{
            x: isActive ? 16 : 0,
            scale: isActive ? 1.08 : 1,
            rotate: isActive ? -6 : 0,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <ArrowRight className="h-10 w-10 stroke-[1.5] md:h-12 md:w-12 lg:h-14 lg:w-14" />
        </motion.div>
      ) : (
        <motion.span
          animate={{
            x: isActive ? 12 : 0,
            scale: isActive ? 1.03 : 1,
            opacity: isDimmed ? 0.92 : 1,
          }}
          className="relative z-10 px-6 text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {panel.title}
        </motion.span>
      )}
    </div>
  );
}

export default function HoverCardStrip() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {panels.map((_, index) => (
          <Panel
            key={index}
            index={index}
            activeIndex={null}
            onHover={() => undefined}
          />
        ))}
      </div>

      <div
        className="hidden gap-4 md:grid md:transition-[grid-template-columns] md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)]"
        onMouseLeave={() => setActiveIndex(null)}
        style={{
          gridTemplateColumns:
            activeIndex === null ? defaultDesktopColumns : desktopColumnsByActive[activeIndex],
        }}
      >
        {panels.map((_, index) => (
          <Panel
            key={index}
            index={index}
            activeIndex={activeIndex}
            onHover={setActiveIndex}
          />
        ))}
      </div>
    </>
  );
}
