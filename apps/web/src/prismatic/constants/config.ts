/**
 * Update the values below with your own Prismatic organization ID, customer external ID, user ID and signing secret.
 * See https://prismatic.io/docs/installing-embedded/ for information on how to get these values.
 */

import { PrismaticConfig } from '../types';

/**
 * Replace this with a value a signing key you get from https://app.prismatic.io/settings/embedded/
 */

const signingKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUcw+ODT4XEfej
Se42dmoM/TgYih++tDGrFGUjg6czrKQ/3LC7axuXurtl59yun5iKwhN1ZLlOZeK4
yL6cVtSIUgxtO1uQvXUy1Ryqk/hznPgMDGJcBD7kCmgt7xuUVWJAit29P5NTS0/A
nNow9ls4MvY4wxkvPZDp4UCWPDgDx1ZVuGGyjs6LjP6r3gIV9XBH46Iu/RCO+YAR
amDIhNwm26arpCbvemj4kiAnAY7jMzl5JqcSYOrdNZJKz852NPthKcORUk0DgTWu
8geg5CqRL4EZlUgI/3PU3x/rDzhjThREO+S1TxKhiylaL1QYCllg9SByKrVURC5J
Glasf59/AgMBAAECggEAJV5viHlB64nM1lCKhDA70wg9QkQm6JkwtZm9OfrusJ3h
fOf/nzY/rGrHuMfssBKh0jA3uMIBucABGjYCcZWUC7rnwOmDy8Q9h+3IuRHlpaja
ciH98p7o+/u4rPN3dFgoEwpB9l1WJ04aheiWLmQdo2CExdYq9U7gt1dKLGd9TEnU
A9XqCHoREa3A+k5BcwBKHg1WNc4DK0yFAANa8ZLknM0B7YCy1bfu3qADKtvANX88
rijyWhXmEkOrKXJNAvDrTf4Q9T4TTN2OjsXE8EEwECYXOisX2crx1uWbF1YI2QF7
WwD1MXqAJXFI275ilROhe5Z6GM1agrW3Ea/B6zYu5QKBgQDF655owm6SUg0rEFo5
B+ILsUy8+Bfv4tnBfDrjftOr98oGQIZ8OxSPriTDcncIMzgIOZLmN+qgZkZG9V/1
SGyE2cCgvUMXc/6a9xOtyYU3/vgaLR9qjjFvdhpDuoU3lSihLEQRMJhip9g0Clbb
zj1GI1yEGpB4SjwGAoPrMgoIXQKBgQDAAwkJfzIcVxAbHHgop4JVXjcOIcO2CfyH
1iTeS+/cSxF9vpEqhgz4jr6tVBPsv/0FS+9UZqqk/b1EWV0ItoRAg458yUos0UCW
Gru2bRTwjHUALaL/XStkP17DTOkvRZRTBOhgIZmu6c9ppWu70jBY8xjkGzeG2OJq
GEFIC2wZiwKBgHgT0GK8e7sYPtb+r85kAveXFPidCGDI39YsmcnF+4Qc7JvIcA9V
BM97FuDhRGhcMsWCsKYuDJJOGpsYaaR10Sj0t5KN4POMs06vUmggmEt1zG6NK79J
D6MRIzQuKH6lZyYJpi5LrlhEfr5r+3CV+sTf1VRsjXP9jdcTlZePH1kdAoGAIA1h
qNAu0URHT/9En6S2wQFlN1qzjOPF3/cDWIhcle2CEfeJzAtshuFtOwnZ+Z9i4Ut3
vCMXQUuKGKrCOP4evZY4ZuRDGZAks+nqg91ZrX4E2e7EUtR+tdFORFPGaTm4NNOQ
5ts1CFnHYd9XSJchsveBpDJW5o+12/gIjbo6ZVkCgYAM9vK6CjIdSu/8DMHm4NqH
c9EBSNwuNl92iFc/BEUpoYLQTXK1/c8CDskDwqma4LmiJirCvXsG65Rb1nXevKX5
zxSj00rKdvJoXnLnB1E+CDVHlY0Wp7wjmu6TUOj3T8AR+u7lXrIeylUEW7zyclV5
BnCF3u5JwpflnIPaiZTOqA==
-----END PRIVATE KEY-----`;

const config: PrismaticConfig = {
  refreshToken: 'xWVRQ5WvlME28b8WdVkg6elYzImldieZE4sDyO0jic-Ab',
  prismaticUrl: 'https://app.prismatic.io',
  sub: 'example.customer@Acme Software Co-customer.com',
  organization: 'T3JnYW5pemF0aW9uOjM3YjY3YmIyLTRlYmYtNGEyMC04ODNjLTY3NjMxOTNjYThlMQ==',
  customer: '123456',
  name: 'Acme Software Co',
  signingKey,
  role: 'admin'
};
export const customers = [
  {
    "id": "Q3VzdG9tZXI6ZDY5ZGI5NjQtMWJhMC00YjIwLWE0YTUtODc5MjQ0OTk5Y2M4",
    "name": "Roy Rogers"
  },
  {
    "id": "Q3VzdG9tZXI6NGNlM2Y5YTQtZjQ1MS00NjFhLWFlMzYtMDJjYWE3N2Y5YWFk",
    "name": "Internal"
  },
  {
    "id": "Q3VzdG9tZXI6ZTJlN2Y2NjgtMjBmZi00MDViLTkzZDItNzU2ODg1NzA0ZDA5",
    "name": "DSU"
  },
  {
    "id": "Q3VzdG9tZXI6NDk2MzljNjYtMWU1YS00MGQ3LTlhMzItMTc5ZGQ4ZTViNDY2",
    "name": "SDSU"
  },
  {
    "id": "Q3VzdG9tZXI6MGI4OTk5ZjEtZWEyNS00ZDU1LTliZDQtMGQ4ZDIxODEyNTY4",
    "name": "Another Software Co"
  },
  {
    "id": "Q3VzdG9tZXI6OWM1MjcyY2QtNmI3Mi00OWJjLThjNDktZDhmODBiNWYzZWQz",
    "name": "Acme Software"
  },
  {
    "id": "Q3VzdG9tZXI6MTU1NzE0MTUtYWY3NS00ODljLWFkODgtN2Q3YzFmYTE2NTky",
    "name": "FTL Rockets"
  },
  {
    "id": "Q3VzdG9tZXI6M2Q1Y2MzMjYtMzYxNS00YWYyLWIwZjItZDRlZGFkMmQ2NjFj",
    "name": "Portland Kickoff"
  }
];

export default config;
