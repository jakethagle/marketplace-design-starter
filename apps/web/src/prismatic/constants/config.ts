/**
 * Update the values below with your own Prismatic organization ID, customer external ID, user ID and signing secret.
 * See https://prismatic.io/docs/installing-embedded/ for information on how to get these values.
 */

import type { PrismaticConfig } from "@/prismatic/types";

/**
 * Replace this with a value a signing key you get from https://app.prismatic.io/settings/embedded/
 */
const signingKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDP3+OrT0IXqCu4
EXAMPLEEXAMPLEEXAMPLEEXAMPLEEXAMPLEEXAMPLEEXAMPLEEXAMPLEEXAMPLEE
c5R7QVzxgmGRXjPZGPf5huA1
-----END PRIVATE KEY-----`;

const config: PrismaticConfig = {
  refreshToken: "",
  prismaticUrl: "https://app.prismatic.io",
  sub: "00000000-00000000-00000000-00000000",
  organization:
    "T3JnYW5pemF0aW9uOjAwMDAwMDAwLTAwMDAwMDAwLTAwMDAwMDAwLTAwMDAwMDAw",
  customer: "my-customer-external-id",
  name: "John Doe",
  signingKey,
  role: "admin",
};

export default config;
