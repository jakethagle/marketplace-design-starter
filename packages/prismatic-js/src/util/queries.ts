import type { Client, Component, Integration } from "../generated";

export async function getComponents(client: Client): Promise<{
  nodes: Component[];
}> {
  let paginate = true;
  const results: Component[] = [];
  let cursor: string | null = null;
  while (paginate) {
    // eslint-disable-next-line no-await-in-loop -- skip
    const { components } = await client.query({
      __name: "components",
      components: {
        __args: { after: cursor },
        pageInfo: {
          hasNextPage: true,
          endCursor: true,
        },
        nodes: {
          __scalar: true,
          connections: {
            nodes: {
              __scalar: true,
              inputs: {
                nodes: {
                  __scalar: true,
                },
              },
            },
          },
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- skip
    if (components.nodes) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access -- skip
      results.push(...(components.nodes || []));
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- skip
    paginate = components.pageInfo.hasNextPage || false;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- skip
    cursor = components.pageInfo.endCursor;
  }
  return { nodes: results };
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
