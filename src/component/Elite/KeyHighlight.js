import React from "react";
import { TfiTimer } from "react-icons/tfi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { VscFolderOpened } from "react-icons/vsc";
import { FaCertificate } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { RiPsychotherapyLine } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";

const Card = ({ children }) => {
  return (
    <div
      className="w-[22%] max-[1024px]:w-[40%] max-[550px]:w-[100%] bg-[#f8f9fa] p-[20px] mb-[20px] mr-[2.5%] rounded-lg flex items-center text-sm font-semibold"
      style={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
      {/* <TfiTimer className="text-2xl text-[#007bff] mr-[10px]" />
      <p>100+ Hrs Instructor Led Training</p> */}
    </div>
  );
};

const KeyHighlight = () => {
  return (
    <>
      <div className="bg-white p-[20px] m-auto max-w-[1300px] max-[1300px]:px-[50px] max-[550px]:p-[20px] max-[1300px]:w-full">
        <h3 className="text-[32px] font-bold mb-[20px]">Key Highlights</h3>
        <div className="flex flex-wrap justify-evenly max-[1024px]:justify-between">
          <Card>
            <TfiTimer className="text-2xl text-[#007bff] mr-[10px]" />
            <p>100+ Hrs Instructor Led Training</p>
          </Card>

          <Card>
            <FaRegCirclePlay className="text-2xl text-[#007bff] mr-[10px]" />
            <p>Life time access</p>
          </Card>

          <Card>
            <VscFolderOpened className="text-2xl text-[#007bff] mr-[10px]" />
            <p>Project discussions</p>
          </Card>

          <Card>
            <FaCertificate className="text-2xl text-[#007bff] mr-[10px]" />
            <p>Certification</p>
          </Card>

          <Card>
            <SlCalender className="text-2xl text-[#007bff] mr-[10px]" />
            <p>Weekend Classes</p>
          </Card>

          <Card>
            <RiPsychotherapyLine className="text-2xl text-[#007bff] mr-[10px]" />
            <p>Mentor Support</p>
          </Card>

          <Card>
            <FaLanguage className="text-2xl text-[#007bff] mr-[10px]" />
            <p>Multi-language</p>
          </Card>

          <Card>
            <RiShieldCheckLine className="text-2xl text-[#007bff] mr-[10px]" />
            <p>No-cost EMI Option</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default KeyHighlight;
