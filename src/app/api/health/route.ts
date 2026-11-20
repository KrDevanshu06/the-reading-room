
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json({
      success: true,
      database: "connected",
      application: "The Reading Room",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        database: "disconnected",
      },
      { status: 503 },
    );
  }
}
