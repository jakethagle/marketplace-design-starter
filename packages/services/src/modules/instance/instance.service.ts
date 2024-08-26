import { PrismaticService } from "@/modules/base/base.service";
import { Instance } from "@/modules/instance/instance.entity";
import { PrismaticRepository } from "@/modules/base/base.repository";
import { InstanceRepository } from "@/modules/instance/instance.repository";
import { IInstanceService } from "@/interfaces/instance";
import { PrismaticAuth } from "@/interfaces/base";
import { InstanceFlow } from "../flow/flow.entity";
import axios, { AxiosError } from "axios";

/**
 * Instance service for all instance operations
 * @class InstanceService
 * @implements {IInstanceService}
 * @description Service for all instance operations
 */
export class InstanceService
  extends PrismaticService<Instance>
  implements IInstanceService
{
  /**
   *
   * @param {PrismaticAuth} auth The Prismatic authentication details
   * @returns {PrismaticRepository<Instance>} The instance repository for the service
   * @description Initialize the instance repository for the service
   *
   */
  initializeRepository({ auth }: PrismaticAuth): PrismaticRepository<Instance> {
    return new InstanceRepository({ auth });
  }

  public async enable(item: Instance): Promise<boolean> {
    return Promise.resolve(true);
  }

  public async invokeFlow(flow: InstanceFlow, data: unknown): Promise<void> {
    try {
      const result = await axios.post(flow.webhookUrl, data);
      console.log(result.data, result.status);
    } catch (e) {
      const error = e as AxiosError;
      console.error(
        error.message,
        error.response?.data,
        error.response?.status,
      );
      throw new Error(e.message);
    }
  }
}
