import React from "react";

const Page = () => {
  return (
    <div>
      <footer className="bg-gray-100 p-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-4">ABOUT US</h3>
              <ul className="text-sm">
                <li>GunCloth</li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline">
                    Explore our custom designs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline">
                    Learn More
                  </a>
                </li>
                <li>
                  We specialize in custom-designed T-shirts and apparel to
                  express your style.
                </li>
                <li className="mt-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                  <p className="text-xs mt-1">
                    Understand how we handle and protect your personal
                    information.
                  </p>
                </li>
                <li className="mt-4">
                  <a href="#" className="hover:underline">
                    Fraud Protection
                  </a>
                  <p className="text-xs mt-1">
                    Learn about the steps we take to secure your payment
                    information and prevent fraud.
                  </p>
                </li>
                <li className="mt-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                  <p className="text-xs mt-1">
                    Have questions? Reach out to our customer support team for
                    assistance.
                  </p>
                </li>
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-4">FOOTER - POLICIES</h3>
              <ul className="text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Return Your Order
                  </a>
                  <p className="text-xs mt-1">
                    Easily return your order within 30 days if you’re not fully
                    satisfied.
                  </p>
                </li>
                <li className="mt-4">
                  <a href="#" className="hover:underline">
                    Shipping Policy
                  </a>
                  <p className="text-xs mt-1">
                    Learn about our shipping options, estimated delivery times,
                    and international shipping policies.
                  </p>
                </li>
                <li className="mt-4">
                  <a href="#" className="hover:underline">
                    Return, Refund, and Cancellation
                  </a>
                  <p className="text-xs mt-1">
                    Find out how you can request refunds or cancel your order
                    before it ships.
                  </p>
                </li>
                <li className="mt-4">
                  <a href="#" className="hover:underline">
                    Terms and Conditions
                  </a>
                  <p className="text-xs mt-1">
                    Review our terms of service, including usage policies and
                    limitations.
                  </p>
                </li>
              
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-4">FOLLOW US</h3>
              <p className="text-sm mb-4">Stay in touch!</p>
              <div className="flex space-x-4">
                {/* Facebook Icon */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>

                {/* Twitter Icon */}
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634A10.025 10.025 0 0 0 24 4.557z" />
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.608.44 3.675 1.373 2.742 2.306 2.432 3.473 2.375 4.75 2.316 6.03 2.303 6.438 2.303 12s.013 5.97.072 7.25c.058 1.277.368 2.444 1.301 3.377.933.933 2.1 1.243 3.377 1.301 1.28.059 1.688.072 7.25.072s5.97-.013 7.25-.072c1.277-.058 2.444-.368 3.377-1.301.933-.933 1.243-2.1 1.301-3.377.059-1.28.072-1.688.072-7.25s-.013-5.97-.072-7.25c-.058-1.277-.368-2.444-1.301-3.377C19.444.44 18.277.13 17 .072 15.72.013 15.312 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                  </svg>
                </a>

                {/* YouTube Icon */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.121C19.566 3.6 12 3.6 12 3.6s-7.566 0-9.386.465a2.997 2.997 0 0 0-2.112 2.121C0 8.005 0 12 0 12s0 3.995.502 5.814a2.997 2.997 0 0 0 2.112 2.121C4.434 20.4 12 20.4 12 20.4s7.566 0 9.386-.465a2.997 2.997 0 0 0 2.112-2.121C24 15.995 24 12 24 12s0-3.995-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          GunCloth &copy; Powered by Guncloth
        </div>
      </footer>
    </div>
  );
};

export default Page;
