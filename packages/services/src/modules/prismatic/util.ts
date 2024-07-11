import {
  Client,
  signToken,
  createPrismaticClient,
  validateMarketplaceUserToken,
} from "@repo/prismatic-js";
import {
  Role,
  PrismaticAuth,
  isCustomerCredentials,
  isTokenCredentials,
} from "@/interfaces/base";

export function getOrganizationDetails(): {
  organizationId: string;
  signingKey: string;
} {
  if (
    !process.env.PRISMATIC_SIGNING_KEY ||
    !process.env.PRISMATIC_ORGANIZATION_ID
  ) {
    throw new Error("Prismatic environment variables not set");
  }
  return {
    signingKey: process.env.PRISMATIC_SIGNING_KEY || ``,
    organizationId: process.env.PRISMATIC_ORGANIZATION_ID || ``,
  };
}

export async function getPrismaticClient({
  auth,
}: PrismaticAuth): Promise<Client> {
  if (isCustomerCredentials(auth)) {
    const { userId, customerId, role } = auth;
    const { signingKey, organizationId } = getOrganizationDetails();
    const token = signToken(
      {
        customer: customerId,
        externalId: userId,
        name: userId,
        organization: organizationId,
        role,
        sub: userId,
      },
      signingKey,
    );
    await validateMarketplaceUserToken(token);
    const client = createPrismaticClient({ accessToken: token });
    return client;
  }
  if (isTokenCredentials(auth)) {
    const { accessToken } = auth;
    return createPrismaticClient({ accessToken });
  }
  throw new Error("Invalid Prismatic Auth");
}
