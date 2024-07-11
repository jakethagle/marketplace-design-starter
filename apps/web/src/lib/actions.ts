"use server";

import { cookies } from "next/headers";

export async function setRole(newRole: string): Promise<void> {
  cookies().set("role", newRole);
  return Promise.resolve();
}

export async function setLayout(layout: "custom" | "default"): Promise<void> {
  cookies().set("layout", layout);
  return Promise.resolve();
}
