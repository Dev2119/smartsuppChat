"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmartsuppScript() {
  const pathname = usePathname();

  useEffect(() => {
    // Remove old script
    const existing = document.getElementById("smartsupp-script");
    if (existing) existing.remove();

    // Reset globals safely
    delete (window as any).smartsupp;
    (window as any)._smartsupp = {
      key: "39f11ef21138bfb68c7b3e937d4bd7f68e17a4f4",
    };

    // Inject new script
    const script = document.createElement("script");
    script.id = "smartsupp-script";
    script.src = "https://www.smartsuppchat.com/loader.js";
    script.async = true;

    document.body.appendChild(script);
  }, [pathname]);

  return null;
}