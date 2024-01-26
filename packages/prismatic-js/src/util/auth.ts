import { sign } from "jsonwebtoken";

interface TokenResponse {
  access_token: string;
  id_token: string;
  scope: string;
  expires_in: number;
  token_type: "Bearer";
}
export async function getAccessToken(
  refreshToken: string
): Promise<TokenResponse> {
  const response = await fetch("https://app.prismatic.io/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  const tokenBody = (await response.json()) as unknown as TokenResponse;
  return tokenBody;
}

async function validateMarketplaceUserToken(token: string): Promise<void> {
  const response = await fetch(
    "https://app.prismatic.io/embedded/authenticate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to validate marketplace user token: ${text}`);
  }
}

export async function getMarketplaceUserToken(
  params: MarketplaceTokenParams,
  signingKey: string
): Promise<{ access_token: string }> {
  const token = generateMarketplaceToken(params, signingKey);
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

export function generateMarketplaceToken(
  {
    sub,
    externalId,
    name,
    organization,
    customer,
    role,
  }: MarketplaceTokenParams,
  signingKey: string
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
    { algorithm: "RS256" }
  );

  return token;
}
