"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

export default function SmartsuppScript() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.smartsupp) {
      window.smartsupp("recordPageView", {
        url: window.location.href,
        title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return (
    <Script
      id="smartsupp-chat"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var _smartsupp = _smartsupp || {};
          _smartsupp.key = '39f11ef21138bfb68c7b3e937d4bd7f68e17a4f4';

          window.smartsupp || (function (d) {
            var s, c, o = smartsupp = function () {
              o._.push(arguments);
            };
            o._ = [];
            s = d.getElementsByTagName('script')[0];
            c = d.createElement('script');
            c.type = 'text/javascript';
            c.charset = 'utf-8';
            c.async = true;
            c.src = 'https://www.smartsuppchat.com/loader.js';
            s.parentNode.insertBefore(c, s);
          })(document);
        `,
      }}
    />
  );
}