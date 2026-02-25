import "./globals.css";
import SmartsuppScript from "./components/SmartsuppScript";


export const metadata = {
  title: "Printer Driver Support",
  description: "Download printer drivers and get support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    
        <SmartsuppScript />



        {children}
      </body>
    </html>
  );
}
