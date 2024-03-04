/**
 * Update the values below with your own Prismatic organization ID, customer external ID, user ID and signing secret.
 * See https://prismatic.io/docs/installing-embedded/ for information on how to get these values.
 */

import { PrismaticConfig } from '../types';

/**
 * Replace this with a value a signing key you get from https://app.prismatic.io/settings/embedded/
 */

const signingKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdMlrO78lell9x
DodHt6x5kQlaUgN2iAkxP8VFnDaJvSTy6MHLwZeO1prORRJ8dTrC+PWyPisjU7gA
wPI5HQA/e2exYFk2zYBZROM3YLbhgURD9NZBU7NyZ+Tf5FMaI3Oc9GMsGHTzeIRg
qG9MXD1fFB0hKGnF3WhSiRTmfzgbLTV/NaYDSz5jP1NqXtmeCAGESV4cQG2X+zPH
1za383GYQqaCrPRGxWHIjfj+ENOMxzLsP6NEifEzSmeLFXkDxZ3tB2WyPZHHKmp0
tXo01eXp+U/sRFV4F5HkyPIf3a43Z6v0n8bId80PX02JtSJxszGs8E7ev0vG7l4P
drn8hCQDAgMBAAECggEAJG/imqr8Oz+R2evrMZWClh8nUtdF1DjOIKtOd8cw4RaF
tQR8v1UdY0+dTIi4Mz8dIsqAcRN1/ldOhGY0/0YYo55gN75Ej65svMR6AoEZgwXq
o/Hho/zZ0IACjl8nYBytlMkVH8h/e1wJGzqPqdyLoTlRUzlB40ph/xelT5RXlfy0
sNyajKWksnjxWvx4SB3y+IsParX7C0wUcGlHOBR0olJ0QTcUbsCr181a8Quad7CC
rauGqXlYwjafXR4uzm3+v6Ro3SjgLX/S0MCvUY08OAhd9HwUfEb2cDJ4L19kgUBS
sqe1ggFpfMmjjnZhCibGwkZdIpN5jby2+0Wr8keicQKBgQDE38OlLWy8Xb+KgRFV
dGfq35IagT6SD75GK8Xo+ZHVKs+UdbtBtNmfv3/0B/+JylfQ8hoZKrRALVeTjfu4
7tUJ9l9f7mTX+KkM5I3r6/XTvv3yWWGQTuUSdJmeormhP8VxeivDrkrdqMDF7ykt
GWvUihDCgGcXg4aIlR66SzRPCwKBgQDMaBTN53nyGkz6irtahy8pQbWYrb11hZcT
C/QOAMizNx3sj2yWwAJ26ut+aExyeB4mRGS6qyq9c1zaBq4iWlK4tQgaxR1owjhb
YSVHkcBPBCljhmopCYZO2dlXIazBvuD4N2ABheDoN+/V0ACq3dWqEKvBRKsl3jie
fWIJ+SR56QKBgFn8/eyOatle8KJahJXO84EEWEANO5B/6bUhZQEssmABhYiSl9lc
1OyUF+Rvk3pkJue3Af7m6iU7lIA5sgnCAVbgao/q4+VkH8Fo5wYjgOYcsu8Hs/TG
WyaobV95eegewh0wfrie/lF7RUI0I1od+I/Z2/dLwdOZpvDfWIBGx84pAoGAYbt2
DwkZNle67KP+dodiVkCTuj9/8bwBAttZQoS/cWjuBtiAnAeMZh1moZbuzmB+Ud+r
pdEHa3PINnqxMb2sBaKREHOk3xzV42Msdu7KWz1rKKnxAlQKgpMIpu9z8WL5n9Si
M7g2U/HC26FLYGcWrOyxooPZrQ52VdkvUgNsnFkCgYBkG5DzbpN7+AqcLlbucNGt
PwjQoRTE1T44+HjP4O4QZkZA5QdeEVUZv+X8HFulJfz5Uh1DZDpY5d+MS/Ot0Va/
zCx3O/1fq+g4CRi+hEQKT0padOjBIIj7xBAn1OaHm2U18En5QJCr4LG9TIYOUVCN
e/hYN28h4a06+sFmX+WMHw==
-----END PRIVATE KEY-----`;

const config: PrismaticConfig = {
  refreshToken: 'mEOyVjwMgBTq8Fn-eSrLdSHdsBqluzJdkwuQ8ZSNlWMKf',
  prismaticUrl: 'https://app.prismatic.io',
  sub: 'example.customer@Acme SaaS-customer.com',
  organization: 'T3JnYW5pemF0aW9uOmEzMzcxNDg1LTdjNmUtNDVmZC04MzBlLThkMjIxMzEzNTJmYg==',
  customer: '123456',
  name: 'Acme SaaS',
  signingKey,
  role: 'admin'
};
export const customers = [
  {
    "id": "Q3VzdG9tZXI6ZDkyYjU2MmEtNmU0NC00YTg2LWExNGYtYjIyMDZjZDMxZTQz",
    "name": "Innovative Exports LLC"
  },
  {
    "id": "Q3VzdG9tZXI6MjIxODE5MWEtYTg4Zi00YTRmLTg3NmYtZjUzNTA0NTUyMjYz",
    "name": "Commerce Co"
  },
  {
    "id": "Q3VzdG9tZXI6N2Q1ODA2ZjEtYzljNy00NTU1LTlmYjMtNzE0YmUyOGZmNjE1",
    "name": "Internal"
  }
];

export default config;
