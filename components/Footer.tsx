import Link from "next/link";

export default function Footer({
  locale = "en",
}: {
  locale?: "en" | "de";
}) {
  const company = locale === "de" ? "Unternehmen" : "Company";
  const contact = locale === "de" ? "Kontakt" : "Contact";
  const about = locale === "de" ? "Uber uns" : "About us";
  const rights =
    locale === "de"
      ? "2026 Veda Aura. Alle Rechte vorbehalten."
      : "2026 Veda Aura. All rights reserved.";

  return (
    <footer className="px-5 pb-5 sm:px-8 lg:px-12 lg:pb-8">
      <div className="rounded-[1.7rem] bg-[var(--accent)] px-6 py-8 text-white sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg">
                /
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/60">Tour Agency</p>
                <p className="text-lg font-semibold">Veda Aura</p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-white/70">
              Tailored tours, premium transfers, and curated private experiences designed around
              comfort and detail.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/55">{company}</p>
            <div className="space-y-3 text-sm text-white/82">
              <Link href={locale === "de" ? "/de" : "/en"}>Home</Link>
              <Link href={locale === "de" ? "/de/packages" : "/en/packages"}>All Tours</Link>
              <Link href={locale === "de" ? "/de/events" : "/en/events"}>{about}</Link>
              <Link href={locale === "de" ? "/de/contact" : "/en/contact"}>{contact}</Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/55">{about}</p>
            <div className="space-y-3 text-sm text-white/82">
              <Link href={locale === "de" ? "/de/experiences" : "/en/experiences"}>
                Transfers
              </Link>
              <Link href={locale === "de" ? "/de/gallery" : "/en/gallery"}>Gallery</Link>
              <Link href={locale === "de" ? "/de/packages" : "/en/packages"}>Privacy Policy</Link>
              <Link href={locale === "de" ? "/de/contact" : "/en/contact"}>Cookies Policy</Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/55">{contact}</p>
            <div className="space-y-3 text-sm text-white/82">
              <p>Athens, Greece</p>
              <p>+30 694 455 3616</p>
              <p>info@veda-aura.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-5 text-center text-xs text-white/55">
          {rights}
        </div>
      </div>
    </footer>
  );
}
