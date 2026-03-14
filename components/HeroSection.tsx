"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Grid } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/* ── Custom Icons ── */
const GridDots = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={cn("w-5 h-5", className)}
  >
    <circle cx="4" cy="4" r="1.5" />
    <circle cx="12" cy="4" r="1.5" />
    <circle cx="20" cy="4" r="1.5" />
    <circle cx="4" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="20" cy="12" r="1.5" />
    <circle cx="4" cy="20" r="1.5" />
    <circle cx="12" cy="20" r="1.5" />
    <circle cx="20" cy="20" r="1.5" />
  </svg>
);

/* ─────────────── Premium Hero (Clone of "Paris by Emily") ─────────────── */
function PremiumHero({
  title,
  description,
  image,
  imageAlt,
  videoSrc,
  locale = "en",
}: {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  videoSrc?: string;
  locale?: "en" | "de";
}) {
  const [loaded, setLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-[95vh] min-h-[750px] p-4 bg-[#E7DED2]">
       {/* Restored padding and borders for the hero section as requested */}
       <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] border-[4px] border-white/10 group">
          {/* ── Background media ── */}
          {videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3s] scale-105"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className={cn(
                "object-cover transition-transform duration-[3s] ease-out",
                loaded ? "scale-100" : "scale-110"
              )}
            />
          )}

          {/* ── Darken Overlay ── */}
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-1000" />

          {/* ── Top Navigation Bar ── */}
          <header className="absolute top-0 left-0 w-full z-40 flex items-center justify-between px-8 py-8 md:px-12">
            {/* Left: Branding & Language */}
            <div className="flex items-center gap-4">
               <motion.div
                layoutId="menu-box"
                className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-semibold bg-white text-black border border-white/20 transition-transform duration-300 hover:scale-110 cursor-pointer z-50 overflow-hidden shadow-sm"
                onClick={() => setIsMenuOpen(true)}
              >
                <motion.span layout>/</motion.span>
              </motion.div>
              <div className="hidden sm:block">
                <LanguageSwitcher locale={locale} />
              </div>
            </div>

            {/* Center: Brand Name (Short, Cute & White) */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <h2 className="font-serif text-[0.95rem] md:text-[1.4rem] text-white tracking-[0.25em] font-medium leading-none whitespace-nowrap uppercase">
                 Veda Aura
              </h2>
            </div>

            {/* Right: Primary Navigation (Redesigned as premium buttons) */}
            <div className="hidden lg:flex items-center gap-1.5 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-black/5 shadow-sm">
              {[
                { label: locale === "de" ? "Start" : "Home", href: locale === "de" ? "/de" : "/en" },
                { label: locale === "de" ? "Uber uns" : "About us", href: locale === "de" ? "/de/events" : "/en/events" },
                { label: locale === "de" ? "Transfers" : "Transfers", href: locale === "de" ? "/de/experiences" : "/en/experiences" },
                { label: locale === "de" ? "Touren" : "Tours", href: locale === "de" ? "/de/packages" : "/en/packages" },
                { label: locale === "de" ? "Kontakt" : "Contacts", href: locale === "de" ? "/de/contact" : "/en/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-5 h-10 flex items-center justify-center rounded-full text-[10px] font-bold tracking-[0.15em] uppercase text-black/50 hover:text-black hover:bg-black/5 hover:scale-105 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile / Compact Rights */}
            <div className="flex lg:hidden items-center gap-3">
               <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-black border border-black/10 shadow-sm">
                 <ArrowUpRight className="w-4 h-4" />
               </button>
            </div>
          </header>

          {/* ── Expanded Menu Box ── */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                layoutId="menu-box"
                className="absolute top-6 left-6 z-[60] w-[calc(100%-3rem)] max-w-sm bg-[#0D0D0D] rounded-[2rem] p-8 text-white shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                {/* Menu Header / Close */}
                <div className="flex justify-end items-start mb-6">
                  <motion.div 
                    layout
                    className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold bg-white text-black cursor-pointer transition-transform hover:rotate-90 shadow-lg" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span layout>/</motion.span>
                  </motion.div>
                </div>

                <div className="flex-1 flex flex-col justify-center overflow-y-auto custom-scrollbar">
                    {/* Main Links */}
                    <motion.nav 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-col gap-4 mb-8"
                    >
                      {[
                        { label: locale === "de" ? "Start" : "Home", href: locale === "de" ? "/de" : "/en" },
                        { label: locale === "de" ? "Uber uns" : "About us", href: locale === "de" ? "/de/events" : "/en/events" },
                        { label: locale === "de" ? "Transfers" : "Transfers", href: locale === "de" ? "/de/experiences" : "/en/experiences" },
                        { label: locale === "de" ? "Touren" : "Tours", href: locale === "de" ? "/de/packages" : "/en/packages" },
                        { label: locale === "de" ? "Kontakt" : "Contacts", href: locale === "de" ? "/de/contact" : "/en/contact" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-[2.2rem] md:text-[2.8rem] font-serif font-medium leading-[1.1] hover:italic transition-all duration-300 w-fit"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.nav>

                    {/* Divider */}
                    <motion.div 
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: 0.2 }}
                      className="h-px bg-white/10 mb-8 origin-left" 
                    />

                    {/* Resources */}
                    <motion.div 
                       initial={{ opacity: 0, y: 15 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.3 }}
                       className="space-y-4"
                    >
                      <h4 className="text-[0.6rem] uppercase tracking-[0.2em] text-white/30 font-bold">Resources</h4>
                      <div className="flex flex-col gap-3">
                        {["Careers", "Privacy Policy"].map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="text-lg text-white/50 hover:text-white transition-colors w-fit font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                </div>

                {/* Bottom Handle / Infinite aesthetic */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                   <div className="w-1.5 h-1.5 rounded-full bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

            {/* ── Main Content Overlay ── */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-20">
              <div className="max-w-xl">
                 <h1 className={cn(
                   "font-serif text-white text-[3.5rem] md:text-[5rem] lg:text-[6.2rem] leading-[0.9] tracking-[-0.02em] font-bold drop-shadow-sm transition-all duration-1000",
                   loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                 )}>
                   {title}
                 </h1>
              </div>

              {/* Pagination Dot */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-glow" />
              </div>
            </div>
       </div>
    </section>
  );
}


/* ─────────────── Full-screen cinematic hero ─────────────── */
function FullscreenHero({
  title,
  eyebrow,
  description,
  sideNote,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  videoSrc,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  sideNote?: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  videoSrc?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  // Helper to split title only if it has 3+ words
  const words = title.split(" ");
  const titleParts = words.length >= 3 
    ? words.reduce((acc: string[][], word, i, arr) => {
        if (i < Math.ceil(arr.length / 2)) {
          acc[0].push(word);
        } else {
          acc[1].push(word);
        }
        return acc;
      }, [[], []])
    : [words, []];

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-start justify-start">
      {/* ── Background media ── */}
      {videoSrc ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onCanPlayThrough={() => setLoaded(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={cn(
            "object-cover transition-transform duration-[2.5s] ease-out",
            loaded ? "scale-100" : "scale-110"
          )}
          onLoad={() => setLoaded(true)}
        />
      )}

      {/* ── Cinematic Overlays (Balanced for readability and clarity) ── */}
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

      {/* ── Main Content (Top Left - Serif Style) ── */}
      <div className="relative z-10 w-full max-w-7xl px-6 pt-32 sm:px-12 lg:px-20 xl:px-24 text-left">
        {eyebrow && (
           <p className={cn(
             "text-white/90 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.2em] font-bold mb-4 transition-all duration-1000 delay-300",
             loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
           )}>
             {eyebrow}
           </p>
        )}
        {/* Luxury Journeys Title (Cinematic Serif) */}
        <h1
          className={cn(
            "max-w-4xl font-serif text-white transition-all duration-1000 delay-100",
            "text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem]",
            "leading-[1.1] tracking-tight",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {titleParts[0].length > 0 && (
            <span className="block">{titleParts[0].join(" ")}</span>
          )}
          {titleParts[1].length > 0 && (
            <span className="block italic text-white/95">{titleParts[1].join(" ")}</span>
          )}
        </h1>
      </div>

      {/* ── Sophisticated Stepped Bottom-Left Box ── */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 z-20 transition-all duration-1000 delay-700",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}
      >
        <div className="flex flex-col">
          {/* Action Section (More compact) */}
          <div className="bg-white/90 backdrop-blur-xl px-6 py-4 flex items-center gap-4 min-w-[22rem] rounded-tr-[2rem] rounded-tl-none border-t border-r border-white/20">
            {/* Play Button Wrapper */}
            <div className="relative group cursor-pointer">
              <div className="w-12 h-12 rounded-full border-2 border-black/10 p-1 transition-transform duration-500 group-hover:scale-110">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                   <Image 
                      src={image} 
                      alt="Thumbnail" 
                      fill
                      className="object-cover brightness-50"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                   </div>
                </div>
              </div>
            </div>

            {/* Caption Text */}
            <div className="flex-1">
              {sideNote && (
                <p className="font-serif font-bold text-base text-[#03111b] leading-tight">
                  {sideNote}
                </p>
              )}
              <p className="text-[0.6rem] uppercase tracking-wider text-black/50 font-bold mt-0.5">
                {description || "Play the video"}
              </p>
            </div>

            {/* Side Action Button */}
            <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black transition-all cursor-pointer">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Compact (inner pages) hero ─────────────── */
function CompactHero({
  eyebrow,
  title,
  description,
  sideNote,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  overlay,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  sideNote?: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlay?: boolean;
}) {
  return (
    <section className="space-y-7 pb-6">
      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          {eyebrow ? (
            <p className="section-kicker mb-5">{eyebrow}</p>
          ) : null}
          <h1 className="display-title max-w-4xl text-[3rem] font-semibold uppercase leading-none sm:text-[4.3rem] lg:text-[5.25rem]">
            {title}
          </h1>
        </div>
        <div className="max-w-sm justify-self-end text-sm leading-6 text-[var(--muted)]">
          {sideNote ? <p>{sideNote}</p> : null}
          {description ? (
            <p className={sideNote ? "mt-4" : ""}>{description}</p>
          ) : null}
          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref}
              className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--ink)]"
            >
              {ctaLabel}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.7rem] border border-black/5">
        <div className="relative aspect-[16/7]">
          <Image
            alt={imageAlt}
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src={image}
          />
          {overlay ? (
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Public export ─────────────── */
export default function HeroSection({
  eyebrow,
  title,
  description,
  sideNote,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  overlay = false,
  compact = false,
  fullscreen = false,
  premium = false,
  videoSrc,
  locale = "en",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  sideNote?: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlay?: boolean;
  compact?: boolean;
  fullscreen?: boolean;
  premium?: boolean;
  videoSrc?: string;
  locale?: "en" | "de";
}) {
  if (premium) {
    return (
      <PremiumHero
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt}
        videoSrc={videoSrc}
        locale={locale}
      />
    );
  }

  if (fullscreen) {
    return (
      <FullscreenHero
        title={title}
        eyebrow={eyebrow}
        description={description}
        sideNote={sideNote}
        image={image}
        imageAlt={imageAlt}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        videoSrc={videoSrc}
      />
    );
  }

  return (
    <CompactHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      sideNote={sideNote}
      image={image}
      imageAlt={imageAlt}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      overlay={overlay}
    />
  );
}
