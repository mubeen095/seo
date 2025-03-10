import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[94vh] w-full font-inter flex justify-center items-center flex-col bg-no-repeat"
      style={{
        background: `url("/image/about-banner.png")`,
        backgroundSize: "contain", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }}
    >
      
      <p className="text-center text-black text-sm font-semibold tracking-[3px]">
        ABOUT IT Nova
      </p>
      <h5 className="text-[70px] leading-[82px] w-[1000px] mt-[40px]  font-bold text-black text-center ">
        Where ideas are talked about and growth is focused upon
      </h5>
     
    </div>
  );
};

export default Hero;
