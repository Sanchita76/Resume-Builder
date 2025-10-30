import React, { useState } from "react";
import star from '../assets/star-1.jpeg';
import { FaStar } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const reviews = [
  {
    name: "Omran Almekhlet",
    title: "Excellent",
    text: "Excellent customer support resolved the issue in no time.",
    time: "1 hour ago",
    verified: true,
  },
  {
    name: "Ronald “Ron” Durfee",
    title: "It was easy and helpful",
    text: "It was easy and helpful. Quickly put a few together. Got a job! Only negative—",
    time: "8 hours ago",
    verified: true,
  },
  {
    name: "Aasif Khan",
    title: "A very helpful Resume Builder",
    text: "I have prepared and checked my resume with ResumeBuilder.com. I found their—",
    time: "2 days ago",
    verified: true,
  },
  {
    name: "TMartin",
    title: "Easy to use!",
    text: "Easy to use, provides job descriptions and choices to edit to fit your need.",
    time: "2 days ago",
    verified: true,
  },
];

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#f8f4fb] via-white to-[#f8f4fb] py-10 px-8 md:px-16 flex flex-col md:flex-row items-start justify-between gap-10">
      {/* Left Section */}
      <div className="md:w-1/4 flex flex-col items-center md:items-start">
        <h2 className="text-xl font-semibold mb-2">Great</h2>
        <div className="flex text-green-500 text-xl mb-2">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <FaStar className="text-gray-300" />
        </div>
        <p className="text-sm text-gray-600 mb-1">Based on 1,244 reviews</p>
        <div className="flex">
           <img
             src={star}
             alt="Trustpilot"
             className="w-5"
           />
         <span className="ml-2">Trustpilot</span>
         </div>
      </div>

      {/* Right Carousel Section */}
      <div className="md:w-3/4 relative">
        <h3 className="text-2xl font-semibold text-center mb-6">
          What users say about <span className="text-black">Resume Builder</span>
        </h3>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4"
              >
                <div className="bg-white shadow-md rounded-xl p-5 border">
                  <div className="flex text-green-500 text-lg mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <h4 className="font-semibold mb-2">{review.title}</h4>
                  <p className="text-gray-700 text-sm mb-3">{review.text}</p>
                  <p className="text-sm text-gray-500">
                    {review.name}, {review.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <MdArrowBackIos />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
