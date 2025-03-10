"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import ScrollSpeed from "@/component/reuseable/ScrollSpeed";

function Hero() {
  return (
    <div className=" bg-transparent flex  justify-between items-center w-full max-[1024px]:flex-col md:pl-[100px]">
      <div className=" z-10  mt-20 md:mt-[142px] md:pl-0 pl-[30px] max-[550px]:mt-[160px] max-[550px]:px-[20px] ">
        <p className=" text-[14px] font-[700] tracking-[4px] text-black max-[550px]:text-xs max-[550px]:tracking-[2px]  max-[550px]:text-center ">
          IT NOVA 
        </p>
        <h1 className=" text-[30px]  break-words md:text-[75px] font-[800] tracking-wide  md:max-w-max max-w-[300px] md:leading-[82px] md:tracking-[-3px] mt-[50px] text-black w-[710px]  max-[550px]:text-center ">
        Revolutionizing How India Learns 
        </h1>
        <div className=" flex md:flex-row flex-col md:gap-0 gap-4 justify-center w-full  items-center mt-[58px] md:w-fit ">
          <Link
            href="/#onlineCourse"
            className=" bg-gradient-to-r from-primary text-white font-[600] to-secondary w-[200px] rounded-[132px] flex items-center justify-center gap-4 py-1  "
            //   style="text-decoration: none;"
          >
            Enroll Now
            <img
              className=" animate-arrowAnime "
              src="/image/Homepage/enroll_icon.svg"
              alt=""
            />
          </Link>
          <p className=" tetx-[14px] font-[500] text-gray md:ml-[31px] ">
            Enrolled by <span className=" text-black ">2L+ Students</span>
          </p>
        </div>
      </div>
      <div className="  overflow-hidden relative z-50 w-full md:w-[45%] h-screen max-[550px]:h-auto flex justify-end  ">
        <img
          loading="lazy"
          className=" max-w-[400px] md:max-w-[647px] h-[553px] max-[550px]:h-[370px] "
          src="/image/Homepage/hero_absolute_image.png"
          alt=""
        />
        <img
          loading="lazy"
          className=" absolute h-auto w-[350px] md:w-[448px] left-[50%] translate-x-[-50%]  bottom-0 top-[50%] max-[550px]:top-[60%]  translate-y-[-60%]  "
          src="/image/Homepage/natasha_image.png"
          alt=""
        />
        <ScrollSpeed
          speed={-0.8}
          className=" absolute left-[50%] translate-x-[-50%] bottom-[70px] w-[500px] h-[370px] z-10  "
        >
          <img
            loading="lazy"
            src="/image/Homepage/hero_image2.png"
            alt=""
            // style="transform: translateY(0px);"
          />
        </ScrollSpeed>
        <ScrollSpeed
          speed={-0.8}
          className="absolute z-10 md:left-[-49px] left-[20px] top-[500px]"
        >
          <img
            loading="lazy"
            src="/image/Homepage/enroll_chip.svg"
            className="max-[550px]:relative max-[550px]:bottom-[280px] max-[550px]:w-[60%] right-[10px]"
            alt=""
          />
        </ScrollSpeed>
        <ScrollSpeed
          speed={-0.8}
          className="absolute z-10 right-[30px] top-[350px]"
        >
          <img
            loading="lazy"
            src="/image/Homepage/google_certificate.svg"
            className="max-[550px]:relative max-[550px]:bottom-[210px] max-[550px]:w-[60%] -right-[40px]"
            alt=""
          />
        </ScrollSpeed>

        <ScrollSpeed
          speed={-0.8}
          className="absolute z-10  md:bottom-[105px] bottom-[150px] right-0 md:right-[75px]"
        >
          <img
            loading="lazy"
            src="/image/Homepage/google_review_chip.svg"
            className="max-[550px]:relative max-[550px]:-bottom-[150px] max-[550px]:w-[70%] -right-[40px]"
            alt=""
          />
        </ScrollSpeed>
      </div>
    </div>
  );
}

export default Hero;
