import { IntegrationService, Role } from "@repo/services";
import { NextResponse } from "next/server";
import config from "@/prismatic/constants/config";

export async function GET(): Promise<NextResponse | Response> {
  try {
    const integrationsService = new IntegrationService({
      auth: {
        customerId: config.customer || "",
        role: Role.Admin,
        userId: config.sub || "",
      },
    });
    const instances = await integrationsService.find();
    return NextResponse.json(instances);
  } catch (error) {
    return NextResponse.error();
  }
}
