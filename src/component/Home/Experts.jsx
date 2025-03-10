"use client";
import React from "react";

const CareerCard = ({ title, head, text }) => {
  return (
    <>
      <div className=" mt-[20px] flex justify-between relative overflow-hidden w-full">
        <div className="border md:flex border-[#D3D3D3] justify-between md:gap-[100px] rounded-[20px] w-full py-10 bg-white relative overflow-hidden">
          <div
            data-aos="slide-left"
            data-aos-delay="200"
            className="  md:block hidden w-[240px] rounded-bl-[20px] h-[85px] absolute right-[-10px] top-0 bg-[#D3D3D3]/[0.2] z-10 border border-gray/10   "
          ></div>
          <div
            data-aos="slide-left"
            data-aos-delay="200"
            className=" md:block hidden  w-[100px] rounded-[20px] h-[85px] absolute right-[-30px] top-[50%] bg-[#D3D3D3]/[0.2] z-10 border border-gray/10   "
          ></div>
          <div
            data-aos="slide-left"
            data-aos-delay="200"
            className="  md:block hidden w-[350px] rounded-[20px] h-[85px] absolute right-[-5px] bottom-[-20px] bg-[#D3D3D3]/[0.2] z-10 border border-gray/10   "
          ></div>
          <div className=" w-full md:w-[50%] px-4 md:px-[50px] flex justify-between flex-col md:pb-[100px]">
            <div>
              <p className="text-sm font-semibold tracking-[3px]">{title}</p>
              <h5 className=" text-[30px] md:text-[55px] font-bold md:leading-[65px] mt-4 md:mt-[60px]">
                {head}
              </h5>
            </div>

            <p className="text-[15px] mt-[30px]  text-paraColor ">{text}</p>
          </div>

          <div className=" w-full md:w-[60%] md:mt-0 mt-4   ">
            <div
              data-aos="slide-left"
              data-aos-delay="200"
              className="flex justify-center md:justify-end md:mt-[80px]  md:pr-12 gap-[10px] md:mb-10 "
            >
              <img
                src="/image/company/dubai.svg"
                className=" max-w-[130px] md:min-w-[242px] md:h-[85px] "
                alt=""
              />
              <img
                src="/image/company/morgan.svg"
                className=" max-w-[130px] md:min-w-[242px] md:h-[85px]"
                alt=""
              />
            </div>
            <div
              data-aos="slide-left"
              data-aos-delay="300"
              className="flex justify-center md:justify-end md:pr-24  gap-[10px] md:mb-10 "
            >
              <img
                src="/image/company/microsoft.svg"
                className=" max-w-[130px] md:min-w-[242px] h-[85px] "
                alt=""
              />
              <img
                src="/image/company/mistral.svg"
                className=" max-w-[130px] md:min-w-[242px] h-[85px]"
                alt=""
              />
            </div>
            <div
              data-aos="slide-left"
              data-aos-delay="200"
              className="flex justify-center md:justify-end md:mr-[-20px] gap-[10px] md:mb-[67px] "
            >
              <img
                src="/image/company/bosch.svg"
                className=" max-w-[130px] md:min-w-[242px] md:h-[85px] "
                alt=""
              />
              <img
                src="/image/company/state.svg"
                className=" max-w-[130px] md:min-w-[242px] md:h-[85px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerCard;
