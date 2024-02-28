// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- skip
//@ts-nocheck
import {
  GenqlError,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  linkTypeMap,
  type ClientOptions,
  type FieldsSelection,
  type GraphqlOperation,
} from "./runtime";
import type {
  RootMutation,
  RootMutationGenqlSelection,
  RootQuery,
  RootQueryGenqlSelection,
} from "./schema";
import types from "./types";

export type { FieldsSelection } from "./runtime";
export { GenqlError };

export * from "./schema";
const typeMap = linkTypeMap(types as any);

export interface Client {
  query: <R extends RootQueryGenqlSelection>(
    request: R & { __name?: string },
  ) => Promise<FieldsSelection<RootQuery, R>>;

  mutation: <R extends RootMutationGenqlSelection>(
    request: R & { __name?: string },
  ) => Promise<FieldsSelection<RootMutation, R>>;
}

export const createClient = function (options?: ClientOptions): Client {
  return createClientOriginal({
    url: "https://app.prismatic.io/api",

    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  });
};

export const everything = {
  __scalar: true,
};

export type QueryResult<fields extends RootQueryGenqlSelection> =
  FieldsSelection<RootQuery, fields>;
export const generateQueryOp: (
  fields: RootQueryGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation("query", typeMap.Query!, fields as any);
};

export type MutationResult<fields extends RootMutationGenqlSelection> =
  FieldsSelection<RootMutation, fields>;
export const generateMutationOp: (
  fields: RootMutationGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation("mutation", typeMap.Mutation!, fields as any);
};
