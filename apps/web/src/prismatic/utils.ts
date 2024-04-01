import { sign } from "jsonwebtoken";
import config from "./constants/config";

export function getToken(role?: string): string {
  const currentTime = Math.floor(Date.now() / 1000);
  const token = sign(
    {
      sub: config.sub, // Some unique identifier for the user
      external_id: config.external_id,
      name: config.name,
      organization: config.organization,
      customer: config.customer,
      nbf: currentTime,
      iat: currentTime,
      exp: currentTime + 60 * 60 * 4, // 4 hours from now
      role: role ? role : config.role,
    },
    config.signingKey, // Store this somewhere safe
    { algorithm: "RS256" },
  );
  return token;
}
