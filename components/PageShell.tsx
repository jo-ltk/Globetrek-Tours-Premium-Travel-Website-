import type { ReactNode } from "react";
import ChatbotWidget from "@/components/ChatbotWidget";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PageShell({
  children,
  locale = "en",
  footer = true,
  chatbot = false,
  fullscreenHero = false,
  hideNavbar = false,
}: {
  children: ReactNode;
  locale?: "en" | "de";
  footer?: boolean;
  chatbot?: boolean;
  /** When true the navbar floats over the first section (hero). */
  fullscreenHero?: boolean;
  hideNavbar?: boolean;
}) {
  return (
    <div className="min-h-screen">
      <div className="page-shell min-h-screen">
        {hideNavbar ? (
          <main className="pb-12 lg:pb-16 pt-0">{children}</main>
        ) : fullscreenHero ? (
          /* Navbar floats on top of the hero */
          <div className="relative">
            <div className="absolute inset-x-0 top-0 z-30">
              <Navbar locale={locale} fullscreenHero />
            </div>
            <main className="pb-12 lg:pb-16 pt-0">{children}</main>
          </div>
        ) : (
          <>
            <Navbar locale={locale} />
            <main className="px-5 pb-12 pt-2 sm:px-8 lg:px-12 lg:pb-16">
              {children}
            </main>
          </>
        )}
        {footer ? <Footer locale={locale} /> : null}
      </div>
      {chatbot ? <ChatbotWidget /> : null}
    </div>
  );
}
