import { User as PrismaticUser } from "@repo/prismatic-js";

export class User {
  public readonly id: string;
  public email: string;
  public externalId: string | null;
  public name: string;

  constructor(user: PrismaticUser) {
    this.id = user.id;
    this.email = user.email;
    this.externalId = user?.externalId;
    this.name = user.name;
  }
}
