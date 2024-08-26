import { Instance } from "@/modules/instance/instance.entity";
import {
  IPrismaticEntity,
  IPrismaticRepository,
  IPrismaticService,
} from "./base";

export interface IInstanceService extends IPrismaticService<Instance> {
  /**
   * Find all instances
   * @returns {Promise<Instance[]>}
   * @method find
   * @description Find all instances deployed for the currently authenticated user.
   */
  find(): Promise<Instance[]>;

  enable(item: Instance): Promise<boolean>;
}

export interface IInstanceRepository extends IPrismaticRepository<Instance> {
  fetch(): Promise<void>;
}

export interface IInstanceEntity extends IPrismaticEntity {}
