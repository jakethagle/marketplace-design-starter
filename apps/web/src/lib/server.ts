import { cookies } from "next/headers";

export async function getRole(): Promise<string | undefined> {
  return Promise.resolve(cookies().get("role")?.value || "admin");
}
