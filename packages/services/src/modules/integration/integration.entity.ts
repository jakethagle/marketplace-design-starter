import {
  Integration as PrismaticIntegration,
  Instance as PrismaticInstance,
} from "@repo/prismatic-js";
import { PrismaticEntity } from "../base/base.entity";
import { IIntegrationEntity } from "@/interfaces/integration";
import { Instance } from "@/modules/instance/instance.entity";

export class Integration extends PrismaticEntity implements IIntegrationEntity {
  public category: string | null;
  public description: string;
  public name: string;
  public version: number;
  public deployed: boolean;
  public avatarUrl: string | null;
  public instances: Instance[] = [];
  public readonly deployable: boolean;

  constructor(integration: PrismaticIntegration) {
    super();
    this.id = integration.id;
    this.category = integration.category;
    this.name = integration.name;
    this.version = integration.versionNumber;
    this.deployed = integration.instances.totalCount > 0;
    this.avatarUrl = integration.avatarUrl;
    this.description = integration.description || "";
    if (integration.instances?.nodes) {
      this.instances = integration.instances?.nodes.map(
        (instance: PrismaticInstance) => new Instance(instance),
      );
    }
  }
}
