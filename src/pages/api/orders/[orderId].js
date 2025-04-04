
import mongoDb from "@/lib/ddConn";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  await mongoDb();

  // Ensure only GET requests are processed
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  // Extract `orderId` from request URL params or query
  const { orderId } = req.query;  // In Next.js API routes, use `req.query` to access parameters

  console.log("Received orderId:", orderId);

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    return res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Error fetching order details:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}
