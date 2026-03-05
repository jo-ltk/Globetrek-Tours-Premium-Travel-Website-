"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/utils/helpers";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({
  items,
}: {
  items: FaqItem[];
}) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="space-y-1">
      {items.map((item, index) => {
        const open = active === index;

        return (
          <div key={item.question} className="border-b border-[var(--line)]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setActive(open ? null : index)}
            >
              <span className="text-sm sm:text-base">{item.question}</span>
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] transition-transform duration-200",
                  open ? "rotate-45" : ""
                )}
              >
                <Plus className="h-3.5 w-3.5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-12 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
