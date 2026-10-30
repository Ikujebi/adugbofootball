
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      database: mongoose.connection.name,
      status: "connected",
    });
  } catch (error: unknown) {
    console.error("Database health check failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        status: "disconnected",
      },
      { status: 503 }
    );
  }
}
