"use client";
import { setRole } from "@/lib/actions";
import { getRoleFromCookie } from "@/lib/client";
import prismatic from "@prismatic-io/embedded";
import { useEffect, useState } from "react";
import type { Role } from "../types";

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
  const [activeRole, setActiveRole] = useState<Role>();

  useEffect(() => {
    if (authenticated || !activeRole) {
      const role = getRoleFromCookie();
      setActiveRole(role);
    }
  }, [activeRole, authenticated]);

  const handleSetRole = async (newRole: Role): Promise<void> => {
    if (newRole !== activeRole) {
      await setRole(newRole);
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    const getToken = async () => {
      const result = await fetch(`/api/prismatic-auth`);
      const userToken = (await result.json()) as { token: string };
      setToken(userToken.token);
    };

    const authenticate = async (): Promise<void> => {
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

      if (!token) return;

      await prismatic.authenticate({ token });
      setAuthenticated(true);
      setActiveRole(getRoleFromCookie());
      const result = await getUserInfo();
      setUserinfo(result);
    };
    if (token && !authenticated) {
      void authenticate();
    } else if (!token || !authenticated) {
      void getToken();
    }
  }, [token, init, authenticated, activeRole]);

  return {
    authenticated,
    token,
    userinfo,
    handleSetRole,
    role: activeRole,
  };
};

export default usePrismaticAuth;
