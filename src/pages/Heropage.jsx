"use client";

import Image from "next/image";
import { useState } from "react";

const CourseCard = ({
  university,
  courseName,
  degreeType,
  duration,
  additionalInfo,
  badge,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 lg:w-1/4 m-4 relative">
      <div className="relative h-40">
        <img
          src="/logo.png" // Update with your actual image
          alt="Expert Image"
          className="mx-auto mb-6 w-full h-auto max-w-lg md:max-w-2xl object-contain rounded-lg shadow-lg"
        />
        {badge && (
          <span
            className={`absolute top-2 right-2 bg-${badge.color}-500 text-white text-xs font-bold px-2 py-1 rounded`}
          >
            {badge.label}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{university}</h3>
        <p className="text-sm text-gray-600">{courseName}</p>
        <div className="flex items-center text-sm text-gray-500 my-2">
          <span className="mr-2">📚 {degreeType}</span>
          <span>⏳ {duration}</span>
        </div>
        <p className="text-xs text-gray-400">{additionalInfo}</p>
        <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out">
                  Enroll Now
                </button>
                <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transition-all duration-300 ease-in-out">
                  Buy Course
                </button>
              </div>
      </div>
    </div>
  );
};

const CourseSection = () => {
  const courses = [
    {
      university: "Liverpool Business School",
      courseName: "MBA from Liverpool Business School",
      degreeType: "Master's Degree",
      duration: "18 Months",
      additionalInfo: "WES Recognized MBA degree",
      badge: { label: "Bestseller", color: "orange" },
    },
    {
      university: "Golden Gate University",
      courseName: "MBA from Golden Gate University",
      degreeType: "Master's Degree",
      duration: "15 Months",
      additionalInfo: "WES Recognized",
      badge: { label: "Popular", color: "purple" },
    },
    {
      university: "Deakin Business School",
      courseName: "Global MBA from Deakin Business School",
      degreeType: "Master's Degree",
      duration: "24 Months",
      additionalInfo: "Dual Credentials",
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Discover <span className="text-pink-500">Our Courses</span>
        </h2>
        <div className="flex flex-wrap">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
