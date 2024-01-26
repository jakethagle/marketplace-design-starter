import { createClient, type Client } from "./generated";
import { type ClientOptions } from "./generated/runtime";

export * from "./generated/schema";
export * from "./generated/types";

interface PrismaticClientOptions extends ClientOptions {
  accessToken: string;
}

export function createPrismaticClient(options: PrismaticClientOptions): Client {
  return createClient({
    headers: {
      Authorization: `Bearer ${options.accessToken}`,
    },
  });
}

export * from "./util/auth";
