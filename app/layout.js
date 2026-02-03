import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Smartsupp from "./components/Smartsupp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Official Printer Support",
};   

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    
      
  <Smartsupp />
        {children}
      </body>
    </html>
  );
}
