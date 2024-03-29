import Navbar from "@/components/application/nav-bar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Application",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <html className="h-screen" lang="en" suppressHydrationWarning>
      <body className={`h-full antialiased ${inter.className}`}>
        <nav className="border-b border-border">
          <Navbar />
        </nav>
        <main className="h-[calc(100%_-_3.75rem)]">{children}</main>
      </body>
    </html>
  );
}
