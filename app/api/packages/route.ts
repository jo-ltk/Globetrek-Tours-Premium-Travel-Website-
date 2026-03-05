import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Packages API placeholder" }, { status: 200 });
}
