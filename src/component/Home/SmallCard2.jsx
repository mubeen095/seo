import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

function SmallCard({ index }) {
  return (
    <a
      className=" relative lg:w-[340px] w-full rounded-[14px] bg-white shadow-md border-gray/20 "
      href={`/program/${index}`}
    >
      <img
        className=" absolute right-[-8px]  top-[66px] "
        src="/image/free_course_offer_chip.svg"
        alt=""
      />
      <div className=" rounded-tl-[14px] rounded-tr-[14px] h-[135px] overflow-hidden  ">
        <div className=" bg-green-500 w-full h-[20px] "></div>
        <div className="pl-[16px] py-[23px]">
          <p className="text-[14px] text-black font-[700] ">TRENDING . CS</p>
          <h5 className=" text-[34px] font-[700] text-black leading-[34px] tracking-[-2px] w-[181px] ">
            Machine Learning
          </h5>
        </div>
      </div>
      <div className=" pl-[19px] pt-[19px] pb-[24px] ">
        <p className=" text-[14px] font-[600] mt-[25px] text-black ">
          DURATION
        </p>
        <p className="md:text-[14px] text-[10px] font-[600] mt-[25px] text-black">
          2 Months . Project included
        </p>
        <p className="md:text-[14px] text-[10px] font-[600] mt-[25px] text-gray">
          PROGRAM
        </p>
        <p className="md:text-[14px] flex items-center gap-1 text-[10px] font-[600] mt-[25px] text-black">
          Live and Interactive
          <MdInfoOutline />
        </p>
        <div id="info-chip"></div>
      </div>
      <div className=" px-[20px] pb-[32px] ">
        <div>
          <img src="/images/card_divider.svg" alt="" />
        </div>
        <p className=" border-t border-dashed  mt-[22px]  text-[20px] ">
          <div className="text-[20px] font-[600] pt-10 flex items-center justify-start gap-2  text-gray ">
            View Program <FaArrowRight className=" rotate-[-45deg] " />
          </div>
        </p>
      </div>
    </a>
  );
}

export default SmallCard;
