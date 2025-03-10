import Link from "next/link";
import React from "react";

const MakingBetter = () => {
  return (
    <>
      <div className="px-[140px] mt-[174px] max-[1439px]:px-[120px]  max-[1278px]:px-[100px] max-[1439px]:mt-[100px] max-[1024px]:px-[20px] ">
        <div className="w-full rounded-[20px] border border-[#D3D3D3] bg-white relative">
          <p className="text-sm font-bold tracking-[3px] mt-[40px] ml-[40px]">
            MAKING BETTER
          </p>

          <div className="flex justify-between mt-[50px] px-[40px] max-[1439px]:px-[32px] max-[1439px]:mt-[45px] max-[1024px]:flex-col">
            <h5 className="text-[55px]  font-semibold leading-[60px] w-[260px] max-[1024px]:w-full -tracking-[1px]  max-[550px]:text-[34px] max-[550px]:w-full max-[550px]:leading-[39px]   max-[1024px]:text-[40px]  max-[1439px]:text-[45px] max-[1439px]:leading-[48px]">
              We are on a Mission
            </h5>
            <p className="text-[16px] w-[400px] mr-[210px] max-[550px]:text-sm  max-[1024px]:w-full text-paraColor max-[1439px]:w-[360px]  max-[1024px]:mt-[30px]">
              We're on a mission to spread around and help every possible
              individual who needs us. Our vision is to diversify education
              standards and make the youth Job Ready. #Revolutionize How India Learns
            </p>
          </div>
          <img src="/image/horizontal_divider.svg" className="mt-[56px]" />

          <div className="flex p-[40px] gap-[96px] max-[550px]:gap-[20px]">
            <div className="w-[153px] max-[550px]:w-1/2">
              <p className="text-sm font-semibold tracking-[3px] text-paraColor max-[1024px]:text-xs max-[550px]:text-[10px] max-[550px]:tracking-[1px]">
                AVAILABLE JOB OPPORTUNITY
              </p>
              <h5 className="text-[55px] font-semibold mt-[30px] max-[1024px]:text-[40px] max-[1024px]:mt-[10px] max-[550px]:text-[35px]">
                40+
              </h5>
            </div>

            <div className="w-[183px] max-[550px]:w-1/2">
              <p className="text-sm font-semibold tracking-[3px] text-paraColor max-[1024px]:text-xs max-[550px]:tracking-[1px] max-[550px]:text-[10px]">
                IT NOVA IS IN TWO COUNTRIES
              </p>
              <h5 className="text-[55px] max-[1024px]:text-[40px] font-semibold mt-[30px] max-[1024px]:mt-[10px] max-[550px]:text-[35px]">
                100+
                <sub
                  className="max-[1024px]:text-sm text-[16px] max-[550px]:text-xs "
                  style={{
                    verticalAlign: "sub",

                    fontWeight:500,
                  }}
                >
                  Employees
                </sub>
              </h5>
            </div>
          </div>

          <Link
            href="/career"
            className="text-lg p-5 rounded-[130px] bg-black text-white absolute bottom-[40px] max-[1024px]:text-[16px] right-[40px] max-[1024px]:hidden"
            style={{
              boxShadow: " 0px 4px 14px #00000040",
            }}
          >
            View all job offers
          </Link>
        </div>
      </div>
    </>
  );
};

export default MakingBetter;
