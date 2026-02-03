import "./globals.css";
import SmartsuppScript from "./components/SmartsuppScript";
import SmartsuppRouteTracker from "./components/SmartsuppRouteTracker";

export const metadata = {
  title: "Printer Driver Support",
  description: "Download printer drivers and get support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Smartsupp Script */}
        <SmartsuppScript />

        {/* Route Change Tracker */}
        <SmartsuppRouteTracker />

        {children}
      </body>
    </html>
  );
}
