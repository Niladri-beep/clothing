"use client";

import React, { useState } from "react";

const ExpertServices = () => {
  const [selectedService, setSelectedService] = useState("enrollment");

  return (
    <section className="p-8 bg-white">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black-900">
          Our Expert Services for your Career Goals
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Learn on an AI-powered platform with high-quality content, live
          sessions & mentoring from leading industry experts to achieve your
          desired goal.
        </p>
        <img
    src="/expert.png" // Update with your actual image
    alt="Expert Image"
    className="mx-auto mb-6 w-full h-auto max-w-lg md:max-w-2xl object-contain rounded-lg shadow-lg"
  />
      </div>

      {/* Toggle Options */}
      <div className="flex justify-center gap-8 mt-8">
        <div
          className={`cursor-pointer text-center ${
            selectedService === "enrollment"
              ? "text-pink-600 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setSelectedService("enrollment")}
        >
          <div className="mb-2">
            {selectedService === "enrollment" ? "✅" : "⭕️"}
          </div>
          Enrolment Assistance
        </div>
        <div
          className={`cursor-pointer text-center ${
            selectedService === "course"
              ? "text-pink-600 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setSelectedService("course")}
        >
          <div className="mb-2">
            {selectedService === "course" ? "✅" : "⭕️"}
          </div>
          Course Completion
        </div>
        <div
          className={`cursor-pointer text-center ${
            selectedService === "career"
              ? "text-pink-600 font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setSelectedService("career")}
        >
          <div className="mb-2">
            {selectedService === "career" ? "✅" : "⭕️"}
          </div>
          Career Acceleration
        </div>
      </div>

      {/* Service Content */}
      <div className="mt-12 text-center">
        {selectedService === "enrollment" && (
          <div>
            <h3 className="text-2xl font-semibold">Enrolment Assistance</h3>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Join our expert-driven career counseling sessions where seasoned
              professionals will guide you in selecting the right course for
              your future. Whether you are interested in Artificial Intelligence,
              Machine Learning, Cybersecurity, or the Internet of Things (IoT),
              we will help you chart the perfect path to your career aspirations.
              Learn on an industry-recognized platform that provides hands-on
              learning, real-world projects, and mentoring from global leaders.
            </p>
          </div>
        )}
        {selectedService === "course" && (
          <div>
            <h3 className="text-2xl font-semibold">
              Course Completion Assistance
            </h3>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Struggling to complete your course? Our dedicated team is here to
              help you stay on track with personalized guidance and expert
              support. Whether it is AI, ML, Cybersecurity, or IoT, we provide
              resources and mentoring to ensure you meet your learning
              milestones and achieve your certification goals.
            </p>
          </div>
        )}

        {selectedService === "career" && (
          <div>
            <h3 className="text-2xl font-semibold">
            Career Acceleration
            </h3>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Unlock your potential with cutting-edge courses designed for
              future tech leaders. Whether you are interested in Artificial
              Intelligence, Machine Learning, Internet of Things, or Computer
              Science, we offer tailored learning paths to help you succeed. Our
              flexible learning options and expert mentorship ensure you are
              ready to thrive in today competitive job market.
            </p>
          </div>
        )}
      </div>

      {/* Additional Features */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold">01</h4>
          <p className="text-gray-600 mt-2">Career Counselling</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold">02</h4>
          <p className="text-gray-600 mt-2">Flexible Payment Plans</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold">03</h4>
          <p className="text-gray-600 mt-2">Exclusive Mentoring Sessions</p>
        </div>
      </div>
    </section>
  );
};

export default ExpertServices;
