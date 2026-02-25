"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmartsuppAndAnalytics() {
  const pathname = usePathname();

  // 1️⃣ Track SPA page views in GA4 (or any analytics)
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname,
      });
      console.log("GA4 page view:", pathname);
    }
  }, [pathname]);

  // 2️⃣ Inject Smartsupp chat once
  useEffect(() => {
    if (!document.getElementById("smartsupp-script")) {
      // Setup Smartsupp global
      window._smartsupp = {
        key: "39f11ef21138bfb68c7b3e937d4bd7f68e17a4f4",
        url: window.location.href, // initial URL
      };

      const script = document.createElement("script");
      script.id = "smartsupp-script";
      script.src = "https://www.smartsuppchat.com/loader.js";
      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  // 3️⃣ Update Smartsupp URL on SPA navigation (doesn't create full pageview in dashboard, but keeps URL current)
  useEffect(() => {
    if (window._smartsupp) {
      window._smartsupp.url = window.location.href;
      console.log("Smartsupp URL updated:", window._smartsupp.url);
    }
  }, [pathname]);

  return null;
}