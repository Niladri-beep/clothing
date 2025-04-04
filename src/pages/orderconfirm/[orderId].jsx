'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ComplexNavbar } from "@/app/_navbar/Navbar";

const OrderConfirmation = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (orderId) {
        try {
          const response = await fetch(`/api/orders/${orderId}`);
          const data = await response.json();
          if (data.success) {
            setOrderDetails(data.order);
          }
        } catch (error) {
          console.error("Error fetching order details:", error);
        }
      }
    };
    fetchOrderDetails();
  }, [orderId]);

  if (!orderDetails) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ComplexNavbar />
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Order Confirmation
        </h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Thank you for your order!
          </h3>
          <p className="text-gray-600 mb-4">
            Your order has been successfully placed and is being processed.
          </p>
          <p className="text-gray-600 mb-4">
            Order ID: <strong>{orderDetails.email || "Loading"}</strong>
          </p>
          <div className="mt-6">
            <button
              onClick={() => router.push('/')}
              className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-500"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
