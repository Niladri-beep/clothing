// pages/api/verifyToken.js
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  const authorizationHeader = req.headers.get("Authorization");

  // Check if the Authorization header exists and extract the token
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return NextResponse.json({ isValid: false }, { status: 400 });
  }

  const token = authorizationHeader.split(" ")[1];
  console.log("backend token: " + token);

  try {
    const decoded = jwt.verify(token, "Hello");
    console.log(decoded);
    return NextResponse.json({ isValid: true, decoded }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ isValid: false }, { status: 401 });
  }
}
