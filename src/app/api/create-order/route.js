// // backend handler for order creation in your Next.js API route

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import mongoDb from "@/lib/ddConn"; 
// import Order from "@/models/Order";

// const razorpay = new Razorpay({
//   key_id: "rzp_test_gcxdUk8HiQNA7I",  
//   key_secret: "m52LFyFhpiceL9Wh2ReD7sPR", 
// });

// export async function POST(req) {
//   try {
//     const { amount, currency = "INR" } = await req.json();

//     const orderOptions = {
//       amount: amount * 100, 
//       currency: currency,
//       receipt: `receipt_${Math.floor(Math.random() * 100000)}`,
//     };
 
//     const order = await razorpay.orders.create(orderOptions);
//     const orderDetails = {
//       amount: order.amount,
//       currency: order.currency,
//       razorpay_order_id: order.id,
//       status: "created", 
//       createdAt: new Date(),
//     };

//     await mongoDb(); 
//     const result = await db.collection("orders").insertOne(orderDetails);

//     return NextResponse.json({
//       success: true,
//       orderId: result.insertedId, 
//       razorpayOrderId: order.id,  
//       amount: order.amount,
//       currency: order.currency,
//     });
//   } catch (error) {
//     console.error("Error creating Razorpay order:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to create Razorpay order" },
//       { status: 500 }
//     );
//   }
// }



// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const {
//       firstName,
//       lastName,
//       email,
//       streetAddress,
//       city,
//       state,
//       postalCode,
//       country,
//       paymentMethod,
//       cartItems,
//       totalAmount,
//     } = req.body;

//     try {
//       await mongoDb(); 
//       const order = {
//         firstName,
//         lastName,
//         email,
//         streetAddress,
//         city,
//         state,
//         postalCode,
//         country,
//         paymentMethod,
//         cartItems,
//         totalAmount,
//         createdAt: new Date(),
//       };

//       const result = await db.collection("orders").insertOne(order);

//       if (result.insertedId) {
//         return res.status(200).json({ success: true, message: "Order created successfully", orderId: result.insertedId });
//       } else {
//         return res.status(400).json({ success: false, message: "Failed to create order" });
//       }
//     } catch (error) {
//       console.error("Error during order creation:", error);
//       return res.status(500).json({ success: false, message: "Internal server error" });
//     }
//   } else {
//     res.status(405).json({ success: false, message: "Method not allowed" });
//   }
// };



// backend handler for order creation in your Next.js API route

import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import mongoDb from "@/lib/ddConn";
import Order from "@/models/Order"; 

const razorpay = new Razorpay({
  key_id: "rzp_test_gcxdUk8HiQNA7I",
  key_secret: "m52LFyFhpiceL9Wh2ReD7sPR",
});

export async function POST(req) {
  try {
    const { amount, currency = "INR" } = await req.json();
    
    const orderOptions = {
      amount: amount * 100,
      currency: currency,
      receipt: `receipt_${Math.floor(Math.random() * 100000)}`,
    };
    
    const razorpayOrder = await razorpay.orders.create(orderOptions);
    
    const orderDetails = new Order({
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      razorpay_order_id: razorpayOrder.id,
      status: "created",
      createdAt: new Date(),
    });
    
    await orderDetails.save();

    return NextResponse.json({
      success: true,
      orderId: orderDetails._id,
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create Razorpay order", error: error.message },
      { status: 500 }
    );
  }
}


// Separate order creation handler for other order data (e.g., Cash on Delivery)
export async function createOrderData(req) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      paymentMethod,
      cartItems,
      totalAmount,
    } = req.body;

    // Check if required fields are provided
    if (!firstName || !lastName || !email || !streetAddress || !city || !state || !postalCode || !country || !paymentMethod) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    try {
      await mongoDb(); // Ensure DB connection

      const order = new Order({
        firstName,
        lastName,
        email,
        streetAddress,
        city,
        state,
        postalCode,
        country,
        paymentMethod,
        items: cartItems,  
        totalAmount,
        createdAt: new Date(),
      });

      await order.save(); 

      return NextResponse.json({
        success: true,
        message: "Order created successfully",
        orderId: order._id,
      });
    } catch (error) {
      console.error("Error during order creation:", error);
      return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
  } else {
    return NextResponse.json(
      { success: false, message: "Method not allowed" },
      { status: 405 }
    );
  }
}
