import "./globals.css";
import SmartsuppScript from "./components/SmartsuppScript";
import ReloadLink from "./components/ReloadLink";

export const metadata = {
  title: "Printer Driver Support",
  description: "Download printer drivers and get support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav style={{ padding: 20 }}>
          <ReloadLink href="/">Home</ReloadLink> |{" "}
          <ReloadLink href="/about">About</ReloadLink> |{" "}
          <ReloadLink href="/contact">Contact</ReloadLink>
        </nav>

        {/* Main page content */}
        <main>{children}</main>

        {/* Smartsupp + GA4 tracking */}
        <SmartsuppScript />
      </body>
    </html>
  );
}