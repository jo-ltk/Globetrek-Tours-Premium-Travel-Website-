import type { ReactNode } from "react";
import ChatbotWidget from "@/components/ChatbotWidget";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PageShell({
  children,
  locale = "en",
  footer = true,
  chatbot = false,
}: {
  children: ReactNode;
  locale?: "en" | "de";
  footer?: boolean;
  chatbot?: boolean;
}) {
  return (
    <div className="min-h-screen px-3 py-3 sm:px-4 lg:px-5">
      <div className="page-shell mx-auto max-w-[1280px] overflow-hidden">
        <Navbar locale={locale} />
        <main className="px-5 pb-12 pt-2 sm:px-8 lg:px-12 lg:pb-16">{children}</main>
        {footer ? <Footer locale={locale} /> : null}
      </div>
      {chatbot ? <ChatbotWidget /> : null}
    </div>
  );
}
