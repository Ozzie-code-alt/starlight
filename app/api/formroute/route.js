import { connectMongo } from "@/app/lib/db";
import { NextResponse } from "next/server";
import FormModel from "../../models/FormModel"

export async function POST(req) {
  const { name, contactinfo, message } = await req.json();
  const formData = { name, contactinfo, message };
  await connectMongo();
  await FormModel.create(formData)
  return NextResponse.json({ messsage: "Message Sent" }, {status:201});
}
