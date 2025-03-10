import React from "react";

const ScrollableCareer = () => {
  return (
    <>
      <div className="mt-[119px] w-full overflow-x-hidden ">
        <div className="flex gap-[45px] animate-customScroll whitespace-nowrap">
          {[1, 2, 3, 4].map((index) => (
            <>
              <div
              key={index}
                className="min-w-[435px] h-[508px] rounded-[20px] max-[550px]:min-w-[370px] max-[550px]:h-[410px]  max-[550px]:min-w-[370px] max-[550px]:h-[410px]   flex flex-col p-[40px] justify-end"
                style={{
                  background: `url("/image/slideCard/culture_card1.png")`,
                  backgroundSize: "cover", // Ensures the image covers the entire div
                  backgroundPosition: "center", // Centers the image
                }}
              ></div>
              <div
                className="min-w-[435px] h-[508px] rounded-[20px] max-[550px]:min-w-[370px] max-[550px]:min-w-[370px] max-[550px]:h-[410px]  max-[550px]:h-[410px]  flex flex-col p-[40px] justify-end"
                style={{
                  background: `url("/image/slideCard/culture_card2.png")`,
                  backgroundSize: "cover", // Ensures the image covers the entire div
                  backgroundPosition: "center", // Centers the image
                }}
              ></div>
              <div
                className="min-w-[435px] h-[508px] rounded-[20px] max-[550px]:min-w-[370px] max-[550px]:h-[410px]  flex flex-col p-[40px] justify-end"
                style={{
                  background: `url("/image/slideCard/culture_card3.png")`,
                  backgroundSize: "cover", // Ensures the image covers the entire div
                  backgroundPosition: "center", // Centers the image
                }}
              ></div>
              <div
                className="min-w-[435px] h-[508px] rounded-[20px] max-[550px]:min-w-[370px] max-[550px]:h-[410px]   flex flex-col p-[40px] justify-end"
                style={{
                  background: `url("/image/slideCard/culture_card4.png")`,
                  backgroundSize: "cover", // Ensures the image covers the entire div
                  backgroundPosition: "center", // Centers the image
                }}
              ></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollableCareer;
