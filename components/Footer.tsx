import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerContent = {
  en: {
    brand: "Veda Aura",
    headline: ["Your private tours.", "Built smooth.", "Made to fit."],
    cta: "Book a Tour",
    rights: "Veda Aura 2026. All rights reserved.",
    groups: [
      [
        { href: "/en", label: "Home" },
        { href: "/en/packages", label: "Tours" },
        { href: "/en/experiences", label: "Transfers" },
        { href: "/en/gallery", label: "Gallery" },
        { href: "/en/events", label: "About" },
      ],
      [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
      ],
      [
        { href: "#", label: "Instagram" },
        { href: "#", label: "LinkedIn" },
      ],
    ],
  },
  de: {
    brand: "Veda Aura",
    headline: ["Private Touren.", "Schnell geplant.", "Passend gemacht."],
    cta: "Tour anfragen",
    rights: "Veda Aura 2026. Alle Rechte vorbehalten.",
    groups: [
      [
        { href: "/de", label: "Start" },
        { href: "/de/packages", label: "Touren" },
        { href: "/de/experiences", label: "Transfers" },
        { href: "/de/gallery", label: "Galerie" },
        { href: "/de/events", label: "Uber uns" },
      ],
      [
        { href: "#", label: "Datenschutz" },
        { href: "#", label: "Nutzungsbedingungen" },
      ],
      [
        { href: "#", label: "Instagram" },
        { href: "#", label: "LinkedIn" },
      ],
    ],
  },
} as const;

export default function Footer({
  locale = "en",
}: {
  locale?: "en" | "de";
}) {
  const content = footerContent[locale];

  return (
    <footer className="px-5 pb-5 sm:px-8 lg:px-12 lg:pb-8">
      <div className="overflow-hidden border-[5px] border-[#f0efea] bg-[#03111b]">
        <div className="grid lg:grid-cols-[372px_minmax(0,1fr)]">
          <div className="flex min-h-[30rem] flex-col justify-between border-b border-[#e7e4dd] bg-[#04111c] px-7 py-8 text-white sm:px-10 sm:py-9 lg:border-b-0 lg:border-r">
            <div>
              <Link
                href={locale === "de" ? "/de" : "/en"}
                className="inline-flex items-center gap-3 text-[1.95rem] font-semibold tracking-[-0.05em]"
              >
                <span className="relative flex h-7 w-7 items-center justify-center">
                  <span className="absolute inset-0 rounded-[0.45rem] bg-white/95" />
                  <span className="absolute left-[4px] top-[5px] h-[10px] w-[10px] rounded-full bg-[#04111c]" />
                  <span className="absolute bottom-[4px] right-[4px] h-[11px] w-[9px] rounded-[0.2rem] bg-[#04111c]" />
                </span>
                <span className="text-[2rem] leading-none">{content.brand}</span>
              </Link>

              <div className="mt-16 space-y-10 text-[1.02rem] text-white/56">
                {content.groups.map((group, index) => (
                  <div key={index} className="space-y-2.5">
                    {group.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block transition-colors duration-200 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <p className="pt-8 text-sm text-white/40">{content.rights}</p>
          </div>

          <div className="relative flex min-h-[30rem] flex-col justify-between overflow-hidden px-6 py-6 text-white sm:px-7 sm:py-7 lg:px-7 lg:py-7">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/footer-texture.svg')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.2),rgba(0,0,0,0.05)_35%,rgba(0,0,0,0.25))]" />

            <div className="relative z-10 max-w-[34rem]">
              <h2 className="text-[3.4rem] font-medium leading-[0.94] tracking-[-0.08em] text-white sm:text-[4.5rem] lg:text-[4.85rem]">
                {content.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>

            <div className="relative z-10 mt-10">
              <Link
                href={locale === "de" ? "/de/contact" : "/en/contact"}
                className="flex items-center justify-between gap-4 rounded-[0.35rem] bg-[#f4f2ed] px-6 py-4 text-[#171717] transition-transform duration-200 hover:-translate-y-0.5 sm:px-7 sm:py-5"
              >
                <span className="text-[1.05rem] font-medium sm:text-[1.15rem]">{content.cta}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-[0.22rem] bg-black text-white">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
