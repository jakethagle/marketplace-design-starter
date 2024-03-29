import type { Client, Component, Integration } from "../generated";

export async function getComponents(client: Client): Promise<{
  nodes: Component[];
}> {
  const { components } = await client.query({
    __name: "components",
    components: {
      __args: {},
      nodes: {
        __scalar: true,
        actions: {
          nodes: {
            __scalar: true,
            __typename: true,
            inputs: {
              nodes: {
                __scalar: true,
              },
            },
          },
        },
      },
    },
  });
  return components as { nodes: Component[] };
}

export async function getMarketplaceIntegrations(client: Client): Promise<{
  nodes: Integration[];
}> {
  const { marketplaceIntegrations } = await client.query({
    __name: "MarketplaceIntegrations",
    marketplaceIntegrations: {
      __args: { first: 10 },
      totalCount: true,
      __typename: true,
      nodes: {
        __typename: true,
        category: true,
        createdAt: true,
        description: true,
        documentation: true,
        id: true,
        name: true,
        updatedAt: true,
        avatarUrl: true,
      },
    },
  });
  return marketplaceIntegrations as { nodes: Integration[] };
}
