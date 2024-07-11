import { PrismaticEntity } from "@/modules/base/base.entity";

export interface IWrite<T extends PrismaticEntity> {
  create(item: T): Promise<boolean>;
  update(id: string, item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
