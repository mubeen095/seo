"use client";
import React, { useState } from "react";
import { TfiTimer } from "react-icons/tfi";

import { RiGraduationCapLine } from "react-icons/ri";
import { BsLightningCharge } from "react-icons/bs";
const ProgramHeader = ({ data }) => {
  const [clicked, setCliecked] = useState(false);
  const handleEnroll = () => {
    setCliecked(true);
    setTimeout(() => {
      const a = document.createElement("a");
      a.href =
        "https://superprofile.bio/vp/677919fba2d7d300131d8b0f";
      a.target = "_blank";
      a.click();
      setCliecked(false);
    }, 400);
  };
  return (
    <>
      <div className="px-[140px] pt-[135px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px] ">
        <div
          className="w-full rounded-[20px] p-[40px]  max-[550px]:px-5 border border-[rgba(211,211,211,1)] relative "
          style={{
            background: `url(${data?.banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-[16] font-bold text-white tracking-[3px]">
            {data?.title}
          </p>
          <h6 className="text-[58px] font-[700] text-white  w-[802px]  max-[1024px]:w-full leading-[65px] mt-[92px] -tracking-[1px]  max-[1024px]:mt-[40px]  max-[1024px]:text-[31px]  max-[1024px]:leading-[31px]  max-[550px]:text-[26px]">
            {data?.heading}
          </h6>

          <p className="text-[16px] mt-[30px] text-white">
            Trained by Industry professionals from
          </p>

          <div className="mt-[30px] flex justify-between items-center  max-[1024px]:hidden">
            <div className="flex items-center">
              {data?.trainedBy?.map((item, index) => (
                <img
                  src={item}
                  key={`trainedBY-${index}`}
                  className="mr-[10px]"
                />
              ))}
            </div>
            <p className="text-lg font-bold text-white rounded-full p-[10px] bg-[rgba(0,0,0,0.16)]">
              {data?.price}· HIGH STIPEND OFFERED*
            </p>
          </div>
        </div>

        <div className="w-full bg-white border border-[rgba(211,211,211,1)] mt-[36px] rounded-[20px] pt-[23px] pb-[24px] pr-[24px] pl-[31px] flex justify-between items-center max-[1024px]:flex-col ">
          <div className="flex  max-[1024px]:w-full items-center gap-5 border-r border-dashed border-black pr-[53px] max-[1400px]:pr-[35px] max-[1024px]:border-r-0  max-[1024px]:border-b  max-[1024px]:pb-5">
            <TfiTimer className="text-[rgb(22,183,81)] text-[28px] " />
            <div>
              <p className="text-[16px] font-bold text-paraColor tracking-[3px]  max-[1024px]:text-sm ">
                DURATION
              </p>
              <h6 className="text-xl font-[500] mt-[12px] max-[1024px]:mt-1   max-[1024px]:text-[16px]">
                2 Months · Online
              </h6>
            </div>
          </div>

          <div className="flex items-center gap-5 border-r max-[1024px]:border-r-0  max-[1024px]:border-b  max-[1024px]:w-full border-dashed border-black pr-[53px]  max-[1400px]:pr-[35px]  max-[1024px]:py-5">
            <RiGraduationCapLine className="text-[rgb(22,183,81)] text-[31px] " />
            <div>
              <p className="text-[16px] font-bold text-paraColor tracking-[3px]  max-[1024px]:text-sm ">
                PROGRAM
              </p>
              <h6 className="text-xl font-[500] mt-[12px] max-[1024px]:mt-1   max-[1024px]:text-[16px]">
                Live classes
              </h6>
            </div>
          </div>

          <div className="flex items-center gap-5  max-[1024px]:w-full   pr-[53px]  max-[1400px]:pr-[35px]  max-[1024px]:py-5">
            <BsLightningCharge className="text-[rgb(22,183,81)] text-[31px] " />
            <div>
              <p className="text-[16px] font-bold text-paraColor tracking-[3px]  max-[1024px]:text-sm ">
                GUARNTEED
              </p>
              <h6 className="text-xl font-[500] mt-[12px]  max-[1024px]:mt-1  max-[1024px]:text-[16px]">
                Skills
              </h6>
            </div>
          </div>

          <button
            onClick={(e) => {
              handleEnroll();
            }}
            className="bg-black w-[305px] min-h-[60px] relative  max-[1024px]:w-full p-[6px] rounded-full flex items-center justify-end  max-[1400px]:w-[270px]"
          >
            <div
              style={{
                backgroundColor: clicked ? data?.changeColor : data?.Bgcolor,
              }}
              className={` py-3  px-4 left-[6px] transition-all duration-500 ease-linear ${
                clicked ? "md:translate-x-[130px] translate-x-[85px] " : "translate-x-0"
              } rounded-full text-white absolute text-[16px] max-[1024px]:text-sm font-[500px]`}
            >
              Register ₹ {data?.price}
            </div>
            <img src="/image/right_arrows.svg" className="mr-[10px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProgramHeader;
