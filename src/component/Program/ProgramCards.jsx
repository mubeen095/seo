import React from "react";

function ProgramCards() {
  return (
    <div className="w-full flex  gap-4 max-[1024px]:flex-col items-center justify-between ">
      <div className="salary-card ">
        <p className="salary-card-para">AVG CTC</p>
        <h6 className="salary-card-heading">35-40 Lakhs/Year</h6>
        <p className="salary-card-para-grey">
          An ML professional with 5+ Years of experience is paid an average
          salary of 35-50 LPA.
        </p>
        <img src="/image/graph.svg" alt="" />
        {/* <div className="image-curtains animate"></div> */}
        <p className="fiveyearEx ">23 Lakh Jobs · 2022</p>
        <p className="lessEx">8 Lakh Jobs · 2020</p>
      </div>
      <div className="job-card relative">
        <p className="salary-card-para">JOB</p>
        <h6 className="salary-card-heading">25 Lakhs Jobs</h6>
        <p className="salary-card-para-grey">
          As per Gartner, Artificial Intelligence &amp; Machine learning will
          create 23 lakh job opening by 2021-22.
        </p>
        <img src="/image/range.svg" alt="" />
        {/* <div className="image-curtains animate"></div> */}
        <p className="range-para-1">23 Lakh Jobs · 2022</p>
        <p className="range-para-2">8 Lakh Jobs · 2020</p>
      </div>
      <div className="lift-card relative overflow-hidden group">
        <p className="salary-card-para">LIFT</p>
        <h6 className="salary-card-heading">Analytics Infra 5x Lift</h6>
        <p className="salary-card-para-grey">
          By 2024, 75% enterprises will shift to operationalizing AI, Driving 5x
          increase in analytics infrastructures.
        </p>
        <div className=" w-ful overflow-x-hidden hover:peer-[]:">
          <img
            src="/image/ai_alpha.svg"
            alt=""
            className=" absolute left-[50%] translate-x-[-50%] bottom-[10%] z-0   "
          />
          <img
            src="/image/ai_left_cloud.png"
            alt=""
            className=" absolute left-[-50px] bottom-[-20px] transition-cutome group-hover:left-[-100px]  "
          />
          <img
            src="/image/ai_right_cloud.png"
            alt=""
            className=" absolute right-[-40px]  group-hover:right-[-200px] transition-cutome"
          />
          <img
            src="/image/ai_texture.png"
            alt=""
            className=" absolute w-full h-full"
          />
          <p className=" absolute bottom-[40px] left-[50%] translate-x-[-50%]  text-white">
            Artificial Intteligence
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgramCards;
