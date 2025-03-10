"use client";
import React from "react";
import { MdOutlineHandshake } from "react-icons/md";
function HomeCard({ title, desc, image1, imag2, isCenter }) {
  return (
    <div
      id="partnerNav"
      className=" overflow-x-hidden relative  bg-white w-full lg:w-[568px] px-[32px] py-[32px] rounded-[20px] shadow-md border border-gray h-full"
    >
      <p className=" text-[14px] font-[700] text-black leading-[3px] ">
        {title}
      </p>
      <h2 className=" text-[30px] break-words md:max-w-max max-w-[200px] md:text-[56px] font-[700] w-[384px] text-black md:leading-[60px] tracking-[-1px] mt-[30px] ">
        {desc}
      </h2>
      <p className="partnership-card-para-grey"></p>
      <div className=" flex justify-start items-center w-full mt-[100px] ">
        <div
          data-aos="slide-right"
          data-aos-duration="700"
          className=" relative overflow-hidden py-1 px-1 flex justify-start items-center w-[240px] border border-gray/30 h-[80px] rounded-lg "
        >
          <img alt="" src={image1} className="w-full h-auto object-cover" />
        </div>
      </div>
      <div className=" h-[70px] absolute top-[65%] bg-gray/10 rounded-tl-[15px] rounded-bl-[15px] w-[160px] right-0 "></div>
      <div className=" w-full flex justify-center items-center ">
        {isCenter && (
          <div className=" relative flex justify-start items-center border border-gray/30 px-2 py-2 rounded-lg">
            <MdOutlineHandshake size={30} />
          </div>
        )}
      </div>
      <div className=" h-[70px] absolute top-[85%] bg-gray/10 rounded-tr-[15px] rounded-br-[15px] w-[140px] left-0 "></div>
      <div className=" md:mt-0 mt-4 flex mb-6 w-full justify-end items-center">
        <div
          data-aos="slide-left"
          data-aos-duration="700"
          className=" px-1 py-1 overflow-hidden  relative flex justify-start items-center w-[240px] border border-gray/30 h-[80px] rounded-lg "
        >
          <img alt="" src={imag2} className=" w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
