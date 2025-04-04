import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const CartComponent = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const getCartItemCount = () => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartItemCount(itemCount);
    }
  };

  useEffect(() => {
    getCartItemCount();

    if (typeof window !== 'undefined') {
      window.addEventListener("storage", getCartItemCount);
      return () => {
        window.removeEventListener("storage", getCartItemCount);
      };
    }
  }, []);

  return (
    <div>
      <Link
        href="/cart"
        className="fixed bottom-8 right-8 bg-indigo-600 dark:bg-indigo-400 p-4 rounded-full text-white dark:text-black shadow-lg hover:bg-indigo-700 hover:dark:bg-indigo-500 transition-colors duration-300 z-50 backdrop-blur-lg bg-opacity-80"
        style={{ zIndex: 50 }}
      >
        <div className="relative">
          <ShoppingCartIcon className="h-6 w-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartComponent;
