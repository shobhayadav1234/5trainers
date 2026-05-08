import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectDB(); // Database se connect karein
    const { name, email, phone } = await request.json(); // Frontend se data lein

    // Database mein save karein
    const newLead = await Lead.create({ name, email, phone });

    return NextResponse.json({ success: true, message: "Data saved!" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}