import "./globals.css";
import SmartsuppScript from "./components/SmartsuppScript";
import AutoRefresh from "./components/AutoRefresh";

export const metadata = {
  title: "Printer Driver Support",
  description: "Download printer drivers and get support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AutoRefresh />
        {children}
        <SmartsuppScript />
      </body>
    </html>
  );
}