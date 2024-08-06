import { PrismaticRepository } from "@/modules/base/base.repository";
import { Instance as PrismaticInstance } from "@repo/prismatic-js";
import { Instance } from "@/modules/instance/instance.entity";
import { IInstanceRepository } from "@/interfaces/instance";

export class InstanceRepository
  extends PrismaticRepository<Instance>
  implements IInstanceRepository
{
  async fetch() {
    if (!this.client) {
      await this.authenticate();
    }
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
    this._collection = nodes.map((n: PrismaticInstance) => new Instance(n));
  }
}
