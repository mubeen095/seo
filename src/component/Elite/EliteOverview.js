"use client";
import { HeroOverviewData } from "@/data/Elite/Hero";
import React, { useState } from "react";

const EliteOverview = ({ page }) => {
  const data = HeroOverviewData[page];
  const [overViewActive, setOverviewActive] = useState(0);
  return (
    <>
      <div className="w-[1300px] max-[1300px]:px-[50px] max-[1300px]:w-full p-[20px] max-[550px]:p-[20px] my-0 mx-auto bg-[#f4f8fb] ">
        <h2 className="text-[28px] font-bold mb-[20px] text-left text-[#333] w-full">
          Overview
        </h2>
        <p>{data?.desc}.</p>
        <div className="flex border-b border-[#ddd] mb-[20px] w-full">
          <button
            className={`${
              overViewActive === 0
                ? "text-primary border-b-[5px] border-primary"
                : "text-[#333]"
            } py-[10px] px-5 bg-transparent cursor-pointer text-[16px] max-[1024px]:text-sm transition-all duration-300 ease-in-out max-[550px]:text-xs `}
            onClick={() => setOverviewActive(0)}
          >
            {data?.tab1}
          </button>

          <button
            className={`${
              overViewActive === 1
                ? "text-primary border-b-[5px] border-primary"
                : "text-[#333]"
            } py-[10px] px-5 bg-transparent cursor-pointer text-[16px] max-[1024px]:text-sm max-[550px]:text-xs  transition-all duration-300 ease-in-out `}
            onClick={() => setOverviewActive(1)}
          >
            {data?.tab2}
          </button>

          <button
            className={`${
              overViewActive === 2
                ? "text-primary border-b-[5px] border-primary"
                : "text-[#333]"
            } py-[10px] px-5 bg-transparent cursor-pointer text-[16px] max-[1024px]:text-sm  transition-all duration-300 ease-in-out max-[550px]:text-xs `}
            onClick={() => setOverviewActive(2)}
          >
            {data?.tab3}
          </button>
        </div>

        <div className="bg-white p-[20px] rounded-[8px] border border-[#ddd]">
          {overViewActive === 0 && (
            <>
              <div id="tab1" className="block min-h-[300px] overflow-x-auto">
                <p>{data?.tab1desc}</p>
                <table className="w-full mt-4">
                  <tbody>
                    <tr>
                      {data?.tab1TableHead?.map((data1, index) => (
                        <>
                          <th
                            key={index}
                            className="bg-[#f0f0f0] p-[10px] text-left border border-[#ddd] whitespace-nowrap "
                          >
                            {data1}
                          </th>
                        </>
                      ))}
                    </tr>
                    <tr>
                      {data?.tab1Tabledata1?.map((data1, index) => (
                        <>
                          <td
                            key={index}
                            className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap"
                          >
                            {data1}
                          </td>
                        </>
                      ))}
                    </tr>
                    <tr>
                      {data?.tab1Tabledata2?.map((data1, index) => (
                        <>
                          <td
                            key={index}
                            className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap"
                          >
                            {data1}
                          </td>
                        </>
                      ))}
                    </tr>
                    <tr>
                      {data?.tab1Tabledata3?.map((data1, index) => (
                        <>
                          <td
                            key={index}
                            className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap"
                          >
                            {data1}
                          </td>
                        </>
                      ))}
                    </tr>

                    <tr>
                      {data?.tab1Tabledata4?.map((data1, index) => (
                        <>
                          <td
                            key={index}
                            className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap"
                          >
                            {data1}
                          </td>
                        </>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {overViewActive === 1 && (
            <>
              <div className="min-h-[300px]">
                <div className="mb-[10px]  ">
                  <span className="text-[20px] font-bold w-[400px]">
                    Basic Understanding:
                  </span>
                  {data?.tab2Under}
                </div>

                <div className="mb-[10px]  ">
                  <span className="text-[20px] font-bold w-[400px]">
                    Logical Thinking:
                  </span>
                  {data?.tab2Logical}
                </div>

                <div className="mb-[10px]  ">
                  <span className="text-[20px] font-bold w-[400px]">
                    Basic Mathematics:
                  </span>
                  {data?.tab2Math}
                </div>
              </div>
            </>
          )}

          {overViewActive === 2 && (
            <>
              <div
                className="border-[2px] border-[rgb(215,215,215)] p-[14px] rounded-[10px] min-h-[300px]"
                style={{
                  boxShadow: " 0 4px 8px rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-[22px]">{data?.tab3para}</p>

                {data?.tab3Array?.map((data1, index) => (
                  <>
                    <div key={index} className="flex mt-[14px] items-center">
                      <span className="mr-[10px] text-[25px]">
                        {data1?.icon}
                      </span>
                      <p className="text-xl">{data1?.desc}:</p>
                    </div>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EliteOverview;
