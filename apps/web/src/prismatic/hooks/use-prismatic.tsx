"use client";
import { useContext } from "react";
import type { Role } from "../types";
import { PrismaticAuthContext } from "../components/prismatic-auth";

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

/**
 * Authenticate with Prismatic and return an auth token and info about the authenticated user.
 */
const usePrismaticAuth = (): AuthConfig => useContext(PrismaticAuthContext);

export default usePrismaticAuth;
