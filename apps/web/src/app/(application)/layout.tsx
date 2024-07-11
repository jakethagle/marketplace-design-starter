import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/application/providers";

import "../globals.css";
import MultiLayout from "@/components/common/layout";

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
      <body
        className={`h-screen max-h-screen overflow-hidden antialiased ${inter.className}`}
      >
        <Providers>
          <MultiLayout>{children}</MultiLayout>
        </Providers>
      </body>
    </html>
  );
}
