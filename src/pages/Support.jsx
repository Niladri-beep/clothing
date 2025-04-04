"use client";

import Image from "next/image";
import React from "react";

const SupportSection = () => {
  return (
    <div className="bg-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-semibold text-black-900 mb-4 text-center">
        AT SCHOOL. IN Learner Support
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Talk to our experts. We are available 24/7.
      </p>

      {/* Contact options */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Indian Nationals */}
        <div className="flex items-center space-x-4 border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Image src="/baa-call.png" alt="Indian Nationals" className="w-8 h-8" height={200} width={200} />
          <div className="flex flex-col text-center">
            <span className="text-lg font-bold">Call Now</span>
            <span className="text-xl text-pink-600 font-semibold">
              <a href="tel:+919878388084">9878388084</a>
            </span>
          </div>
        </div>

        {/* Foreign Nationals */}
        <div className="flex items-center space-x-4 border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <Image src="/baa-call.png" alt="Indian Nationals" className="w-8 h-8" height={200} width={200} />

          <div className="flex flex-col text-center">
            <span className="text-lg font-bold">At School. In</span>
            <span className="text-xl text-pink-600 font-semibold">
              <a href="tel:+919878388084">
                Basantpur, Sarkaghat, Mandi, Himachal Pradesh 175042
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-2">About Us</h3>
        <p className="text-gray-600">
          We offer a range of expertly designed courses tailored to meet the
          demands of today rapidly evolving technology landscape. Whether
          you are looking to break into the tech industry, advance your career,
          or stay ahead of emerging trends, our programs are crafted to provide
          you with practical experience and in-depth understanding. Our expert
          instructors bring real-world experience and industry insights into the
          classroom, ensuring that you receive the highest quality education. At
          AT SCHOOL.IN, we believe in fostering a learning environment that
          encourages curiosity, innovation, and growth.
        </p>
      </div>
    </div>
  );
};

export default SupportSection;
