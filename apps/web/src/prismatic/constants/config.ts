/**
 * Update the values below with your own Prismatic organization ID, customer external ID, user ID and signing secret.
 * See https://prismatic.io/docs/installing-embedded/ for information on how to get these values.
 */

import { PrismaticConfig } from '../types';

/**
 * Replace this with a value a signing key you get from https://app.prismatic.io/settings/embedded/
 */

const signingKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDDZluiQXm5HMuA
gLSYULqwSplZLbP/gWy2MVrbFZTvornmWtNTzFXdalln8H2Zk0V01tj1d8WG1E5q
kGguUDlDNQwEuUzbCtJMQJJXEDPduNPVTGlyTSeQFdKOaCKkw4jzI38lYjeDh7n3
U3hFHSXAgqNk2cVNRhOMmw6f9pZ8jeNfsIkfVWxm4LVYOrL3SWGmWNdYT3gIsQ/1
L+uRl/5W7CW4G/k1H+xwKewXnVykG5StFf8ekNsQs0+Sl869IEvu0TF316exgWB3
JcNYyVLJVhtYLs5q9XmHFVRJa0hMIA52oJwftIFbq8TB86yekz+ZLpfvuKI2P0OP
pXUIFcC/AgMBAAECggEAQEpeXf2DCkgSIP637OGq+zQgTno+HhQ8a5nDlg/8x/fX
iJZbr9esbMSAFDXJbY1KLg4+pk05HYqfHmrTDGHy5Uz/3lIFmpBt7w7T13eKSSp1
8FlK3IPMP5kehSJ4O5PmbHFCdU9iipFOu7Sn/r1/XV7eWeFZDHrBFeMypakhjGsj
qO7rpL8S1FGoOlw2H0pc3eKXRv1t0goTqZ3Dyz/Vj+jnNcaxYDfDhkw+LG/sfeC9
UZYgHIlvUEmz0xT1PE/JHSN9Wh99yvRsaDmYlr7S92hLra/y+GHbkIXr7HI8Ggou
y1G5vPsTimAMxw2b4BlGMr/KWA8VR59U3Lb9EB9wkQKBgQDZyxixdUSsnhiD77bC
uIKwEVSKbCgki39x4nIHLRpD75WYpWTNo+UGffgqDVQZHve7JV5Wz9yiubBKEOvF
Nj8EUp5hdsBheenzl0nidzvKjLUrXphhCjU6mlJCyGZDlNKrGRlvrWeVQBTAyQCB
xq1DbrBoIMhjdyfy5tSw3A8LyQKBgQDlrZbNfmos7rtLFm0E99WFKlDl3W+C453M
5piMnAKIXYzFGg29iXO+zYAMqSKJmp00dJL845AYQ7gkbJ0D31z4k/CtuNOmu5V8
XzAmQhGgJQkXUdBzYZ6i4lgkY2WIZioVDOjhjF++0mcY+R+VAgfvmt0CQa2XMp+7
jlqqFmOcRwKBgQCao5cb4Vzqh7J2c407wxCf/R4ezt7N2/KYpSU7rS2aERIR+VWS
oY1rR6QeD6qnz5IsYkMStrI9JEVkwZD2TSb/Zb4pC81bKNoRaFlAoFJm5fN5IMhn
Fn1m584CtxHNaG0QqVijL+d9VKunmtBuVOgPGhfNR4GhBijqUjWwgf946QKBgQCa
IkWawGRmpQuiF3mwJNXxGPXTXShxkWkb0gC8FBKLCyTmPVbNRModWPG/DV51NAKd
6kGeXuUbs46HOzCgIazV0QpquyemtCpcndDFS/9iFpikQq5+UBvSuc1nFiFUSSOi
nthGTRsQB0lS9BSivgsvXCFHW2YwmrOhfaYQkRfmDwKBgADSog0A1ELjebKaLRrP
aj5f2Zbf058jQVm+C3EdNAksoQRC6KmmQk4RDRe0go1zbwgerHoJDU0BKJO6nAAQ
Lj2poAAyXD3vdAVw7kwjkuFeZS7mZjr9mra44R5WWbs28MyvmURTa02NIsvhtYLs
zAsHL/IwSJpS+hbHPlDMIw3P
-----END PRIVATE KEY-----`;

const config: PrismaticConfig = {
  refreshToken: 'eQ8HVv90Im5wHemNFVpu-VhKoD5odlsPxKIqYI9N2QZyV',
  prismaticUrl: 'https://app.prismatic.io',
  sub: 'example.customer@Voyage SMS Demo-customer.com',
  organization: 'T3JnYW5pemF0aW9uOjEyNjc2ZDU3LTMzOTktNDBlMC1iNGIzLWMzNzIzNDNiOWEzNw==',
  customer: '123456',
  name: 'Voyage SMS Demo',
  signingKey,
  role: 'admin'
};

export default config;
