import { sign } from "jsonwebtoken";
import { Client } from "../generated";
import { createPrismaticClient } from "..";

interface TokenResponse {
  access_token: string;
  id_token: string;
  scope: string;
  expires_in: number;
  token_type: "Bearer";
}

/**
 * Retrieves an access token from the Prismatic API using an organization user's refresh token.
 * @param refreshToken - The refresh token used to obtain the access token.
 * @returns A promise that resolves to a TokenResponse object containing the access token and other token information.
 */
export async function getAccessToken(
  refreshToken: string,
): Promise<TokenResponse> {
  const response = await fetch("https://app.prismatic.io/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  const tokenBody = (await response.json()) as unknown as TokenResponse;
  return tokenBody;
}

/**
 * Validates a marketplace user token by making a request to the Prismatic API.
 * @param token - The marketplace user token to validate.
 * @returns A promise that resolves when the token is successfully validated.
 * @throws An error if the token validation fails.
 */
export async function validateMarketplaceUserToken(
  token: string,
): Promise<void> {
  const response = await fetch(
    "https://app.prismatic.io/embedded/authenticate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to validate marketplace user token: ${text}`);
  }
}

export async function getAuthenticatedClient(
  params: MarketplaceTokenParams,
  signingKey: string,
): Promise<{ client: Client; token: string }> {
  const token = signToken(params, signingKey);
  await validateMarketplaceUserToken(token);
  const client = createPrismaticClient({ accessToken: token });
  return { client, token };
}
/**
 * Generates a marketplace user token based on the provided parameters and signing key.
 * @param params - The parameters used to generate the token.
 * @param signingKey - The signing key used to sign the token.
 * @returns A promise that resolves to an object containing the generated access token.
 */
export async function getMarketplaceUserToken(
  params: MarketplaceTokenParams,
  signingKey: string,
): Promise<{ access_token: string }> {
  const token = signToken(params, signingKey);
  await validateMarketplaceUserToken(token);

  return { access_token: token };
}

export interface MarketplaceTokenParams {
  sub: string;
  externalId: string;
  name: string;
  organization: string;
  customer: string;
  role: string;
}

/**
 * Signs a marketplace user token with the provided parameters and signing key.
 * @param params - The parameters for the token.
 * @param signingKey - The signing key used to sign the token.
 * @returns The signed token.
 */
export function signToken(
  {
    sub,
    externalId,
    name,
    organization,
    customer,
    role,
  }: MarketplaceTokenParams,
  signingKey: string,
): string {
  const currentTime = Math.floor(Date.now() / 1000);

  const token = sign(
    {
      sub, // Some unique identifier for the user
      external_id: externalId,
      name,
      organization,
      customer,
      nbf: currentTime,
      iat: currentTime,
      exp: currentTime + 60 * 60 * 4, // 4 hours from now
      role,
    },
    signingKey, // Store this somewhere safe
    { algorithm: "RS256" },
  );

  return token;
}
