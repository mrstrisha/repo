// import { NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb";

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, email, subject, message } = body;

//     if (![name, email, subject, message].every((value) => typeof value === "string" && value.trim())) {
//       return NextResponse.json({ message: "Please complete every field." }, { status: 400 });
//     }

//     const cleanEmail = email.trim().toLowerCase();
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
//       return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
//     }

//     if (name.length > 100 || subject.length > 160 || message.length > 5000) {
//       return NextResponse.json({ message: "One or more fields are too long." }, { status: 400 });
//     }

//     const client = await clientPromise;
//     const db = client.db(process.env.MONGODB_DB || "portfolio_db");
//     await db.collection("portfolio_messages").insertOne({
//       name: name.trim(),
//       email: cleanEmail,
//       subject: subject.trim(),
//       message: message.trim(),
//       createdAt: new Date(),
//     });

//     return NextResponse.json({ message: "Your message has been sent successfully." }, { status: 201 });
//   } catch (error) {
//     console.error("Contact form error:", error);
//     return NextResponse.json({ message: "Unable to send your message right now." }, { status: 500 });
//   }
// }


import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
export const { POST, GET } = toNextJsHandler(auth);