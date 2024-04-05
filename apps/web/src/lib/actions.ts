"use server";

import { cookies } from "next/headers";

export async function setRole(newRole: string): Promise<void> {
  cookies().set("role", newRole);
  return Promise.resolve();
}
