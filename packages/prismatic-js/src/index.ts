import { createClient, type Client } from "./generated";
import { type ClientOptions } from "./generated/runtime";

export * from "./generated/schema";
export * from "./generated/types";
export { type Client } from "./generated";
interface PrismaticClientOptions extends ClientOptions {
  accessToken: string;
}

export function createPrismaticClient(options: PrismaticClientOptions): Client {
  return createClient({
    headers: {
      Authorization: `Bearer ${options.accessToken}`,
    },
    cache: "no-cache",
  });
}

export * from "./util/auth";
export * from "./util/queries";
