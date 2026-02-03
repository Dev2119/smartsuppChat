import HpPage from "./hppage";
import Head from "next/head";
export const metadata = {
  title: "HP Printer Support",
};




const page = () => {
  return (
   <>
   <Head>
  <title>HP Printer Support</title>
</Head>
   <HpPage />
   </>
  );
}

export default page;