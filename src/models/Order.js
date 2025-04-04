// // models/Order.js
// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   streetAddress: String,
//   city: String,
//   state: String,
//   postalCode: String,
//   country: String,
//   houseNumber: String,
//   paymentMethod: {
//     type: String,
//     enum: ['cashOnDelivery', 'onlinePayment'],
//     required: true,
//   },
//   items: [
//     {
//       productId: String,
//       quantity: Number,
//       price: Number,
//     },
//   ],
//   totalAmount: Number,
//   isPaid: { type: Boolean, default: false },
//   paymentId: String,
// }, { timestamps: true });

// module.exports = mongoose.model('Order', orderSchema);



import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  razorpay_order_id: { type: String, required: true },
  status: { type: String, default: "created" },
  createdAt: { type: Date, default: Date.now },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  items: { type: Array, default: [] }, 
  totalAmount: { type: Number, required: true },
});


const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
