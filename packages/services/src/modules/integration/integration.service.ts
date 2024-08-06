import { PrismaticService } from "@/modules/base/base.service";
import { Integration } from "@/modules/integration/integration.entity";
import { PrismaticRepository } from "@/modules/base/base.repository";
import { IntegrationRepository } from "@/modules/integration/integration.repository";
import { IIntegrationService } from "@/interfaces/integration";
import { PrismaticAuth } from "@/interfaces/base";

/**
 * integration service for all integration operations
 * @class InstanceService
 * @implements {IIntegrationService}
 * @description Service for all integration operations
 */
export class IntegrationService
  extends PrismaticService<Integration>
  implements IIntegrationService
{
  /**
   *
   * @param {PrismaticAuth} auth The Prismatic authentication details
   * @returns {PrismaticRepository<Integration>} The Integration repository for the service
   * @description Initialize the integration repository for the service
   *
   */
  initializeRepository({
    auth,
  }: PrismaticAuth): PrismaticRepository<Integration> {
    return new IntegrationRepository({ auth });
  }
}
