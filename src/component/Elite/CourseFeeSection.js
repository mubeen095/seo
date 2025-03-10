"use client";
import { EliteFeeData } from "@/data/Elite/CourseContent";
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const CourseFeeSection = ({ page }) => {
  const data = EliteFeeData[page];
  const [selectedBatch, setSelectedBatch] = useState(0);
  return (
    <>
      <div className="relative bg-[#6a4db1] py-[60px] px-[20px]">
        <div
          className="bg-white max-[1300px]:px-[50px] max-[1300px]:w-full max-w-[1300px] rounded-lg p-8  mx-auto relative z-[2] max-[550px]:p-[20px] "
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 className="text-[28px] font-bold mb-5 text-[#333] text-left w-full">
            {data?.heading}
            <span className="text-[#ffde59]"> Fees</span>
          </h2>

          <div className="border-t-8 border-[#f39c12] pt-5 w-full">
            <div className="flex ">
              <h3 className="text-xl font-semibold">Online Classroom</h3>
              <span className="bg-[#5c5cde] text-white rounded-full px-[10px] py-[5px] ml-[10px] align-middle font-[500] text-[15px]">
                Preferred
              </span>
            </div>
            <ul className="mt-[20px] mb-[30px] text-sm leading-6">
              <li>✓ Everything in Self-Paced Learning</li>
              <li>✓ 100+ Hrs of Instructor-led Training</li>
              <li> ✓ One-to-one doubt resolution sessions</li>
              <li>✓ Attend as many batches as you want for life</li>
              <li>✓ Job Assistance</li>
              <li>✓ 20+ Program access</li>
            </ul>

            <div className="flex justify-between flex-wrap mb-5">
              <div
                className={`${
                  selectedBatch == 0
                    ? "border-2 border-[#ff9800]"
                    : "border border-[#ddd]"
                } bg-[#f9f9f9] rounded-lg p-5 text-center w-[20%] max-[1024px]:w-[47%] max-[550px]:w-[100%] max-[1024px]:mb-[25px]`}
                onClick={() => setSelectedBatch(0)}
              >
                <div className="flex justify-center items-center relative mb-[10px]">
                  <div className="w-3 h-3 bg-[#ff9800] rounded-full absolute -top-[5px] -left-[5px] blinkAnimation"></div>
                  <p>Weekday (Mon - Fri)</p>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <div className="text-sm my-[5px] text-[#333] flex  items-center gap-1">
                    <FaCalendarAlt />
                    <p> 20 Nov 2024</p>
                  </div>

                  <div className="text-sm my-[5px] text-[#333] flex  items-center gap-1">
                    <FaClock />
                    <p> 06:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div
                className={`${
                  selectedBatch == 1
                    ? "border-2 border-[#ff9800]"
                    : "border border-[#ddd]"
                } bg-[#f9f9f9] rounded-lg p-5 text-center w-[20%] max-[1024px]:w-[47%] max-[550px]:w-full max-[1024px]:mb-[25px] `}
                onClick={() => setSelectedBatch(1)}
              >
                <div className="flex justify-center items-center relative mb-[10px]">
                  <p>Weekday (Mon - Fri)</p>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <div className="text-sm my-[5px] text-[#333] flex  items-center gap-1">
                    <FaCalendarAlt />
                    <p> 20 Nov 2024</p>
                  </div>

                  <div className="text-sm my-[5px] text-[#333] flex  items-center gap-1">
                    <FaClock />
                    <p> 06:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div
                className={`${
                  selectedBatch == 2
                    ? "border-2 border-[#ff9800]"
                    : "border border-[#ddd]"
                } bg-[#f9f9f9] rounded-lg p-5 text-center w-[20%] max-[1024px]:w-[47%] max-[550px]:w-full max-[1024px]:mb-[25px]`}
                onClick={() => setSelectedBatch(2)}
              >
                <div className="flex justify-center items-center relative mb-[10px]">
                  <p>Weekday (Mon - Fri)</p>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <div className="text-sm my-[5px] text-[#333] flex  items-center gap-1">
                    <FaCalendarAlt />
                    <p> 20 Nov 2024</p>
                  </div>

                  <div className="text-sm my-[5px] text-[#333] flex  items-center gap-1">
                    <FaClock />
                    <p> 06:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div
                className={` ${
                  selectedBatch == 3 ? "border-2 !border-[#ff9800]" : ""
                } w-[20%] max-[1024px]:w-[47%] max-[550px]:w-full max-[1024px]:mb-[25px] p-5 rounded-lg mt-5 text-right bg-transparent`}
                onClick={() => setSelectedBatch(3)}
              >
                <p className="text-sm text-[#999] line-through">₹ 55,000</p>
                <p className="text-[24px] font-bold text-[#00bcd4] my-[5px]">
                  ₹ 25,000
                </p>
                <p className="text-xs text-[#f44336]">45% OFF</p>
              </div>
            </div>

            <div className="border-t-8 border-[#00bcd4] pt-5">
              <h3 className="font-semibold text-xl">Corporate Training</h3>

              <ul className="flex flex-wrap mt-[20px] mb-[30px] text-sm leading-6">
                <li className=" mr-5">✓ Customized Learning</li>
                <li className=" mr-5">
                  ✓ Enterprise Grade Learning Management System (LMS)
                </li>
                <li className=" mr-5">✓ 24x7 Support</li>
                <li className=" mr-5">✓ Enterprise Grade Reporting</li>
              </ul>

              <button
                className="text-white px-5 py-[10px] rounded-[25px] cursor-pointer text-xl font-semibold block w-[180px] h-[50px] text-center my-5 mx-auto"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 212, 255, 1) 54%, rgba(171, 250, 253, 1) 100%)",
                }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseFeeSection;
