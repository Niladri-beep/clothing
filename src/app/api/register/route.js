
import { NextResponse } from "next/server";
import user from "@/models/user";
import bcryptjs from "bcryptjs";
import mongoDb from "@/lib/ddConn";

export async function POST(req) {
  try {
    const { email, address, name, password } = await req.json();
    console.log(email)
    await mongoDb()
    const checkEmail = await user.findOne({ email: email });
    if (checkEmail) {
      return NextResponse.json(
        { message: "User already exist" },
        { status: 401 }
      );
    }
    const hassPassword = await bcryptjs.hash(password, 10);
    const data = new user({
      name,
      email,
      password: hassPassword,
      address,
    });
    await data.save();
    return NextResponse.json(
      { message: "Register Succesfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 401 }
    );
  }
}
