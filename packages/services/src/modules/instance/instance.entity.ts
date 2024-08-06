import { Integration } from "@/modules/integration/integration.entity";
import {
  InstanceFlowConfig,
  Instance as PrismaticInstance,
} from "@repo/prismatic-js";
import { InstanceFlow } from "@/modules/flow/flow.entity";
import { PrismaticEntity } from "@/modules/base/base.entity";
import { IInstanceEntity } from "@/interfaces/instance";

export class Instance extends PrismaticEntity implements IInstanceEntity {
  // public integration: Integration;
  public description: string;
  public name: string;
  public version: number;
  public flows: InstanceFlow[];

  constructor(instance: PrismaticInstance) {
    super();
    this.id = instance.id;
    this.name = instance.name;
    this.description = instance.description;
    this.version = instance.deployedVersion;
    // this.integration = new Integration(instance.integration);
    this.flows = instance.flowConfigs.nodes?.map(
      (f: InstanceFlowConfig) => new InstanceFlow(f),
    );
  }
}
