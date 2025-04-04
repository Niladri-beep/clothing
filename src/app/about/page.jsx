"use client";
import React from "react";
import Page from "../_footer/Page";
import { ComplexNavbar } from "../_navbar/Navbar";

const AboutUs = () => {
  return (
    <>
    <ComplexNavbar />
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="w-full bg-blue-600 dark:bg-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            About Our Institution
          </h1>
          <p className="mt-5 text-lg lg:text-xl text-white">
            Leading the Future of Technology with Courses in IoT, Machine Learning, and Cybersecurity.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 px-5 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
          Our institution strives to equip students with the latest skills in IoT, Machine Learning, and Cybersecurity to meet industry demands and foster innovation.
        </p>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* IoT Course */}
            <div className="bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Internet of Things (IoT)</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Dive into the world of IoT and learn how to build connected devices and smart applications for the future.
              </p>
              <button className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
            
            {/* Machine Learning Course */}
            <div className="bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Machine Learning (ML)</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Master the art of machine learning, data science, and AI with our comprehensive courses designed for industry leaders.
              </p>
              <button className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>

            {/* Cybersecurity Course */}
            <div className="bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn how to protect systems, networks, and data from digital attacks in the ever-evolving field of cybersecurity.
              </p>
              <button className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-5 lg:px-20 bg-blue-100 dark:bg-gray-700 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6">
            We focus on providing hands-on learning experiences, guided by industry experts in cutting-edge technologies like IoT, ML, and Cybersecurity. Our platform offers an environment to grow, innovate, and shape the future.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center text-white text-3xl font-bold">
              1
            </div>
            <h3 className="mt-4 text-2xl font-bold">Expert Instructors</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Learn from industry professionals who are passionate about teaching and technology.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center text-white text-3xl font-bold">
              2
            </div>
            <h3 className="mt-4 text-2xl font-bold">Cutting-Edge Curriculum</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Stay ahead with a curriculum that evolves with the latest advancements in IoT, ML, and Cybersecurity.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center text-white text-3xl font-bold">
              3
            </div>
            <h3 className="mt-4 text-2xl font-bold">Flexible Learning</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Our platform allows you to learn at your own pace, anytime and anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 px-5 lg:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10">
            Have questions about our courses or the platform? Feel free to reach out to us, and we will be happy to assist you.
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
    <Page/>
    </>
  );
};

export default AboutUs;
