import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketing Website",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <html
      className="h-screen"
      // data-theme="dark"
      lang="en"
      suppressHydrationWarning
    >
      <body className={`h-full antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
