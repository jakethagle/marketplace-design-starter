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
        <nav className="h-24 border-b border-border">
          <Banner />
          <Navbar />
        </nav>
        <main className="h-[calc(100%_-_6rem)]">{children}</main>
      </body>
    </html>
  );
}
