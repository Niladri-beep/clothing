// import { NextRequest, NextResponse } from 'next/server';
// import crypto from 'crypto';
// import user from '@/models/user';
// import course from '';

// const generatedSignature = (razorpayOrderId, razorpayPaymentId) => {
//   const keySecret = "2ZxuxUnbMuIvBPz0avekYoh6";
//   if (!keySecret) {
//     throw new Error(
//       'Razorpay key secret is not defined in environment variables.'
//     );
//   }
//   const sig = crypto
//     .createHmac('sha256', keySecret)
//     .update(razorpayOrderId + '|' + razorpayPaymentId)
//     .digest('hex');
//   return sig;
// };

// export async function POST(request) {
//   const { orderCreationId, razorpayPaymentId, razorpaySignature,courseId,userId } = await request.json();
//   console.log(orderCreationId)
//   console.log(razorpayPaymentId)
//   console.log(razorpaySignature)
//   const signature = generatedSignature(orderCreationId, razorpayPaymentId);
//   if (signature !== razorpaySignature) {
//     return NextResponse.json(
//       { message: 'payment verification failed', isOk: false },
//       { status: 400 }
//     );
//   }

//   console.log(userId)

//   const updatedUser = await user.findOneAndUpdate(
//     {email:userId},
//     { $push: { courses: courseId } }, // Correctly use $push operator
//     { new: true } // Return the updated document
//   );

//   return NextResponse.json(
//     { message: 'Payment verified successfully and course added', updatedUser, isOk: true },
//     { status: 200 }
//   );
//   return NextResponse.json(
//     { message: 'payment verified successfully', isOk: true },
//     { status: 200 }
//   );
// }
