import React from 'react';
import { ComplexNavbar } from '../_navbar/Navbar';
import Page from '../_footer/Page';

const orders = [
  {
    orderId: '91256800100',
    title: 'Purchase Item 1',
    price: 150.00,
    imageUrl: 'https://pagedone.io/asset/uploads/1705403665.png',
    review: '',
  },
  {
    orderId: '91256800101',
    title: 'Purchase Item 2',
    price: 120.00,
    imageUrl: 'https://pagedone.io/asset/uploads/1705403666.png',
    review: '',
  },
  // Add more orders as needed
];

const OrderHistory = () => {
  return (
    <>
    <ComplexNavbar />
    <section className="py-24 relative">
  <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
    {orders.map((order, index) => (
      <div key={order.orderId} className="grid grid-cols-12 mb-16">
        <div className="col-span-12 md:col-span-8 md:pr-8 md:border-r border-gray-200">
          <div className="flex max-sm:flex-col items-center justify-between mb-3">
            <h3 className="font-manrope font-bold text-2xl leading-9 text-black">{order.title}</h3>
            <p className="font-medium text-lg leading-8 text-gray-500">Order # {order.orderId}</p>
          </div>
          <div className="flex max-sm:flex-col items-center justify-between mb-12">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black">${order.price}</h2>
            <p className="font-semibold text-xl leading-8 text-indigo-600 cursor-pointer">Details</p>
          </div>
          <div className="img-box w-full max-sm:mx-auto mb-12">
            <img src={order.imageUrl} alt={order.title} className="rounded-xl object-cover" />
          </div>
          <div className="flex items-center max-sm:flex-col md:justify-end gap-4">
            <button className="rounded-full px-8 py-3 bg-indigo-600 shadow-sm shadow-transparent text-white font-semibold text-base transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
              Buy Again
            </button>
            <button className="rounded-full px-8 py-3 bg-white shadow-sm shadow-transparent text-gray-900 border border-gray-300 font-semibold text-base transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-100 hover:border-gray-400">
              View Product
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:pl-8 max-md:mt-7 flex flex-col items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-5 max-md:max-w-sm max-sm:mx-auto">
              <h3 className="font-manrope font-bold text-2xl leading-9 text-black">Write a review</h3>
              <svg
                className="cursor-pointer"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0261 14.2259L25.5755 25.7753M14.0261 25.7753L25.5755 14.2259"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-center w-full max-w-sm max-sm:mx-auto">
              <textarea
                name="review"
                id="review"
                cols="30"
                rows="10"
                className="py-3 px-4 mb-16 rounded-2xl border border-gray-300 w-full h-[283px] resize-none font-normal text-base leading-7 placeholder:text-gray-400 text-gray-900 outline-0 max-sm:mx-auto"
                placeholder="Enter a description..."
                value={order.review}
              ></textarea>
              <button className="rounded-full py-3 px-5 text-center bg-indigo-600 text-white font-semibold text-base w-full max-w-sm shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
                Post Review
              </button>
            </div>
          </div>
     
        </div>
        
        {/* Add a line after each order */}
       {/* Add a line after each order */}
       <hr className="my-8 border-t-2 border-gray-800 w-full" />

      </div>
    ))}
  </div>
</section>
<Page />
    </>
  );
};

export default OrderHistory;
