import Link from "next/link";
import React from "react";
import ScrollSpeed from "../reuseable/ScrollSpeed";

const HeroCareer = () => {
  return (
    <>
      <div className="md:pt-[84px] pt-[100px]  flex  items-center flex-col relative text-center">
        <ScrollSpeed speed={-1.1} className="absolute top-[100px] md:top-[183px]">
          <img src="/image/about-banner.png" className=" md:w-[807px] h-[300px]  md:h-[476px]" />
        </ScrollSpeed>
        <p className="text-center text-black text-sm font-semibold tracking-[3px]">
          CAREER
        </p>
        <h5 className="text-[75px] leading-[82px] w-[700px] mt-[50px]  font-bold text-black -tracking-[1px]  max-[1439px]:text-[60px] max-[1026px]:w-[400px]  max-[550px]:w-[350px] max-[550px]:text-[35px]   max-[1026px]:text-[45px]  max-[1026px]:leading-[50px]  max-[1439px]:leading-[65px]  max-[1439px]:w-[846px]">
          Let's make better <br /> together join us
        </h5>

        <p className="mt-[119px] text-[16px] leading-[19px] text-paraColor w-[560px] max-[570px]:w-[340px]">
          The word perfection defines everything about It Nova. We tend to
          provide what's best available to our students and help them attain the
          knowledge they always wanted.
        </p>
        <Link
          href="/about"
          className="text-lg p-5 rounded-[130px] bg-black text-white mt-[39px] cursor-pointer z-50"
          style={{
            boxShadow: " 0px 4px 14px #00000040",
          }}
        >
          About Us
        </Link>
      </div>
    </>
  );
};

export default HeroCareer;
