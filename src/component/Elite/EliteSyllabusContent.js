"use client";
import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FiMinus } from "react-icons/fi";
import { TfiTimer } from "react-icons/tfi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { VscFolderOpened } from "react-icons/vsc";
import { RiServiceLine } from "react-icons/ri";
import { CourseEliteData } from "@/data/Elite/CourseContent";

const EliteSyllabusContent = ({ page }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const data = CourseEliteData[page];

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="flex w-full  flex-col justify-center items-center mb-20">
        <div className="bg-white w-full flex justify-between flex-wrap p-[20px] max-[1300px]:px-[50px] max-[550px]:p-[20px] max-[1300px]:w-full max-w-[1300px] max-[1024px]:flex-col ">
          <div className="mb-[20px] w-[65%] max-[1024px]:w-full">
            <h2 className="text-3xl mb-[20px] max-[550px]:text-xl max-[550px]:leading-[22px]  !font-[800] text-[#333]">
             {data?.title}
            </h2>

            <div className="">
              {data?.faqData?.map((faq, index) => (
                <>
                  <div
                    key={index}
                    className="mb-[10px] border border-[#ddd] rounded-[15px] overflow-hidden w-full"
                  >
                    <div
                      className={`w-full text-left ${
                        openIndex == index ? "bg-[#f0f0f0]" : "bg-[#ceebff]"
                      }  text-[#333] cursor-pointer hover:bg-[#f0f0f0] p-[15px] text-[16px]  max-[550px]:text-sm flex justify-between items-center`}
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq?.question}
                      {openIndex == index ? (
                        <FiMinus className="text-gray" />
                      ) : (
                        <BiSolidDownArrow className="text-gray" />
                      )}
                    </div>
                    <div
                      className={`p-[15px] bg-[#f9f9f9] border-t border-[#ddd] text-sm  ${
                        openIndex === index ? "block" : "hidden"
                      }`}
                    >
                      <p>{faq?.answer}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="w-[30%] mb-[20px] max-[1024px]:w-full">
            <div
              className="bg-white rounded-[8px] mb-[20px]  "
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-[22px] font-semibold bg-[#03a9f5] p-[20px] text-white ">
                Program Highlights
              </h3>
              <ul className="p-[20px]">
                <li className="mb-[10px] text-[16px] flex items-center">
                  <TfiTimer className="text-[#168aef] mr-[10px] text-[24px] font-extrabold " />
                  <span className="text-[#168aef] mr-[6px] text-[30px] font-[300]">
                    |
                  </span>
                  100+ Hrs Instructor Led Training
                </li>

                <li className="mb-[10px] text-[16px] flex items-center">
                  <FaRegCirclePlay className="text-[#8ed83c] mr-[10px] text-[24px] font-extrabold " />
                  <span className="text-[#8ed83c] mr-[6px] text-[30px] font-[300]">
                    |
                  </span>
                  Life time access
                </li>

                <li className="mb-[10px] text-[16px] flex items-center">
                  <VscFolderOpened className="text-[#ff6d06] mr-[10px] text-[24px] font-extrabold " />
                  <span className="text-[#ff6d06] mr-[6px] text-[30px] font-[300]">
                    |
                  </span>
                  Projects discussion
                </li>

                <li className="mb-[10px] text-[16px] flex items-center">
                  <RiServiceLine className="text-[#6759b8] mr-[10px] text-[24px] font-extrabold " />
                  <span className="text-[#6759b8] mr-[6px] text-[30px] font-[300]">
                    |
                  </span>
                  24/7 Support
                </li>
              </ul>
            </div>

            <div
              className="bg-white p-[20px] rounded-[8px] "
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* <h3 className="text-[22px] font-semibold mb-[20px]">
                Next Cohort Starts in
              </h3> */}
              {/* <div className="bg-[#fedfca]">
                <div className="flex  justify-between p-[20px] mb-[20px]">
                  <div className="text-center bg-white py-[10px] px-[20px] rounded-[6px] m-[2px] w-[90%]">
                    <span className="block text-xl font-semibold text-[#ff944d]">
                      0
                    </span>
                    <p className="text-sm font-bold text-[#666]">Days</p>
                  </div>

                  <div className="text-center bg-white py-[10px] px-[20px] rounded-[6px] m-[2px] w-[90%]">
                    <span className="block text-xl font-semibold text-[#ff944d]">
                      22
                    </span>
                    <p className="text-sm font-bold text-[#666]">Hrs</p>
                  </div>

                  <div className="text-center bg-white py-[10px] px-[20px] rounded-[6px] m-[2px] w-[90%]">
                    <span className="block text-xl font-semibold text-[#ff944d]">
                      46
                    </span>
                    <p className="text-sm font-bold text-[#666]">Min</p>
                  </div>

                  <div className="text-center bg-white py-[10px] px-[20px] rounded-[6px] m-[2px] w-[90%]">
                    <span className="block text-xl font-semibold text-[#ff944d]">
                      33
                    </span>
                    <p className="text-sm font-bold text-[#666]">Sec</p>
                  </div>
                </div>
              </div> */}

              <form className="flex flex-col">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-[10px] mb-[10px] border border-[#ddd] rounded-[8px] text-[16px] outline-none "
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-[10px] mb-[10px] border border-[#ddd] rounded-[8px] text-[16px] outline-none "
                />

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="p-[10px] mb-[10px] border border-[#ddd] rounded-[8px] text-[16px] outline-none "
                />

                <button className="bg-[#28a745] text-white cursor-pointer font-semibold p-[10px] mb-[10px] rounded-lg text-[16px]">
                  Enroll Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EliteSyllabusContent;
