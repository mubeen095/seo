import Link from "next/link";
import React from "react";

const WorkWithUs = () => {
  return (
    <>
      <div className="px-[140px] mt-[174px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px]">
        <div className="w-full rounded-[20px] flex border border-[#D3D3D3] bg-white max-[1024px]:flex-col max-[1024px]:hidden">
          <div className="p-[40px]  max-[1024px]:w-full">
            <p className="text-sm font-bold tracking-[3px]">WORK WITH US</p>
            <h5 className="text-[55px]  max-[1439px]:text-[40px] font-bold w-[492] leading-[60px] mt-[50px]">
              Driven by Creative Minds
            </h5>
            <p className="text-[16px] w-[400px] text-paraColor mt-[50px]">
              Our commitment and love for service is known to all. Our Alumni
              and people working with us define us with the best compliments.
            </p>
          </div>

          <div className="w-full relative overflow-hidden flex  ">
            <img
              src="/image/creative.png"
              className="w-[318px]  max-[1439px]:w-[300px] h-[92px] absolute top-[10px] left-0"
            />
            <img
              src="/image/workSmart.png"
              className="w-[462px] max-[1439px]:w-[330px] h-[93px] absolute left-[200px] max-[1439px]:left-[70px] top-[76px] "
            />
            <img
              src="/image/culture.png"
              className="w-[295px] h-[106px] absolute left-0 top-[125px] "
            />
            <img
              src="/image/flower.svg"
              className="absolute left-[118px] top-[95px] "
            />
            <img
              src="/image/redMoon.svg"
              className="absolute left-[341px] top-[175px]"
            />

            <Link
              href="/career"
              className="text-lg p-5 rounded-[130px] bg-black text-white absolute bottom-[40px] right-[40px]"
              style={{
                boxShadow: " 0px 4px 14px #00000040",
              }}
            >
              View all job offers
            </Link>
          </div>
        </div>

        <div className="w-full rounded-[20px] h-[750px] max-[550px]:h-[600px] flex border border-[#D3D3D3] bg-white max-[1024px]:flex-col min-[1025px]:hidden">
          <div className="p-[20px]  ">
            <p className="text-sm font-bold tracking-[3px]">WORK WITH US</p>
            <h5 className="  text-[40px] font-bold  max-[550px]:text-[30px]  leading-[50px] max-[550px]:leading-[35px] mt-[30px]">
              Driven by Creative Minds
            </h5>
            <p className="text-[16px] text-paraColor mt-[30px]">
              Our commitment and love for service is known to all. Our Alumni
              and people working with us define us with the best compliments.
            </p>
          </div>

          <Link
            href="/career"
            className="text-[16px] py-3 rounded-[130px] bg-black text-white w-[180px] ml-[50px] flex justify-center items-center"
            style={{
              boxShadow: " 0px 4px 14px #00000040",
            }}
          >
            View all job offers
          </Link>

          <div className="w-full relative overflow-x-hidden flex h-[295px]  ">
            
            <img
              src="/image/creative.png"
              className="w-[240px] max-[550px]:w-[180px] h-[92px] max-[550px]:h-auto absolute top-[40px] left-[50px]"
            />
            <img
              src="/image/workSmart.png"
              className="w-[330px] h-[93px] absolute left-[180px] top-[116px] max-[550px]:w-[210px] max-[550px]:h-auto max-[550px]:left-[100px] max-[550px]:top-[90px] "
            />
            <img
              src="/image/culture.png"
              className="w-[265px] h-[106px]  absolute left-[50px] top-[185px] max-[550px]:w-[180px] max-[550px]:h-auto max-[550px]:top-[130px] "
            />
            <img
              src="/image/flower.svg"
              className="absolute left-[118px] top-[115px] max-[550px]:top-[80px] max-[550px]:left-[50px] "
            />
            <img
              src="/image/redMoon.svg"
              className="absolute left-[341px] top-[205px] max-[550px]:top-[160px] max-[550px]:left-[200px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithUs;
