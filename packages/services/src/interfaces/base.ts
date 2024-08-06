import { PrismaticRepository } from "@/modules/base/base.repository";
import { IRead } from "./read";
import { IWrite } from "./write";
import { Customer } from "@repo/prismatic-js";
import { Token } from "typescript";
import { PrismaticEntity } from "@/modules/base/base.entity";

export enum Role {
  Admin = "admin",
  User = "user",
}
export type CustomerCredentials = {
  customerId: string;
  userId: string;
  role: Role;
};
export type TokenCredentials = { accessToken: string };
type PrismaticCredentials = CustomerCredentials | TokenCredentials;

export interface PrismaticAuth {
  auth: PrismaticCredentials;
}
export const isCustomerCredentials = (
  auth: PrismaticCredentials,
): auth is CustomerCredentials => {
  const keys = Object.keys(auth);
  return (
    keys.includes("customerId") &&
    keys.includes("userId") &&
    keys.includes("role")
  );
};
export const isTokenCredentials = (
  auth: PrismaticCredentials,
): auth is TokenCredentials => {
  return "accessToken" in auth;
};

export interface PrismaticServiceOptions extends PrismaticAuth {}

export interface PrismaticRepositoryOptions extends PrismaticAuth {}
export interface IPrismaticService<T extends PrismaticEntity> {
  initializeRepository(params: PrismaticServiceOptions): PrismaticRepository<T>;
}

export interface IPrismaticRepository<T>
  extends IWrite<PrismaticEntity>,
    IRead<PrismaticEntity> {
  find(): Promise<PrismaticEntity[]>;
  findOne(id: string): Promise<PrismaticEntity>;
}

export interface IPrismaticEntity {
  id: string;
}
