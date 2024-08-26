import { IPrismaticEntity } from "@/interfaces/base";

export abstract class PrismaticEntity implements IPrismaticEntity {
  public id: string;
}
