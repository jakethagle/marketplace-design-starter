import { NextResponse } from "next/server";
import { getToken } from "../../../prismatic/utils";

export function GET(): NextResponse {
  const token = getToken();
  return NextResponse.json({ token });
}
