"use client";

import { useEffect } from "react";
import CanonPage from "./canonmain";

export default function Page() {
  useEffect(() => {
    document.title = "Canon Printer Support";
  }, []);

  return <CanonPage />;
}
