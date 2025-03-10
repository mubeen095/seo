"use client";
import Cirtificate from "@/component/Home/Cirtificate";
import Experts from "@/component/Home/Experts";
import GlobalCards from "@/component/Home/GlobalCards";
import PragramDetail from "@/component/Home/PragramDetail";
import Refer from "@/component/Home/Refer";
import SupportCards from "@/component/Home/SupportCards";
import Curiculam from "@/component/Program/Curiculam";
import ProgramCards from "@/component/Program/ProgramCards";
import ProgramHeader from "@/component/Program/ProgramHeader";
import ProgramHighlight from "@/component/Program/ProgramHighlight";
import { PROGRAMDATA } from "../../../data/Elite/Programs";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
const Program = ({ params }) => {
  const { page } = params;

  const [pageData, setPageData] = useState(PROGRAMDATA[Number(page) - 1]);

  useEffect(() => {
    setPageData(PROGRAMDATA[Number(page) - 1]);
  }, [page]);
  const head = (
    <p>
      Industury experts from teach at  <br /> It Nova{" "}
    </p>
  );
  return (
    <>
      <ProgramHeader data={pageData} />
      <ProgramHighlight />
      <div className="  max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px] px-[140px] mt-[100px] relative ">
        <Experts
          title={"CAREER"}
          text={
            "Secure your future with our best hiring companies from all over the world."
          }
          head={head}
        />
      </div>
      <div className=" max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px] px-[140px] mt-[30px] ">
        <Cirtificate />
      </div>
      <div className=" max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px] px-[140px] flex justify-between items-center w-full mt-[30px] ">
        <ProgramCards />
      </div>
      <div className="  max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px] px-[140px] mt-[30px] mb-10 ">
        <Refer />
      </div>
      <div className=" max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px] px-[140px] mt-[30px] mb-10 ">
        <PragramDetail data={pageData} />
      </div>

      <div className="  max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px] px-[140px] mt-[30px] mb-10 ">
        <Curiculam data={pageData.CURRICULUM} />
      </div>
      <div className="  max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px] px-[140px] mt-[30px] mb-10 ">
        <SupportCards />
      </div>
    </>
  );
};

export default Program;
