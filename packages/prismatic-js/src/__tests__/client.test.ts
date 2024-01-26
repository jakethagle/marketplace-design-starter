import { createPrismaticClient } from "../index";
import { getAccessToken, getMarketplaceUserToken } from "../util/auth";
// REFRESH TOKEN for Admin Org User API Access

describe("client", () => {
  it("should get an access token", async () => {
    const { access_token: accessToken } = await getAccessToken("REFRESH_TOKEN");
    expect(accessToken).toBeDefined();
  });

  it("should create an admin client", async () => {
    const { access_token: accessToken } = await getAccessToken("REFRESH_TOKEN");

    const client = createPrismaticClient({ accessToken });

    const result = await client.query({
      __name: "CurrentUserInfo",
      authenticatedUser: { __scalar: true },
    });

    // eslint-disable-next-line no-console -- test
    console.log(JSON.stringify(result));
    expect(client).toBeDefined();
  });
  it("should create an embedded client", async () => {
    // const { access_token: accessToken } = await (REFRESH_TOKEN);
    const { access_token: accessToken } = await getMarketplaceUserToken(
      {
        customer: "123456",
        externalId: "098098091823094809128349018234",
        name: "jake.hagle+test-customer111",
        organization: "ORGANIZATION_ID",
        role: "admin",
        sub: "098098091823094809128349018234",
      },
      "PRIVATE_KEY"
    );

    const client = createPrismaticClient({ accessToken });

    const result = await client.query({
      __name: "CurrentUserInfo",
      authenticatedUser: { __scalar: true },
    });
    // eslint-disable-next-line no-console -- testing
    console.log(JSON.stringify(result));
    expect(result).toBeDefined();
  });
});
