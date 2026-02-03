import Head from "next/head";
import Contactpage from "./contactclient";

export const metadata = {
  title: "Contact Printer Support",
};

const page = () => {
  return (
    <>
     <Head>
  <title>Contact Printer Support</title>
</Head>
     <Contactpage />
    </>
  );
}

export default page;