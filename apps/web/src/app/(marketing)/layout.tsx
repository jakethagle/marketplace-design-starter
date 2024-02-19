import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Marketing Website",
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
      <body className="h-full font-sans antialiased">{children}</body>
    </html>
  );
}
