#!/bin/bash

API_KEY=$(prism me:token)
API_ENDPOINT='https://app.prismatic.io/api/'

QUERY='{
    "query":
    "query { organization { id name }}"
}'

ORG=$(curl ${API_ENDPOINT} -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: bearer ${API_KEY}" \
--data "$(echo $QUERY)" | jq .data)

CUSTOMERS_QUERY='{
    "query":
    "query { customers(isSystem: false) { nodes { id name } }}"
}'



CUSTOMERS=$(curl ${API_ENDPOINT} -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${API_KEY}" \
--data "$(echo $CUSTOMERS_QUERY)" | jq .data.customers.nodes)

ORG_ID=$(echo $ORG | jq .organization.id | tr -d '"')
ORG_NAME=$(echo $ORG | jq .organization.name | tr -d '"')
SIGNING_KEY=$(prism organization:signing-keys:generate);

OUTFILE=src/prismatic/constants/config.ts
BT="\`"

rm -f .env.local

(
cat <<EOF
PRISMATIC_ORGANIZATION_ID='$ORG_ID'
PRISMATIC_SIGNING_KEY='$SIGNING_KEY'
EOF
) > .env.local

# -----------------------------------------------------------
# 'Here document containing the body of the generated script.
(
cat <<EOF
/**
 * Update the values below with your own Prismatic organization ID, customer external ID, user ID and signing secret.
 * See https://prismatic.io/docs/installing-embedded/ for information on how to get these values.
 */

import { PrismaticConfig } from '../types';

/**
 * Replace this with a value a signing key you get from https://app.prismatic.io/settings/embedded/
 */

const signingKey = $BT$SIGNING_KEY$BT

const config: PrismaticConfig = {
  refreshToken: '$(prism me:token --type refresh)',
  prismaticUrl: 'https://app.prismatic.io',
  sub: 'example.customer@$ORG_NAME-customer.com',
  organization: '$ORG_ID',
  customer: '123456',
  name: '$ORG_NAME',
  signingKey,
  role: 'admin'
};
export const customers = $CUSTOMERS;

export default config;
EOF
) > $OUTFILE

