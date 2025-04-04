"use client";

import React, { useEffect, useState } from "react";
import { ComplexNavbar } from "../_navbar/Navbar";
import { useRouter } from "next/navigation";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigation = useRouter();
  useEffect(() => {
    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update state after removal
  };

  // Function to increase the quantity of an item
  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update state after increase
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item._id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update state after decrease
  };

  // Calculate total number of items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.discountPrice,
    0
  );



  const originalPrice = 1000;

  const totalOrderPrice = 1000;
  const savings = 50; 
  const storePickupFee = 20; 
  const tax = totalPrice * 0.1;

  const getAuthToken = () => {
    // Fetch all cookies as a string
    const cookies = document.cookie;

    // Split cookies string into individual cookies
    const cookieArray = cookies.split("; ");

    // Find the authToken cookie by filtering the array
    const authToken = cookieArray.find((cookie) =>
      cookie.startsWith("authToken=")
    );

    if (authToken) {
      const token = authToken.split("=")[1];
      console.log(token); 
      return token;
    }

    console.log("No authToken found");
    return null;
  };

  const checkUserAuthenticated = async () => {
    const token = getAuthToken();
    if (!token) {
      return false;
    }
    const checkValidToken = await fetch("/api/utils", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await checkValidToken.json();
    console.log(data)
    return data.isValid;
  };
  
   const handleBuy = async () => {
    const isAuthenticated = await checkUserAuthenticated();
    if (!isAuthenticated) {
      navigation.push("/register");
      return;
    }
    navigation.push("/checkout");
  };
  

  return (
    <>
      <ComplexNavbar />
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          {/* Total items at the top */}
          <div className="mt-4 flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              Total Items: {totalItems}
            </div>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row lg:items-start lg:gap-8">
            {/* Cart Items Section */}
            <div className="mx-auto w-full lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              type="button"
                              className="counter-button"
                              onClick={() => decreaseQuantity(item._id)}
                            >
                              <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <input
                              type="text"
                              className="w-10 text-center text-sm font-medium text-gray-900 dark:text-white"
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              type="button"
                              className="counter-button"
                              onClick={() => increaseQuantity(item._id)}
                            >
                              <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="text-end md:w-32">
                            <p className="text-base font-bold text-gray-900 dark:text-white">
                              Rs. {item.discountPrice}
                            </p>
                          </div>
                        </div>
                        <a href="#" className="w-20 shrink-0 md:order-1">
                          <img
                            className="h-20 w-20 dark:hidden"
                            src={item.image}
                            alt={item.productName}
                          />
                          <img
                            className="hidden h-20 w-20 dark:block"
                            src={item.image}
                            alt={item.productName}
                          />
                        </a>
                        <div className="w-full flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a
                            href="#"
                            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                          >
                            {item.productName}
                          </a>
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            onClick={() => removeFromCart(item._id)}
                          >
                            <svg
                              className="mr-1.5 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L17.94 6M18 18L6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    Your cart is empty
                  </p>
                )}
              </div>

              {/* Total Price Button */}
              <div className="mt-6 flex justify-center">
                <button
                  className="w-full max-w-xs bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none"
                  onClick={handleBuy}
                >
                  Buy Now - Total Price: Rs. {totalPrice}
                </button>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="mx-auto mt-6 max-w-lg flex-1 space-y-6 lg:mt-0 lg:w-full lg:max-w-xs">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order Summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs. {originalPrice}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -Rs. {savings}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs. {storePickupFee}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs. {tax}
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      Rs. {totalOrderPrice}
                    </dd>
                  </dl>
                </div>

                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Checkout
                </a>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    or
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Voucher Section */}
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Do you have a voucher or gift card?
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter code"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Apply Voucher
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="hidden xl:mt-8 xl:block">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
              People also bought
            </h3>
            <div class="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
              <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <a href="#" class="overflow-hidden rounded">
                  <img
                    class="mx-auto h-44 w-44 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                    alt="imac image"
                  />
                  <img
                    class="mx-auto hidden h-44 w-44 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                    alt="imac image"
                  />
                </a>
                <div>
                  <a
                    href="#"
                    class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                  >
                    iMac 27”
                  </a>
                  <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    This generation has some improvements, including a longer
                    continuous battery life.
                  </p>
                </div>
                <div>
                  <p class="text-lg font-bold text-gray-900 dark:text-white">
                    <span class="line-through"> $399,99 </span>
                  </p>
                  <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                    $299
                  </p>
                </div>
                <div class="mt-6 flex items-center gap-2.5">
                  <button
                    data-tooltip-target="favourites-tooltip-1"
                    type="button"
                    class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="favourites-tooltip-1"
                    role="tooltip"
                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  >
                    Add to favourites
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <button
                    type="button"
                    class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      class="-ms-2 me-2 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
              <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <a href="#" class="overflow-hidden rounded">
                  <img
                    class="mx-auto h-44 w-44 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                    alt="imac image"
                  />
                  <img
                    class="mx-auto hidden h-44 w-44 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                    alt="imac image"
                  />
                </a>
                <div>
                  <a
                    href="#"
                    class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                  >
                    Playstation 5
                  </a>
                  <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    This generation has some improvements, including a longer
                    continuous battery life.
                  </p>
                </div>
                <div>
                  <p class="text-lg font-bold text-gray-900 dark:text-white">
                    <span class="line-through"> $799,99 </span>
                  </p>
                  <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                    $499
                  </p>
                </div>
                <div class="mt-6 flex items-center gap-2.5">
                  <button
                    data-tooltip-target="favourites-tooltip-2"
                    type="button"
                    class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="favourites-tooltip-2"
                    role="tooltip"
                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  >
                    Add to favourites
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <button
                    type="button"
                    class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      class="-ms-2 me-2 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
              <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <a href="#" class="overflow-hidden rounded">
                  <img
                    class="mx-auto h-44 w-44 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                    alt="imac image"
                  />
                  <img
                    class="mx-auto hidden h-44 w-44 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                    alt="imac image"
                  />
                </a>
                <div>
                  <a
                    href="#"
                    class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                  >
                    Apple Watch Series 8
                  </a>
                  <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    This generation has some improvements, including a longer
                    continuous battery life.
                  </p>
                </div>
                <div>
                  <p class="text-lg font-bold text-gray-900 dark:text-white">
                    <span class="line-through"> $1799,99 </span>
                  </p>
                  <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                    $1199
                  </p>
                </div>
                <div class="mt-6 flex items-center gap-2.5">
                  <button
                    data-tooltip-target="favourites-tooltip-3"
                    type="button"
                    class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="favourites-tooltip-3"
                    role="tooltip"
                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  >
                    Add to favourites
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <button
                    type="button"
                    class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      class="-ms-2 me-2 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
