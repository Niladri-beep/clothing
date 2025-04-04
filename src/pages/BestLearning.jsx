"use client";
import React from "react";
import Image from "next/image";

const BestLearning = () => {
  return (
    <section className="container mx-auto px-4 py-6 min-h-[calc(100vh-100px)] grid md:grid-cols-2 gap-8 overflow-hidden">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-light leading-[2.5rem] md:leading-[3.5rem] text-primaryDark mb-4">
          Best Learning Platform
          <br />
          <span className="font-bold">AT SCHOOL. IN</span>
          <br />
        </h1>
        <p className="text-textColor text-lg md:text-xl lg:text-2xl mb-8">
          Mastering Artificial Intelligence, IoT, Cyber Security, Data Science,
          and more. Our courses are designed to provide hands-on experience with
          the latest tools and technologies. Dive deep into AI with machine
          learning algorithms, explore the future of connected devices through
          IoT, safeguard digital infrastructure with Cyber Security techniques,
          and unlock the power of data through Data Science.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
        <Image
          src="/Carousel/c.jpg"
          alt="header"
          width={300}
          height={300}
          className="rounded-lg transform translate-y-4 md:translate-y-8 object-contain"
        />
        <Image
          src="/Carousel/d.jpg"
          alt="header"
          width={300}
          height={300}
          className="rounded-lg transform -translate-y-4 md:-translate-y-8 object-contain"
        />
      </div>
    </section>
  );
};

export default BestLearning;
