"use client";
import React, { useState } from "react";
import Link from "next/link";
import Adminnavbar from "../app/_navbar/Adminnav";
import Image from "next/image";
import { FiX, FiMenu } from "react-icons/fi"; // Icons for open/close

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Adminnavbar />

      {/* Sidebar Toggle Button for small screens */}
      <div className="lg:hidden p-4 fixed top-4 left-4 z-50">
        {" "}
        {/* Add fixed and z-index for better control */}
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FiX color="white" /> : <FiMenu color="white" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 bg-black w-[350px] h-full border-r border-gray-700 dark:bg-black dark:border-neutral-700`}
      >
        <div className="relative flex flex-col h-full max-h-full">
          {/* Sidebar Header with Logo */}
          <div className="px-6 pt-4">
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Wisemapping"
            >
              <Image
                src="/logo.png"
                alt="Wisemapping Logo"
                height={100}
                width={100}
                className="h-20 w-20"
              />
            </a>
          </div>

          {/* Sidebar Links */}
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-500">
            <nav className="hs-accordion-group p-8 w-full flex flex-col flex-wrap">
              <ul className="flex flex-col space-y-5 p-10 m-5">
                <li>
                  <Link
                    className="p-2 flex items-center gap-x-3.5 text-sm text-white hover:bg-gray-800 rounded-lg focus:outline-none focus:bg-gray-800"
                    href="/admin"
                  >
                    <svg
                      className="shrink-0 size-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="p-2 flex items-center gap-x-3.5 text-sm text-white hover:bg-gray-800 rounded-lg focus:outline-none focus:bg-gray-800"
                    href="/adminuser"
                  >
                    <svg
                      className="shrink-0 size-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Users
                  </Link>
                </li>

                <li>
                  <Link
                    className="p-2 flex items-center gap-x-3.5 text-sm text-white hover:bg-gray-800 rounded-lg focus:outline-none focus:bg-gray-800"
                    href="/admincontact"
                  >
                    <svg
                      className="shrink-0 size-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    className="p-2 flex items-center gap-x-3.5 text-sm text-white hover:bg-gray-800 rounded-lg focus:outline-none focus:bg-gray-800"
                    href="/admincourse"
                  >
                    <svg
                      className="shrink-0 size-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    All Courses
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Dark Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Sidenav;
