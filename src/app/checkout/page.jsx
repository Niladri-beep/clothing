"use client";
import { useState } from "react";
import { ComplexNavbar } from "../_navbar/Navbar";
import Script from "next/script";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePayment = async () => {
    if (paymentMethod === "onlinePayment") {
      try {
        setIsProcessing(true);
        const response = await fetch("/api/create-order", { method: "POST" });
        const data = await response.json();

        const options = {
          key: "rzp_test_gcxdUk8HiQNA7I", 
          amount: data.amount * 100, 
          currency: "INR",
          name: "Clothing",
          description: "Test Transaction",
          order_id: data.orderId, 
          handler: function (response) {
            console.log("Payment Successful", response);
           
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (error) {
        console.error("Payment failed", error);
      } finally {
        setIsProcessing(false);
      }
    } else {
      console.log("Cash on Delivery selected");
      try {
        const orderData = {
          firstName: event.target["first-name"].value,
          lastName: event.target["last-name"].value,
          email: event.target["email"].value,
          streetAddress: event.target["street-address"].value,
          city: event.target["city"].value,
          state: event.target["state"].value,
          postalCode: event.target["postal-code"].value,
          country: event.target["country"].value,
          paymentMethod: "cashOnDelivery", 
        };

        const response = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: totalAmount, currency: "INR" }),
        });
        

        const data = await response.json();
        if (data.success) {
         
          router.push('/orderconfirm'); 
        } else {
          console.log("Error creating order");
        }
      } catch (error) {
        console.error("Error during order submission:", error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  
  return (
    <>
    <ComplexNavbar />
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Complete Your Order
      </h2>

        {/* Personal Information */}
        <div className="space-y-6 border-b border-gray-300 pb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-indigo-600"
              />
            </div>
      
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-6">
          <div>
          <label
            htmlFor="street-address"
            className="block text-sm font-medium text-gray-700"
          >
           Email 
          </label>
          <input
            id="street-address"
            name="email"
            type="text"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-indigo-600"
          />
        </div>
          </div>



          {/* Address Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Street Address */}
            <div>
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                id="street-address"
                name="street-address"
                type="text"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* State */}
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* Postal Code */}
            <div>
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Postal Code
              </label>
              <input
                id="postal-code"
                name="postal-code"
                type="text"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Country */}
          <div className="mt-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label
              htmlFor="house-number"
              className="block text-sm font-medium text-gray-700"
            >
              House Number
            </label>
            <input
              id="house-number"
              name="house-number"
              type="text"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        </div>

        {/* Payment Method */}
       <div className="space-y-6 border-b border-gray-300 py-6">
          <h3 className="text-xl font-semibold text-gray-700">Payment Method</h3>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={paymentMethod === "cashOnDelivery"}
                onChange={() => handlePaymentMethodChange("cashOnDelivery")}
                className="text-indigo-600 focus:ring-indigo-600"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Cash on Delivery
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="onlinePayment"
                checked={paymentMethod === "onlinePayment"}
                onChange={() => handlePaymentMethodChange("onlinePayment")}
                className="text-indigo-600 focus:ring-indigo-600"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Online Payment
              </span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {paymentMethod === "cashOnDelivery"
              ? "Confirm Order"
              : "Proceed to Pay"}
          </button>
        </div>
      </form>
    </>
  );
}
