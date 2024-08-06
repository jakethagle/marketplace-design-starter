import { prismaticServices } from "@/prismatic/lib";
import { Integration } from "@repo/services";
import { cookies } from "next/headers";

export { type Integration };
export async function getRole(): Promise<string | undefined> {
  return await Promise.resolve(cookies().get("role")?.value || "admin");
}

export async function getMarketplaceIntegration(
  integrationId: string,
): Promise<Integration> {
  const integration =
    await prismaticServices.marketplaceService.findOne(integrationId);
  return integration;
}
