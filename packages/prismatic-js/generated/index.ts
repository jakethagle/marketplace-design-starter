// @ts-nocheck
import type {
  RootQueryGenqlSelection,
  RootQuery,
  RootMutationGenqlSelection,
  RootMutation,
} from './schema'
import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  type FieldsSelection,
  type GraphqlOperation,
  type ClientOptions,
  GenqlError,
} from './runtime'
export type { FieldsSelection } from './runtime'
export { GenqlError }

import types from './types'
export * from './schema'
const typeMap = linkTypeMap(types as any)

export interface Client {
  query<R extends RootQueryGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<RootQuery, R>>

  mutation<R extends RootMutationGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<RootMutation, R>>
}

export const createClient = function (options?: ClientOptions): Client {
  return createClientOriginal({
    url: 'https://app.prismatic.io/api',

    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any
}

export const everything = {
  __scalar: true,
}

export type QueryResult<fields extends RootQueryGenqlSelection> =
  FieldsSelection<RootQuery, fields>
export const generateQueryOp: (
  fields: RootQueryGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('query', typeMap.Query!, fields as any)
}

export type MutationResult<fields extends RootMutationGenqlSelection> =
  FieldsSelection<RootMutation, fields>
export const generateMutationOp: (
  fields: RootMutationGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation!, fields as any)
}
