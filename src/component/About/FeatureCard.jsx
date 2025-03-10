import React from "react";

const FeatureCard = () => {
  return (
    <>
      <div className="px-[140px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] mt-[134px] gap-[70px] flex max-[1024px]:flex-col max-[1024px]:px-[20px]">
        <div className="w-[324px] max-[1024px]:w-full">
          <img src="/image/video_logo.svg" alt="" />
          <p className="text-lg font-[500] mt-[30px]">Online Education</p>
          <p className="text-[16px] mt-[36px] leading-[19px] text-paraColor">
            We are one of the leading E-Leaarning platforms. Teaching and
            mentoring students to get to their higher potential. We at IT Nova aim
            to provide all round solutions to the problems faced by students.
          </p>
        </div>

        <div className="w-[324px] max-[1024px]:w-full">
          <img src="/image/click_logo.svg" alt="" />
          <p className="text-lg font-[500] mt-[30px]">Practical Skills</p>
          <p className="text-[16px] mt-[36px] leading-[19px] text-paraColor">
            To bridge the gap between what is being taught and what is needed by
            the industry. We are here to address major issues by students and
            catering to all the requirements they have to be the best
          </p>
        </div>

        <div className="w-[324px] max-[1024px]:w-full">
          <img src="/image/message_logo.svg" alt="" />
          <p className="text-lg font-[500] mt-[30px]">Support Team</p>
          <p className="text-[16px] mt-[36px] leading-[19px] text-paraColor">
            The Technical Support Team is international, multilingual and always
            ready to go above and beyond for our merchants.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
