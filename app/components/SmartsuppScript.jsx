"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ChatAndAnalytics() {
  const pathname = usePathname();

  // Track virtual pageviews in GA4
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", { page_path: pathname });
      console.log("GA4 page view:", pathname);
    }
  }, [pathname]);

  // Inject Smartsupp once
  useEffect(() => {
    if (!document.getElementById("smartsupp-script")) {
      window._smartsupp = {
        key: "5b98e584c8c8167dda7279f5be55ac30e038e59a",
        url: window.location.href,
      };
      const script = document.createElement("script");
      script.id = "smartsupp-script";
      script.src = "https://www.smartsuppchat.com/loader.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Update URL for current page (chat session stays intact)
  useEffect(() => {
    if (window._smartsupp) {
      window._smartsupp.url = window.location.href;
    }
  }, [pathname]);

  return null;
}