import { Integration } from "@/modules/integration/integration.entity";
import {
  IPrismaticEntity,
  IPrismaticRepository,
  IPrismaticService,
} from "./base";

export interface IIntegrationService extends IPrismaticService<Integration> {
  /**
   * Find all Integrations
   * @returns {Promise<Integration[]>}
   * @method find
   * @description Find all Integrations deployed for the currently authenticated user.
   */
  find(): Promise<Integration[]>;
  findOne(id: string): Promise<Integration>;
}

export interface IIntegrationRepository
  extends IPrismaticRepository<Integration> {
  fetch(): Promise<void>;
}

export interface IIntegrationEntity extends IPrismaticEntity, Integration {}
