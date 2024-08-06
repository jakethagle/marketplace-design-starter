import { PrismaticRepository } from "@/modules/base/base.repository";
import { Integration } from "@/modules/integration/integration.entity";
import { getIntegrations } from "@/queries/integration";

export class IntegrationRepository extends PrismaticRepository<Integration> {
  async fetch() {
    if (!this.client) {
      await this.authenticate();
    }
    this._collection = await getIntegrations(this.client);
  }
}
