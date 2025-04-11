import Connection from "@/lib/db/connection";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const json = await request.json();

  try {

    const [results] = await Connection.query(
      "SELECT pass FROM login WHERE email = ?",
      [json.email]
    );

    if (results[0].pass) { 

      return NextResponse.json({ signIn: true }, { status: 200 }); 
    }
  } catch (err) {

    return NextResponse.json({ signIn: false }, { status: 200 }); 
  };
};