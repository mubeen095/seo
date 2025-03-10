"use client";
import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { FaCircleCheck } from "react-icons/fa6";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { VscMute } from "react-icons/vsc";
import { HeroEliteData } from "@/data/Elite/Hero";
import DotLoader from "../DotLoader";

const EliteHero = ({ page }) => {
  const src1 = "/image/video/javaherosectionvideo.mp4";
  const data = HeroEliteData[page];
  const [loading, setLoading] = useState(false);

  const handleEnroll = () => {
    setLoading(true);
    setTimeout(() => {
      const a = document.createElement("a");
      a.href =
        "https://superprofile.bio/vp/677919fba2d7d300131d8b0f";
      a.target = "_blank";
      a.click();
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      {loading && <DotLoader />}
      <main
        className="pt-[85px] mb-0 mx-auto max-[1300px]:px-[50px] max-[1300px]:w-full w-[1300px] p-[20px] max-[550px]:p-[20px]"
        style={{
          background: "url('/image/eliteBg.png')",
        }}
      >
        <div className="flex justify-between flex-wrap items-start max-[1024px]:flex-col ">
          <div className="flex-1 mr-[20px] w-full max-[1024px]:flex-none ">
            <h1 className="text-[32px] mb-[10px] max-[550px]:text-2xl font-semibold">
              {data?.heading}
            </h1>
            <p className="mb-[10px] text-[16px] text-[#333] flex items-center gap-2">
              <FaUsers className="font-extrabold" />
              <span>{data?.learner}+ Learners</span>
              <span className="flex items-center gap-1 text-[#f39c12]">
                <TiStarFullOutline />
                <p>{data?.rating} Rating</p>
              </span>
            </p>
            <p className="text-[16px] text-[#333] mb-[10px]">
              <strong>{data?.subHeading}</strong>
            </p>
            <ul className="mb-[20px]">
              {data?.array?.map((data1, index) => (
                <>
                  <li
                    key={index}
                    className="mb-[10px] text-[16px] max-[550px]:text-sm flex items-center "
                  >
                    <div className="w-[30px]">
                      <FaCircleCheck className="text-[#3498db]  " />
                    </div>
                    <p>{data1}</p>
                  </li>
                </>
              ))}
            </ul>
            <div className="flex mb-[2px] w-full max-[550px]:flex-col max-[550px]:justify-center max-[550px]:items-center">
              <button
                onClick={() => handleEnroll()}
                className=" mr-[10px] text-white px-[20px] max-[550px]:text-sm  py-[10px] text-[16px] rounded-[200px] font-semibold max-[550px]:w-[250px] flex justify-center"
                style={{
                  background:
                    " linear-gradient(90deg, rgba(0, 212, 255, 1) 54%, rgba(171, 250, 253, 1) 100%)",
                }}
              >
                <div className="text-black flex items-center gap-2">
                  Enroll Now
                  <BsArrowRightCircleFill className="text-black text-xl" />
                </div>
              </button>

              <button className=" mr-[10px] max-[550px]:mr-0 max-[550px]:mt-[20px] max-[550px]:w-[250px] text-white px-[20px] flex justify-center py-[10px] text-[16px] max-[550px]:text-sm rounded-[200px] font-semibold bg-[#ecf0f1]">
                <a href="" className="text-[#333] flex items-center gap-2">
                  <FaDownload className="text-black text-xl" />
                  Download Brochure
                </a>
              </button>
            </div>

            <div className="mt-[30px] mb-[10px] text-[16px] flex items-center gap-1 text-[#333] flex-wrap ">
              <FaBuilding />
              <p>Looking for enterprise training for teams?</p>
              <p className="underline">Get a quote</p>
            </div>
          </div>
          <div className="w-[45%] max-[1024px]:w-full relative p-[10px] rounded-[6px] bg-white  group ">
            <div className="rounded-[10px] p-[12px]">
              <video
                id="scrollVideo"
                src={data?.videoLink}
                autoPlay
                muted
                loop
                className="w-full h-[400px] max-[550px]:h-auto object-cover rounded-[20px]"
              ></video>

              {/* <button className="rounded-[50%] text-white cursor-pointer hidden absolute h-[40px] w-[40px] top-[80%] left-[85%] padding-[10px] group-hover:block  bg-[rgba(255,255,255,0.7)] backdrop-blur-[1px]">
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#ecf0f1]  text-white">
                  <VscMute />
                </div>
              </button> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EliteHero;
