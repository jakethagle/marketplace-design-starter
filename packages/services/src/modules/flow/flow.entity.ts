import { InstanceFlowConfig as PrismaticInstanceFlowConfig } from "@repo/prismatic-js";
import { PrismaticEntity } from "../base/base.entity";
export interface IInstanceFlow {
  id: string;
  name: string;
  webhookUrl: string;
}

export class InstanceFlow extends PrismaticEntity implements IInstanceFlow {
  public readonly id: string;
  public name: string;
  public webhookUrl: string;

  constructor(flowConfig: PrismaticInstanceFlowConfig) {
    super();
    this.id = flowConfig.id;
    this.name = flowConfig.flow.name;
    this.webhookUrl = flowConfig.webhookUrl;
  }
}
