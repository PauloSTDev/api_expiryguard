import { NextResponse } from "next/server"

export async  function GET() {
  const timeNow = new Date();
  return NextResponse.json({ hello: 'Hello World', date: timeNow.toLocaleString(),})
  }