import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import User from "@/models/user"; // Assuming you have a User model set up for MongoDB
import mongoDb from "@/lib/ddConn"; // Ensure your MongoDB connection helper is correct

// Named export for POST method
export async function POST(req, res) {
  const { lemail, lpass } = await req.json(); // use await req.json() to parse body in the App Router

  console.log("Received email:", lemail);
  console.log("Received password:", lpass);

  await mongoDb();

  try {
    // Fetch user from the database
    const user1 = await User.findOne({ email:lemail });

    // Check if user exists
    if (!user1) {
      console.log("No user found with this email");
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    console.log("User found:", user1.email);

    // Check password match
    const isMatch = await bcrypt.compare(lpass, user1.password);
    if (!isMatch) {
      console.log("Password does not match");
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    console.log("Password matches");

    // Generate JWT token
    const token = jwt.sign({ email: user1.email },"Hello", {
      expiresIn: "1h",
    });

    console.log("Generated JWT token:", token);

  //  localStorage.setItem("token",token)
    // Set token in a httpOnly cookie
    const cookie = serialize("authToken", token, {
      httpOnly: false,
      maxAge: 60 * 60, // 1 hour expiration
      path: "/",
    });

    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
      },
    });
  } catch (error) {
    console.error("Error during login process:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
