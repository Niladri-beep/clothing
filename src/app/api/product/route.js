import mongoDb from "@/lib/ddConn";
import product from "@/models/productModal";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoDb();
  try {
    const data = await product.find({});
    console.log(data);
    return NextResponse.json({
      message: "Data sent successfully",
      data: data,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 401 }
    );
  }
}
