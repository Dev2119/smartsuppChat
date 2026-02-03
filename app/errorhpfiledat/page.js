import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import ContactPage from "./ContactPage";


export const metadata = {
  title: "Error HP Printer Support",
};
export default function SuccessPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
      <Head>
  <title>Error HP Printer Support</title>
</Head>
         <Header />
      <ContactPage />
      <Footer />
    </div>
  );
}
