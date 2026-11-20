export async function GET() {
  return Response.json([])
}

export async function POST(request: Request) {
  return Response.json({ data: await request.json() }, { status: 201 })
}
