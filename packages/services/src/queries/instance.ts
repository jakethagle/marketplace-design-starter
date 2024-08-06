import { Instance } from "@/modules/instance/instance.entity";
import { Instance as PrismaticInstance } from "@repo/prismatic-js";

export async function getInstances(): Promise<Instance[]> {
  try {
    const {
      instances: { nodes },
    } = await this.client.query({
      instances: {
        nodes: {
          __typename: true,
          __scalar: true,
          integration: {
            __scalar: true,
            hasOutdatedComponents: false,
          },
          flowConfigs: {
            totalCount: true,
            nodes: {
              flow: {
                __typename: true,
                __scalar: true,
              },
              __scalar: true,
            },
          },
          hasOutdatedComponents: false,
        },
      },
    });
    return nodes.map((n: PrismaticInstance) => new Instance(n));
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
