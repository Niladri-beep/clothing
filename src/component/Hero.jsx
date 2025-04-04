"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const scrollAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom ? custom.duration : 1,
    },
  }),
};

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <>
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          initial="hidden"
          animate="visible"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-800 leading-normal">
              Discover Your Unique Style with <strong>GunCloth</strong>.
            </h1>
            <p className="text-gray-500 mt-4 mb-6">
              Embrace fashion that’s bold, modern, and built for all. With
              GunCloth, find the perfect blend of style and comfort to make a
              statement every day. Explore the latest trends, exclusive
              collections, and quality that redefines what you wear.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Shop Now
            </button>
          </div>

          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/hero.gif"
                alt="GunCloth Illustration"
                quality={100}
                width={612}
                height={200}
                style={{ width: "100%", height: "85%" }}
                className="rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* <div className="relative w-full flex flex-wrap justify-center">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"
              key={index}
              custom={{ duration: 2 + index }}
              initial="hidden"
              animate="visible"
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img
                    src={listUsers.icon}
                    alt={listUsers.name}
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-gray-800 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-gray-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div
            className="absolute bg-gray-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
