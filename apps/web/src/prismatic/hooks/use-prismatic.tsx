import prismatic from "@prismatic-io/embedded";
import { useEffect, useState } from "react";

interface UserInfoProps {
  authenticatedUser: {
    customer: {
      allowEmbeddedDesigner: boolean;
    };
  };
}
interface AuthConfig {
  authenticated: boolean;
  token?: string;
  userinfo?: UserInfoProps;
}

const getUserInfo = async (): Promise<UserInfoProps> => {
  const query = `{
    authenticatedUser {
      customer {
        allowEmbeddedDesigner
      }
    }
  }`;
  const result = (await prismatic.graphqlRequest({ query })) as {
    data: UserInfoProps;
  };
  return result.data;
};

/**
 * Authenticate with Prismatic and return an auth token and info about the authenticated user.
 */
const usePrismaticAuth = (): AuthConfig => {
  const [userinfo, setUserinfo] = useState<UserInfoProps>();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [init, setInit] = useState<boolean>(false);
  const [token, setToken] = useState<string>();

  useEffect(() => {
    let mounted = true;
    if (token) {
      const authenticate = async () => {
        if (!init) {
          prismatic.init({
            fontConfiguration: {
              google: {
                families: ["Inter"]
              }
            }
          });
          setInit(true);
        }
        await prismatic.authenticate({ token });

        if (mounted) {
          setAuthenticated(true);
        }
        const result = await getUserInfo();
        if (mounted) {
          setUserinfo(result);
        }
        return () => {
          mounted = false;
        };
      };
      void authenticate();
    } else {
      const getToken = async () => {
        const result = await fetch("/api/prismatic-auth");

        const userToken = (await result.json()) as { token: string };
        setToken(userToken.token);
      };
      void getToken();
    }
  }, [token, init]);

  return {
    authenticated,
    token,
    userinfo,
  };
};

export default usePrismaticAuth;
