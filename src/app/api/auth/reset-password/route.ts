export async function POST(request: Request) {
  return Response.json({ data: await request.json() })
}
