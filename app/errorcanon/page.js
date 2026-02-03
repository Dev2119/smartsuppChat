"use client";

import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import ContactPage from "./ContactPage";



export default function SuccessPage() {
 useEffect(() => {
    document.title = "Error Canon Printer Support";
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
         <Header />
      <ContactPage />
      <Footer />
    </div>
  );
}
