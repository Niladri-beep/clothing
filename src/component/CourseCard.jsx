"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CourseCard = ({ course }) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mb-6 max-w-full lg:max-w-sm mx-auto">
      <div className="relative">
        <Image
         src="/courses/ai.jpeg"
          alt={course.title}
          height={100}
          width={600}
          className="w-full h-40 object-cover"
        />
        {course.isBestseller && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
            Bestseller
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {course.title}
        </h2>
        <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-bold text-red-600">₹ 500</p>
          <p className="text-sm line-through text-gray-500">₹{course.price}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-yellow-500 font-semibold text-sm">
            ★ 5 (4.8 reviews)
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            onClick={() => router.push(`/course/${course._id}`)}
          >
            Enroll Now
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-800 transition-all duration-300">
            Buy Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
