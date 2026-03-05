import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Chatbot API placeholder" }, { status: 200 });
}
