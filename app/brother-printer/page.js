import Head from "next/head";
import BrotherPrinter from "./brotherprinter";
export const metadata = {
  title: "Brother Printer Support",
};
const page = () => {
  return (
   <>
    <Head>
  <title>Brother Printer Support</title>
</Head>
     <BrotherPrinter />
   </>
  );
}

export default page;