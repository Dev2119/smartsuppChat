import Head from "next/head";
import CanonPage from "./canonmain";

export const metadata = {
  title: "Canon Printer Support",
};
const page = () => {
  return (
   <>
    <Head>
  <title>Canon Printer Support</title>
</Head>
   <CanonPage />
    
   </>
  );
}

export default page;




