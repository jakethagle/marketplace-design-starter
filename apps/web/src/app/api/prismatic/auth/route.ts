import { getRole } from "@/lib/server";
import { NextResponse } from "next/server";
import { getToken } from "@/prismatic/utils";

export async function GET(): Promise<NextResponse> {
  const role = await getRole();
  const token = getToken(role);

  return NextResponse.json({ token });
}
