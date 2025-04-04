import { NextResponse } from "next/server";
import mongoDb from "@/lib/ddConn";
import Order from "@/models/Order"; 
export async function POST(req) {
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
        
      } = await req.json();


      console.log(req.json());
  
      // Validate the required fields
      if (!firstName || !lastName || !email || !streetAddress || !city || !state || !postalCode || !country || !paymentMethod) {
        return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
      }
  
      try {
        await mongoDb(); // Ensure DB connection
  
        // Create the order
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
          totalAmount:10,
          createdAt: new Date(),
        });
  
        // Save to database
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
    } 
