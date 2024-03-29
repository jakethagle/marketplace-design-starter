/**
 * Update the values below with your own Prismatic organization ID, customer external ID, user ID and signing secret.
 * See https://prismatic.io/docs/installing-embedded/ for information on how to get these values.
 */

import { PrismaticConfig } from '../types';

/**
 * Replace this with a value a signing key you get from https://app.prismatic.io/settings/embedded/
 */

const signingKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2m29D5rNwkk5m
D2PQHXwt+rU+DfvOWGs3SkXcTO9qmAP7gvQgG6XabQ3mdnygYQ8eoYTsSKuJ3wQK
6FHmdBjr4bIMaflFkTbNVTuvt6suqUU/iVQMvz+pjAtVmm5e6sqfNChH49RBThLW
0liprDC0k9rd3B4L6+loTSedOOeF1yUqpnozkuejRbWqGDg8FOYaXqmlNyAmmRdB
m6gqKEqOg815VUrkpeLq3KmaW6kPw9oSPfLS3GXhNbGXF6rYwLgG9uizCueoDgdG
OXf4r3ep7acNyB6s9a8cNkQVvrsz+ptFk29ns0U3VCr4ET98LCwtQPh5rWDG/3+2
qoeK48wHAgMBAAECggEAK7lvPH6Gs+tMe3Ku7zvIKshP0qKNi1yvm4cc0EHZyBfL
SFOUegW0wmb/f5IaiFqFQMvjJKLH9FTixmvXhIuDFiQuOnu7lNVPHn6MsqgThLJC
YxLSfdTjfQkMA7zdNbwZtWJLTN94SQTVTPwD/+i7ptmKfDpDNY6RDoj+9c4U3f58
oFNl8W3wrOou/QrH9qVd+6auOS6KnE241bfQ+hpvVTf0NRxqxXif2y1wiMtU9B5V
abPT9hRPpUGhnqDMkcuVlE+QgDfK+7bVwHoyGYESC3/BXL5ycxfXP7UPGFycKTOt
Wt3BuHo7sDLwsHBYeuf7Qi1ufJBGnDVvzQxhSjDo8QKBgQDESm1iFQjbHq/byqsa
jaEgwd3mQ7Ep3TFnHikKGsD1WAkOTj6TLVTjQrdLl4pk1gei7ARXSdZnhar/j9Xy
xw5rHoA9o2/8+3eCdvNcQjETeGXDmBXFd4IXtU4qo7LjUKG6MAVcmg4UJXmPMHnC
JDmivL+roO7XeB5/++nTaJ+n1wKBgQDuJ3B3UdbLTpTsOt4HqM1nSBjZHOE7QTO6
KgLujWs9scGQogdT51IWGWwZZpGVJkr/wZMmW1EOfZVmLKP2yPGdgboN5maJ8WjX
apArn5pidHftkOT5bnI9bp4voAGbMEKLiyQbhve6LYkwhSuw8GoMDRZcwrVl4Bnk
Z5NF6yO3UQKBgEJUbDYSqZVx/zcke0FTzrkFCfj/suRUrJcN6AxUEhRWFWlSI28U
iHTrXIkcwlVkxdvWKXldqCf/UVNexYtunH6yJd+uVO+GAlKB46avb2oG60x3HhRG
WB2u1KUwAAk0fBIwm/84x70jFLrARMTH/PnzEknq7gq9uoDBHbikyB6tAoGBAOsw
VbfwQVA8BYQZSoWD5X12zNs00xViecQCkyykymB9+CtuaBArJHyglImtKl6CF5Tl
xP0fNzg5O15Q/YfMwBeNMoFhpKfbmW8LVN9P2fYbEQiyi/3sXbNfV6auvIdWrJEE
Ux9ANctOBuq8yP4PHptSHWB0BRJbsxZGV0G4SmhRAoGAIy+yPaE8RpNiMMSKbZbZ
pxXdQrQgs6yAHMxx+f6ZYM86VLJi24oE1yrW+DKNwFcwphykOanMzSGcVGATRVXD
YG9zDEV9ibgo77M0MbN/WNGqRlebFxzyUNLGkuFuSmiZrIdq7AeTtTwdIlJrJwza
zo1jOCNHx+CWN/nrRewAQI0=
-----END PRIVATE KEY-----`;

const config: PrismaticConfig = {
  refreshToken: 'QbhLwY8kSGb819O7E89yzXfeoQiDcJQj69JBZ6mD7bavT',
  prismaticUrl: 'https://app.prismatic.io',
  sub: 'example.customer@Acme Co-customer.com',
  organization: 'T3JnYW5pemF0aW9uOjA1MWQxOWMzLTc2ODctNGM3Yy05NTYxLTg3YWYzNWU3YmM5OA==',
  customer: '123456',
  name: 'Acme Co',
  signingKey,
  role: 'admin'
};
export const customers = [
  {
    "id": "Q3VzdG9tZXI6OTIxNDUxODUtM2U0Ny00OTU2LWI1YWEtODZkYWU3NmJmZDIz",
    "name": "Customer Co"
  },
  {
    "id": "Q3VzdG9tZXI6MTcxNjljOTgtYmRjYS00ZmViLTg2ZTQtOTI4MjQzM2YzZGEx",
    "name": "Quantum Leap Technologies"
  },
  {
    "id": "Q3VzdG9tZXI6NGVjMGUzOGEtZmZjZC00MWQzLWExZTAtZjgwZTdmNWY4ODUz",
    "name": "Progix Inc"
  }
];

export default config;
