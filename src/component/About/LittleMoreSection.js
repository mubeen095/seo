import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const LittleMoreSection = () => {
  return (
    <>
      <div className="px-[140px] max-[1439px]:px-[120px]  max-[1278px]:px-[100px] max-[1439px]:mt-[100px] mt-[115px]  max-[1024px]:px-[20px] ">
        <div className="w-full border border-[#D3D3D3] bg-white rounded-[20px]">
          <p className="text-sm font-bold pt-[40px] tracking-[3px] px-[40px]">
            LITTLE MORE
          </p>
          <div className="mt-[50px] flex justify-between px-[40px] max-[1439px]:px-[32px] max-[1439px]:mt-[45px] max-[1024px]:flex-col">
            <h4 className="w-[450px] leading-[60px] font-bold text-[55px]  max-[550px]:text-[36px] max-[550px]:w-[244px] max-[550px]:leading-[39px]   max-[1024px]:text-[40px] max-[1439px]:w-[405px] max-[1439px]:text-[45px] max-[1439px]:leading-[48px]">
              Some Words about It Nova
            </h4>

            <p className="w-[400px]  max-[1024px]:w-full text-[16px] text-paraColor max-[1439px]:w-[360px]  max-[1024px]:mt-[50px]">
              It Nova is an online Education platform, providing students with
              pristine study opportunities and a chance to learn and grow.
              Started with a vision to solve problems of students and make them
              job ready or exceptional in their fields. With our extensive
              programs and courses we try to include excellence in our students.
              We get students the best study materials and the best teachers, so
              that you grow three fold.
            </p>
          </div>
          <img src="/image/horizontal_divider.svg" className="mt-[59px]" />

          <div className="flex justify-between px-[50px] py-[40px]  max-[1024px]:px-[30px]  max-[1024px]:flex-col">
            <h5 className="text-[25px] font-bold w-[185px] relative ">
              <span className="flex items-center gap-1">
                Find us on <FaHeart className="text-red-500" />
              </span>
              social media
            </h5>

            <div className="flex items-center gap-3  max-[1024px]:mt-[50px] flex-wrap">
              <a
                href="https://www.linkedin.com/company/it-nova-pvt-ltd/"
                target="_blank"
                className="border border-[#D3D3D3] text-[#5B5B5B] rounded-[40px] px-[10px] py-[7px] flex items-center gap-1"
              >
                <FaLinkedin />
                LinkedIn
                <GoArrowUpRight />
              </a>

              {/* <a
                href=""
                className="border border-[#D3D3D3] text-[#5B5B5B] rounded-[40px] px-[10px] py-[7px] flex items-center gap-1"
              >
                <SiGmail />
                Mail
                <GoArrowUpRight />
              </a> */}
              {/* 
              <a
                href=""
                className="border border-[#D3D3D3] text-[#5B5B5B] rounded-[40px] px-[10px] py-[7px] flex items-center gap-1"
              >
                <BsTwitterX />
                X
                <GoArrowUpRight />
              </a> */}

              <a
                href="https://www.instagram.com/itnova.in?igsh=c2g0eXljeG4ycThm"
                target="_blank"
                className="border border-[#D3D3D3] text-[#5B5B5B] rounded-[40px] px-[10px] py-[7px] flex items-center gap-1"
              >
                <AiFillInstagram />
                Instagram
                <GoArrowUpRight />
              </a>

              {/* <a
                href=""
                className="border border-[#D3D3D3] text-[#5B5B5B] rounded-[40px] px-[10px] py-[7px] flex items-center gap-1"
              >
                <FaFacebook />
                Facebook
                <GoArrowUpRight />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LittleMoreSection;
