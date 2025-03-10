import React from "react";
import ScrollSpeed from "../reuseable/ScrollSpeed";

const HeroAbout = () => {
  return (   
    <>
      <div className="pt-[84px] pb-[146px] flex justify-center items-center relative">
        <div>
          <p className="text-center text-black text-sm font-semibold tracking-[3px]">
            ABOUT IT Nova
          </p>
          <h5 className="text-[75px] text-center max-[1439px]:text-[60px] max-[1026px]:w-[400px]  max-[550px]:w-[350px] max-[550px]:text-[35px]   max-[1026px]:text-[45px]  max-[1026px]:leading-[50px]  max-[1439px]:leading-[65px] leading-[82px] w-[1045px]  max-[1439px]:w-[846px] mt-[50px]  font-bold text-black -tracking-[1px]">
          Revolutionizing How India Learns 
          </h5>
        </div>
        
          <ScrollSpeed speed={-1} className="absolute top-[100px]">
            {/* // className=" absolute left-[-10px] bottom-[-120px] w-[500px] h-[370px] z-10  " */}
            <img
            className=" h-[300px] md:h-[577px] "
              src="/image/about-banner.png"
            />
          </ScrollSpeed>
        
      </div>
    </>
  );
};

export default HeroAbout;
