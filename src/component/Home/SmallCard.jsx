import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

function SmallCard({ index, data }) {
  return (
    <a
      className=" relative lg:w-[340px] w-full rounded-[14px] bg-white shadow-md border-gray/20 "
      href={`/program/${index + 1}`}
    >
      {/* <img
        className=" absolute right-[-8px]  top-[66px] "
        src={data.banner}
        alt=""
      /> */}
      <div
        style={{
          backgroundImage: `url(${data?.banner})`,
        }}
        className=" bg-image rounded-tl-[14px] rounded-tr-[14px] h-[135px] pl-[16px] py-[23px] "
      >
        <p className="text-[14px] text-white font-[700] ">{data.title} . CS</p>
        <h5 className=" text-[34px] mt-2 font-[700] text-white leading-[34px] tracking-[-2px] w-full line-clamp-2 ">
          {data?.heading}
        </h5>
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
