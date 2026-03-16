"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/utils/locale";

export default function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname);
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}
