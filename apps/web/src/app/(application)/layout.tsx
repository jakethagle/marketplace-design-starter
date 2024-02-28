import Navbar from "@/components/application/nav-bar";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Application",
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
        <nav className="border-b border-border">
          <Navbar />
        </nav>
        <main className="h-[calc(100%_-_6rem)]">{children}</main>
      </body>
    </html>
  );
}
