"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ChatbotWidget() {
  return (
    <motion.button
      type="button"
      aria-label="Open travel assistant"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[var(--accent)] px-4 py-3 text-sm text-white shadow-[0_18px_40px_rgba(41,72,37,0.32)]"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <MessageCircle className="h-4 w-4" />
      Ask concierge
    </motion.button>
  );
}
