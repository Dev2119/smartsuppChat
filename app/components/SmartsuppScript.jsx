"use client";

import Script from "next/script";

export default function SmartsuppScript() {
  return (
    <Script id="smartsupp-chat" strategy="afterInteractive">
      {`
        var _smartsupp = _smartsupp || {};
        _smartsupp.key = '2996e5ea3ca8fbed95d0eb2aa8ef3007521fcb1e';
        window.smartsupp || (function(d) {
          var s,c,o=smartsupp=function(){ o._.push(arguments)}; o._=[];
          s=d.getElementsByTagName('script')[0];
          c=d.createElement('script');
          c.type='text/javascript';
          c.charset='utf-8';
          c.async=true;
          c.src='https://www.smartsuppchat.com/loader.js';
          s.parentNode.insertBefore(c,s);
        })(document);
      `}
    </Script>
  );
}
