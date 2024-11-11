import { request } from "http"
import { NextResponse } from "next/server"

export async  function GET() {
  return NextResponse.json({ hello: 'Hello World'})
}
export async  function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json(
        {data, message: 'Data received'}
    )
  }