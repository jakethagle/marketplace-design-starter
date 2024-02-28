/**
 * Update the values below with your own Prismatic organization ID, customer external ID, user ID and signing secret.
 * See https://prismatic.io/docs/installing-embedded/ for information on how to get these values.
 */

import { PrismaticConfig } from '../types';

/**
 * Replace this with a value a signing key you get from https://app.prismatic.io/settings/embedded/
 */

const signingKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDt5PdwHe8u+GM2
SKFilsSemesdrXu/R7rJIiG4bH9VNz3UosgPtltcZAPlhUFzdS8keGy7LtjDHvIw
sWsxKzAyb4tf/C/vEdBvEIOxbfOvem2bhhkLADjOWDlYnPm2h9dGQH/B4ng99SVV
uiowXbFNO9RWn8xF1gFU/VvMpKJkSu+NBTIGNI7pCanbBYgYJ2ygHwlyuSuEcY3Q
XBJuqnAZmlcXNsOeqKOYhdu1Inx0SUWEzBCgcU4qmPLV8qk1g56WsXSbMvcyfewF
A0Oy5f07OVR77RQzwXo2s3o60BnAcTXuC+18IuyOLhoO6mEewTtfyNJXL1X2TxNr
kijWpcqFAgMBAAECggEADbmwpwOAdHLN8pNVMFrSLvO4HicPZTVZFa1bnwgvfotT
N2ye41KE9JCBWGGMVFeAp/eEunX/o/Op9dzpT4BrkEq26Auk+QOg8CTWnErjjOPL
kCC4BYD2m2fOrd9SBFHTvftkWPDdOXc74grSz/s6irdhebqlg//5ZV3AHqSps+SH
GBGzZaI/ov7l1E54l4tTO71g8HW2nKXKd3jEudDwD/pFxc1SsMDGRS4xTm9tnRVV
JUOV3ZrhJBlMB2Q6JOWOFLvVXag+z5VtItSLCTWKfZnSsgqU0F11Z54deNtSU+Pr
FB08h37G01P8mBvdEuk2wlMwYBMbY7+QnzniuiP1jwKBgQD/tgr1Bpq2fbWNly4T
zTWXmCVata2i97EtyRL+Daf8f/5OFsBv58Y19ZPoEgTUFOwA9iXZxDRnuHMDK54g
XPX+W6HrJiJ1I8QvfWwzGYKB1bGnh4MPTd3fblCfBq09QMIgkjmGH70GDbQCfqLi
phmCzwWcSUgYXnYn28aw2+8h4wKBgQDuKcVRka9bYESVjdsG4dE5pWnPkDEu6Gr+
Hzyb04fzDvlnkWMq08vkfm7A6xG9Dig0zFiGyIIWmJ6ZPWCPldnw6g8FvWYN3dPD
2MzXli3BtXeWTj/2Up1PQ92WEYrJJMZRvLUflDutMdQzM/H4tv20a+9ivl/4cX8B
vNQmM9TudwKBgChKMJPGxJ24VODITzRDgwwtpsUSFxe0WzBRnDJ3SF6adCEtqIh5
Rlu+I93O6P/ZhA3qurADIBavkz+Ooc2LmB7JpUt9qLQ4PHMXGfM7M7rtRp6U1WuV
4z2PDhjgXm9mQrALGhEt8wR/KDu0ZEm9zgs0PzgOu9NLHubM1BONs7HtAoGAF5EQ
kmq9FGipQLdBxiOQRYkFuGFHTKH4/F5w6+Z5nGaN7V6olnNQyLJuGS7pmXCOL/NM
i0HKBZxijT1SkcK9RyaSB/pe395kdwu78VVN/84KIFhr4d747AAGLDReLFs0OKBY
t+A+K3wzyEFKn1bUMgdAL+AwtO/eJnjd8U3Nsy8CgYAvE4A2gzcNzvEgrQmqlwNl
ypKHPqlh/EYGESd3zVrWoLELsRQPrgP+NzPO9jPnfTFWhHfcub9QRVK5h7QYa2hz
LM3gJsq/jVMczSk/Ho6FJR2QH7i4FDLzgF0GqHmHLKikDhukNjaAqElGiZcLknr0
t/cQ3EhMFFWyxgXz0Zj3vg==
-----END PRIVATE KEY-----`;

const config: PrismaticConfig = {
  refreshToken: '9Klg4sh2nR7tzk1UJ1zlgWkACNNiFfvaxdPBlT6OOSdgg',
  prismaticUrl: 'https://app.prismatic.io',
  sub: 'example.customer@Acme SaaS-customer.com',
  organization: 'T3JnYW5pemF0aW9uOmEzMzcxNDg1LTdjNmUtNDVmZC04MzBlLThkMjIxMzEzNTJmYg==',
  customer: '123456',
  name: 'Acme SaaS',
  signingKey,
  role: 'admin'
};

export default config;
