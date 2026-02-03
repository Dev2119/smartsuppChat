"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmartsuppRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.smartsupp) {
      window.smartsupp("page", {
        path: pathname,
        title: document.title,
      });
    }
  }, [pathname]);

  return null;
}
