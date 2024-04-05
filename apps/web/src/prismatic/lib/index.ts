import prismaticConfig from "@/prismatic/constants/config";
import type { Component, Integration, User } from "@repo/prismatic-js";
import {
  createPrismaticClient,
  getAccessToken,
  getMarketplaceUserToken,
  isUser,
} from "@repo/prismatic-js";

export async function getComponents(): Promise<{
  nodes: Component[];
}> {
  const { client } = await prismaticMarketplace();
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
          },
        },
      },
    },
  });
  return components as { nodes: Component[] };
}
export async function getMarketplaceIntegrations(): Promise<{
  nodes: Integration[];
}> {
  const { client } = await prismaticMarketplace();
  const { marketplaceIntegrations } = await client.query({
    __name: "MarketplaceIntegrations",
    marketplaceIntegrations: {
      __args: {},
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

interface PrismaticClient {
  client: ReturnType<typeof createPrismaticClient>;
  getUserInfo: () => Promise<User>;
}
export async function prismaticAdmin(): Promise<PrismaticClient> {
  if (!prismaticConfig.refreshToken) {
    throw new Error("No refresh token provided");
  }
  const { access_token: accessToken } = await getAccessToken(
    prismaticConfig.refreshToken,
  );
  const client = createPrismaticClient({ accessToken });
  return {
    client,
    getUserInfo: async () => {
      const { authenticatedUser } = await client.query({
        __name: "UserInfo",
        authenticatedUser: { __scalar: true, customer: { __scalar: true } },
      });
      if (isUser(authenticatedUser)) {
        return authenticatedUser;
      }
      throw new Error("Failed to cast user to correct type");
    },
  };
}

export async function prismaticMarketplace(): Promise<PrismaticClient> {
  const { access_token: accessToken } = await getMarketplaceUserToken(
    {
      customer: prismaticConfig.customer,
      externalId: prismaticConfig.sub,
      role: prismaticConfig.role || "admin",
      organization: prismaticConfig.organization,
      sub: prismaticConfig.sub,
      name: prismaticConfig.name || "AdminUser",
    },
    prismaticConfig.signingKey,
  );
  const client = createPrismaticClient({ accessToken });
  return {
    client,
    getUserInfo: async () => {
      const { authenticatedUser } = await client.query({
        __name: "UserInfo",
        authenticatedUser: { __scalar: true, customer: { __scalar: true } },
      });
      if (isUser(authenticatedUser)) {
        return authenticatedUser;
      }
      throw new Error("Failed to cast user to correct type");
    },
  };
}
