import { PrismaticEntity } from "@/modules/base/base.entity";

export interface IRead<T extends PrismaticEntity> {
  find(): Promise<T[]>;
  findOne(id: string): Promise<T>;
}
