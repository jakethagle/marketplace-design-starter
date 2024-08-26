"use client";
import { PrismaticAuthProvider } from "@/prismatic/components/prismatic-auth";

export function Providers({ children }): JSX.Element {
  return <PrismaticAuthProvider>{children}</PrismaticAuthProvider>;
}
