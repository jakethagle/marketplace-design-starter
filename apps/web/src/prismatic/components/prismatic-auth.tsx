"use client";
import { setRole } from "@/lib/actions";
import { getRoleFromCookie } from "@/lib/client";
import prismatic from "@prismatic-io/embedded";
import { Role } from "@/prismatic/types";
import { createContext, useCallback, useEffect, useState } from "react";

interface UserInfoProps {
  authenticatedUser: {
    customer: {
      allowEmbeddedDesigner: boolean;
    };
  };
}

interface AuthConfig {
  authenticated: boolean;
  handleSetRole: (newRole: Role) => Promise<void>;
  role?: Role;
  token?: string;
  userinfo?: UserInfoProps;
  loading: boolean;
}

export const PrismaticAuthContext = createContext<AuthConfig>({
  authenticated: false,
  handleSetRole: () => Promise.resolve(),
  role: undefined,
  loading: false,
  token: undefined,
  userinfo: undefined,
});

export const PrismaticAuthProvider = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [userinfo, setUserinfo] = useState<UserInfoProps | undefined>();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [init, setInit] = useState<boolean>(false);
  const [activeRole, setActiveRole] = useState<Role>(Role.Admin);
  const [token, setToken] = useState<string>();

  const getUserInfo = useCallback(async (): Promise<
    UserInfoProps | undefined
  > => {
    const query = `{
    authenticatedUser {
      customer {
        allowEmbeddedDesigner
      }
    }
  }`;
    if (!init) {
      return;
    }

    if (authenticated && !userinfo) {
      const result = (await prismatic.graphqlRequest({ query })) as {
        data: UserInfoProps;
      };
      return result.data;
    }
  }, [authenticated, activeRole, init, userinfo]);

  useEffect(() => {
    const initializePrismatic = (): void => {
      if (!init) {
        prismatic.init({
          fontConfiguration: {
            google: {
              families: ["Inter"],
            },
          },
        });
        setInit(true);
      }
    };

    if (!init) {
      setLoading(true);
      void initializePrismatic();
    }
  }, [token, loading, authenticated, init]);

  useEffect(() => {
    const getToken = async () => {
      const role = getRoleFromCookie();
      setActiveRole(role);
      const result = await fetch(`/api/prismatic/auth`);
      const userToken = (await result.json()) as { token: string };

      setToken(userToken.token);
      await prismatic.authenticate({ token: userToken.token });
      setLoading(false);
      setAuthenticated(true);
    };

    if (!loading && !authenticated) {
      void getToken();
    }
    if (authenticated && token && !loading) {
      getUserInfo()
        .then((data) => {
          setUserinfo(data);
          setRole(activeRole);
        })
        .catch((error) => {
          console.error(error);
        })
        .then(() => {});
    }
  }, [authenticated, loading, activeRole, token]);

  const handleSetRole = async (newRole: Role): Promise<void> => {
    if (newRole !== activeRole) {
      await setRole(newRole);
      setAuthenticated(false);
    }
  };
  return (
    <PrismaticAuthContext.Provider
      value={{
        token,
        authenticated,
        loading,
        userinfo,
        handleSetRole,
        role: activeRole,
      }}
    >
      {children}
    </PrismaticAuthContext.Provider>
  );
};
