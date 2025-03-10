import React from "react";
import EmblaCarousel from "./Carousel";

function Cirtificate() {
  return (
    <div className=" mt-[20px] flex justify-between relative overflow-hidden">
      <div className="border flex md:flex-row flex-col border-[#D3D3D3] justify-between md:gap-[100px] rounded-[20px] w-full py-10 bg-white relative overflow-hidden">
        
        <div className=" w-full md:w-[50%] px-[50px] flex justify-between flex-col pb-[100px] ">
         <div>
         <p className="text-sm font-semibold tracking-[3px]">CERTIFICATE</p>
          <h5 className="text-[35px] font-bold leading-[38px] mt-[30px]">
            The certification of It Nova
          </h5>
         </div>

          <p className="text-[15px] mt-[30px]  text-paraColor ">
            It Nova education certificates are recognitions and honor of your
            hardwork.
          </p>
        </div>

        <div className=" w-full md:w-[70%] md:pr-2 md:px-0 px-4  flex justify-center items-center   ">
         <EmblaCarousel/>
        </div>
      </div>
    </div>
  );
}

export default Cirtificate;
