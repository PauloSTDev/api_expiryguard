import { NextResponse } from "next/server"

export async  function GET() {
  const timeNow = new Date();
  return NextResponse.json({ hello: 'Olá, envie seus medicamentos agora mesmo'})
  }