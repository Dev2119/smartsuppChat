import "./globals.css";
import SmartsuppScript from "./components/SmartsuppScript";
import RouteReload from "./components/RouteReload";

export const metadata = {
  title: "Printer Driver Support",
  description: "Download printer drivers and get support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RouteReload />
        {children}
        <SmartsuppScript />
      </body>
    </html>
  );
}