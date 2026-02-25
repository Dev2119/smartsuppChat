"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmartsuppScript() {
  const pathname = usePathname();

  // Inject Smartsupp script only once
  useEffect(() => {
    if (!document.getElementById("smartsupp-script")) {
      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = "39f11ef21138bfb68c7b3e937d4bd7f68e17a4f4";

      const script = document.createElement("script");
      script.id = "smartsupp-script";
      script.src = "https://www.smartsuppchat.com/loader.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Track page changes for SPA navigation
  useEffect(() => {
    if (window.smartsupp) {
      window.smartsupp("page", pathname, {
        title: document.title,
        url: window.location.href,
      });
      console.log("Smartsupp page:", pathname);
    }

    if (window.gtag) {
      window.gtag("event", "page_view", { page_path: pathname });
      console.log("GA4 page view:", pathname);
    }
  }, [pathname]);

  return null;
}