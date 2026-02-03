"use client";
import Footer from "../components/footer";
import Header from "../components/header";
import ContactPage from "./ContactPage";
import { useEffect } from "react";
export const metadata = {
  title: "Error Canon Printer Support",
};

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
