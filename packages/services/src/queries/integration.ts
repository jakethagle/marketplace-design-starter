import { Integration } from "@/modules/integration/integration.entity";
import {
  Client,
  Integration as PrismaticIntegration,
} from "@repo/prismatic-js";

export async function getIntegrations(client: Client): Promise<Integration[]> {
  const {
    marketplaceIntegrations: { nodes },
  } = await client.query({
    marketplaceIntegrations: {
      nodes: {
        __typename: true,
        __scalar: true,
        hasOutdatedComponents: false,
        marketplaceConfiguration: true,
        instances: {
          totalCount: true,
          nodes: {
            __typename: true,
            __scalar: true,
            flowConfigs: {
              totalCount: true,
              nodes: {
                flow: {
                  __typename: true,
                  __scalar: true,
                },
                __scalar: true,
              },
            },
            hasOutdatedComponents: false,
          },
        },
      },
    },
  });
  return nodes.map((n: PrismaticIntegration) => new Integration(n));
}
