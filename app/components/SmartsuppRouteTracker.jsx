"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmartsuppRouteTracker() {
  const pathname = usePathname();
  const lastPath = useRef(null);

  useEffect(() => {
    if (pathname === lastPath.current) return;
    lastPath.current = pathname;

    const sendPageView = () => {
      if (window.smartsupp) {
        window.smartsupp("page", {
          path: pathname,
          url: window.location.href,
          title: document.title || pathname,
        });
        return true;
      }
      return false;
    };

    // Try immediately
    if (sendPageView()) return;

    // Retry until Smartsupp loads
    const interval = setInterval(() => {
      if (sendPageView()) clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}
