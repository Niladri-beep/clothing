// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const HomeProduct = () => {
//   const [products, setprduct] = useState([]);
//   const fetchData = async () => {
//     try {
//       const res = await fetch("/api/product");
//       const data = await res.json();
//       console.log(data);
//       setprduct(data.data);
//     } catch (error) {
//       console.log("Error" + error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2">
//     {products.length > 0
//       ? products.map((product) => (
//           <div
//             key={product._id}
//             className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md w-full max-w-sm"
//           >
//             <a
//               className="relative mx-3 mt-3 flex h-64 w-48 overflow-hidden rounded-xl shadow-lg"
//               href="#"
//             >
//               <img
//                 className="object-cover w-full h-full"
//                 src={product.image}
//                 alt="product image"
//                 style={{
//                   minHeight: "100%", 
//                   minWidth: "100%", 
//                 }}
//               />
//               <span className="absolute top-2 left-2 rounded-full bg-black bg-opacity-70 px-3 py-1 text-center text-sm font-medium text-white">
//                 {product.durdiscountPrice}% 
//               </span>
//             </a>
  
//             <div className="mt-4 px-5 pb-5">
//               <a href="#">
//                 <h5 className="text-xl tracking-tight text-slate-900">
//                   {product.productName}
//                 </h5>
//               </a>
//               <div className="mt-2 mb-5 flex items-center justify-between">
//                 <p>
//                   <span className="text-3xl font-bold text-slate-900">
//                     Rs. {product.discountPrice}
//                   </span>
//                   <span className="text-sm text-slate-900 line-through">
//                     Rs. {product.originalPrice}
//                   </span>
//                 </p>
//                 <div className="flex items-center">
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <svg
//                       key={index}
//                       aria-hidden="true"
//                       className={`h-5 w-5 ${
//                         index < product.ratings ? "text-yellow-300" : "text-gray-300"
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                   ))}
//                   <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
//                     {product.ratings}
//                   </span>
//                 </div>
//               </div>
  
//               {/* Stock Section */}
//               <div className="mb-2">
//                 <span className="text-sm font-medium text-gray-600">Stock:</span>
//                 <span className="ml-2 text-sm text-slate-900">
//                   {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
//                 </span>
//               </div>
  
//               {/* Color Section */}
//               <div className="mb-4">
//                 <span className="text-sm font-medium text-gray-600">Color:</span>
//                 <div className="flex mt-1">
//                   Black
//                 </div>
//               </div>
  
//               <Link
//                 href="#"
//                 className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2 h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//                 Add to cart
//               </Link>
//             </div>
//           </div>
//         ))
//       : <p className="text-center text-gray-500">No products available</p>}
//   </div>
  
//   );
// };

// export default HomeProduct;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// Modal Component
// Modal Component
// Modal Component
const ProductModal = ({
  product,
  isOpen,
  onClose,
  addToCart,
  quantity,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const handleAddToCart = () => {
    addToCart(product, quantity); 
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-tra bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:w-80 md:w-[500px] lg:w-[900px] xl:w-[900px] max-w-lg h-auto bg-white rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          &times;
        </button>
        <div className="flex">
          <img
            className="w-1/3 rounded-xl"
            src={product.image}
            alt={product.productName}
          />
          <div className="ml-6">
            <h2 className="text-xl font-semibold">{product.productName}</h2>
            <p className="text-lg font-bold text-gray-700 mt-2">
              Rs. {product.discountPrice}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-2 bg-gray-200 text-lg font-semibold text-gray-700 rounded-full"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-2 bg-gray-200 text-lg font-semibold text-gray-700 rounded-full"
              >
                +
              </button>
            </div>

            {/* Additional Product Details */}
            <div className="mt-4">
              <p className="text-sm text-gray-600">Description:</p>
              <p className="text-sm text-slate-900">{product.description}</p>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">Brand:</p>
              <p className="text-sm text-slate-900">{product.brand}</p>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">Ratings:</p>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className={`h-5 w-5 ${
                      index < product.ratings ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-slate-900">
                  {product.ratings}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">Stock:</p>
              <p className="text-sm text-slate-900">
                {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-pink-500 text-white py-2 px-4 rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




const HomeProduct = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1); 

  const fetchData = async () => {
    try {
      const res = await fetch("/api/product");
      const data = await res.json();
      setProducts(data.data);
    } catch (error) {
      console.log("Error" + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setQuantity(1);  
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const increaseQuantity = () => {
    if (quantity < selectedProduct.stock) setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <a
              className="relative mx-3 mt-3 flex h-25 w-48 overflow-hidden rounded-xl shadow-lg"
              onClick={() => openModal(product)}  
            >
              <img
                className="object-cover w-full h-full rounded-xl"
                src={product.image}
                alt="product image"
              />
              <span className="absolute top-2 left-2 rounded-full bg-pink-500 bg-opacity-80 px-3 py-1 text-center text-sm font-medium text-white">
                {product.discountPrice}%
              </span>
            </a>

            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-2xl font-semibold text-slate-900 hover:text-pink-500 transition duration-200">
                  {product.productName}
                </h5>
              </a>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-3xl font-bold text-slate-900">
                  Rs. {product.discountPrice}
                </p>
                <span className="text-sm text-slate-600 line-through">
                  Rs. {product.originalPrice}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className={`h-5 w-5 ${index < product.ratings ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-slate-900">
                  {product.ratings}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-sm font-medium text-gray-600">Stock:</span>
                <span className="ml-2 text-sm text-slate-900">
                  {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
                </span>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openModal(product)}  
                  className="w-full sm:w-auto flex items-center justify-center rounded-lg bg-pink-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-300"
                >
                  Add Quickly
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        addToCart={addToCart}
        quantity={quantity}
        setQuantity={setQuantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
};


export default HomeProduct;
