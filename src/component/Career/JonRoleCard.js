import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const JonRoleCard = ({ para1, heading1, location, locationName }) => {
  return (
    <>
      <div
        // href="/job/Inside-sales-strategist"
        className="w-[304px] max-[1439px]:max-w-[273px] max-[1024px]:max-w-full max-[1024px]:w-full  max-[1439px]:p-[27px]  max-[1278px]:max-w-[245px]  max-[1278px]:p-[24px] border border-[#D3D3D3] p-[30px] rounded-[20px] bg-white "
      >
        <p className="text-sm font-bold  max-[1439px]:text-xs ">{para1}</p>
        <h5 className="text-[35px] font-[500] leading-[38px] mt-[36px]  max-[1439px]:mt-[32px]  max-[1439px]:text-[31px]  max-[1439px]:leading-[34px]">
          {heading1}
        </h5>
        <p className="text-sm  font-semibold mt-[40px] text-paraColor  max-[1439px]:text-xs  max-[1439px]:mt-[36px]  max-[1278px]:mt">
          {location}
        </p>
        <h5 className="text-[16px] font-[500] mt-[14px]  max-[1439px]:text-sm  max-[1439px]:mt-[12px]">
          {locationName}
        </h5>
        <img src="/image/hor_devider.svg" className="mt-[30px] w-full" />
        <a href="https://forms.gle/U7vqSzZqetppeCnT8" target="_blank" className="text-[20px] font-semibold mt-[32px] flex items-center gap-2  max-[1439px]:text-lg  max-[1439px]:mt-[28px]  max-[1278px]:text-[16px]  max-[1278px]:mt-[24px]">
          Apply <GoArrowUpRight />
        </a>
      </div>
    </>
  );
};

export default JonRoleCard;
