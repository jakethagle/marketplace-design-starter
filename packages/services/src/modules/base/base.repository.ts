import {
  CustomerCredentials,
  IPrismaticRepository,
  PrismaticRepositoryOptions,
  TokenCredentials,
} from "@/interfaces/base";
import { Client } from "@repo/prismatic-js";
import { getPrismaticClient } from "@/modules/prismatic/util";
import { User } from "../user/user.entity";
import { PrismaticEntity } from "./base.entity";

export abstract class PrismaticRepository<T extends PrismaticEntity>
  implements IPrismaticRepository<T>
{
  public _collection: T[];
  public client: Client;
  private _auth: CustomerCredentials | TokenCredentials;
  constructor({ auth }: PrismaticRepositoryOptions) {
    this._auth = auth;
  }

  async authenticate(): Promise<void> {
    this.client = await getPrismaticClient({ auth: this._auth });
    // throw new Error("Not Implemented");
  }
  async getUser(): Promise<User> {
    throw new Error("Method not implemented");
  }
  async fetch(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async create(item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async find(): Promise<T[]> {
    try {
      await this.fetch();
      return this._collection;
    } catch (error) {
      console.log("Caught error: ", error);
      if (error.status === 401) {
        await this.authenticate();
        return await this.find();
      }
      throw Error(error);
    }
  }
  async findOne(id: string): Promise<T> {
    if (!this._collection) {
      await this.fetch();
    }

    const result = this._collection.find((i: T) => i.id === id);
    if (!result) {
      throw new Error("Failed to find");
    }
    return result;
  }
}
