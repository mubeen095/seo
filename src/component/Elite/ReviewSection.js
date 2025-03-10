"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ReviewSection = () => {
  const scrollContainer = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const reviewData = [
    {
      name: "Ananya Sharma",
      role: "Backend Developer at CodeSolutions",
      review:
        '"This course provided the perfect balance of theory and practical application. The projects were challenging but extremely rewarding, and I feel much more confident in my backend skills."',
    },

    {
      name: "Vikram Singh",
      role: "DevOps Engineer at CloudSphere",
      review:
        '"An exceptional course that covers all the essentials of DevOps. The practical assignments were particularly useful, allowing me to apply what I learned directly to my job."',
    },

    {
      name: "Ravi Patel",
      role: "AI Researcher at InnovateAI",
      review:
        '"The course content was cutting-edge and relevant to current industry trends. I was able to implement what I learned in my AI research projects, and it has significantly impacted my work."',
    },
    {
      name: "Priya Kapoor",
      role: "Product Manager at FinTechHub",
      review:
        '"This course gave me a deeper understanding of the technical aspects of product development. The instructors were excellent, and the curriculum was well-structured, which helped me lead my team more effectively."',
    },

    {
      name: "Neha Gupta",
      role: "Data Analyst at InsightCorp",
      review:
        '"I was impressed by the depth of the content and the hands-on approach of the course. The data analysis techniques I learned have already proven invaluable in my day-to-day work."',
    },

    {
      name: "Arjun Mehta",
      role: "Full Stack Developer at TechMasters",
      review:
        '"The course was incredibly well-designed, offering a comprehensive overview of full-stack development. The projects were real-world applicable, and I was able to build my portfolio significantly."',
    },
  ];
  const scroll = (direction) => {
    const container = scrollContainer.current;
    const cardWidth = 320; // Width of a card + gap (300px card width + 20px gap)

    if (direction === "left") {
      container.scrollLeft -= cardWidth;
    } else {
      container.scrollLeft += cardWidth;
    }

    // Update button states
    setTimeout(() => {
      setIsLeftDisabled(container.scrollLeft <= 0);
      setIsRightDisabled(
        container.scrollLeft + container.offsetWidth >= container.scrollWidth
      );
    }, 100);
  };
  return (
    <>
      <div className="m-auto max-w-[1300px] py-10 px-5 text-center max-[1300px]:px-[50px] max-[1300px]:w-full max-[550px]:p-[20px] ">
        <div>
          <h2 className="text-[28px] font-semibold mb-[10px]">
            What Our Students Say
          </h2>
          <p className="text-[16px] text-[#666] mb-10">
            Hear from those who have completed our courses and how it has
            impacted their careers.
          </p>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={() => scroll("left")}
            disabled={isLeftDisabled}
            className={`absolute left-0 z-10 bg-gray-200 p-2 rounded-full shadow-md ${
              isLeftDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            &larr;
          </button>
          <div
            className="flex overflow-x-auto scroll-smooth py-5 gap-[20px] "
            ref={scrollContainer}
            style={{
              scrollbarWidth: "none",
            }}
          >
            {reviewData.map((data, index) => (
              <>
                <div
                  key={index}
                  className="bg-white rounded-lg w-[300px] p-[20px] shrink-0 text-center "
                  style={{
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-[10px]">
                    {data?.name}
                  </h3>
                  <p className="text-sm text-[#3498db] mb-[15px]">
                    {data?.role}
                  </p>
                  <p className="text-sm text-[#666] mb-5">{data?.review}</p>

                  <div className="flex justify-center items-center">
                    <Link
                      href="#"
                      className=" text-[#666] text-[16px] mx-[5px]"
                    >
                      <FaLinkedin />
                    </Link>

                    <Link
                      href="#"
                      className=" text-[#666] text-[16px] mx-[5px]"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={isRightDisabled}
            className={`absolute right-0 z-10 bg-gray-200 p-2 rounded-full shadow-md ${
              isRightDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
