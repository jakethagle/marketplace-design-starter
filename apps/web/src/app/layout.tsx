import type { Metadata } from "next";
import Banner from "../components/banner";
import Navbar from "../components/nav-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marketplace Design System Starter",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      className="h-screen"
      // data-theme="dark"
      lang="en"
      suppressHydrationWarning
    >
      <body className="h-full font-sans antialiased">
        <Navbar />
        <Banner />
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
