"use client";
import { Role } from "@/prismatic/types";

export function getRoleFromCookie(): Role {
  if (!document.cookie) {
    return Role.Admin;
  }
  const cookieRole = document.cookie
    .split("; ")
    .find((row) => row.startsWith("role="));
  if (cookieRole) {
    return cookieRole.split("=")[1] as Role;
  }

  return Role.Admin;
}
