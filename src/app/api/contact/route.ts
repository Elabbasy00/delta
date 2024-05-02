import {
  generateEmailContent,
  mailOptions,
  transporter,
} from "@/src/server/nodemailer";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  if (
    !data ||
    !data.first_name ||
    !data.last_name ||
    !data.phone_number ||
    !data.email ||
    !data.message
  ) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }
  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: "New Message",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
  return NextResponse.json({ message: "Bad Requeaaaaast" }, { status: 400 });
}
