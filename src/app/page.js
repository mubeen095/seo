"use client";
import Hero from "@/component/Home/Hero";
import HomeCard from "@/component/Home/HomeCard";
import LogoScroll from "@/component/reuseable/companyAnimation/LogoScroll";
import { BsLightningCharge, BsThreeDots } from "react-icons/bs";
import { FaArrowRight, FaFireAlt } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { GiMechanicalArm } from "react-icons/gi";
import SmallCard from "@/component/Home/SmallCard";
import SmallCard2 from "@/component/Home/SmallCard2";
import Experts from "@/component/Home/Experts";
import GlobalCards from "@/component/Home/GlobalCards";
import Community from "@/component/Community/Community";
import Review from "@/component/Home/Review";
import Support from "@/component/Home/Support";
import SupportCards from "@/component/Home/SupportCards";
import Blogs from "@/component/Home/Blogs";
import Aos from "aos";
import { useEffect, useState } from "react";
import { PROGRAMDATA } from "@/data/Elite/Programs";

export default function Home() {
  const filters = [
    {
      title: "Trending",
      icon: <FaFireAlt />,
    },
    {
      title: "All",
      icon: "",
    },
    {
      title: "Computer Science",
      icon: <MdOutlineComputer />,
    },
    {
      title: "Electrical",
      icon: <BsLightningCharge />,
    },
    {
      title: "Mechanical",
      icon: <GiMechanicalArm />,
    },
    {
      title: "Other",
      icon: <BsThreeDots />,
    },
  ];
  const head = (
    <p>
      Industry <br /> Professionals <br /> From
    </p>
  );

  const [activeFilter, setActiveFilter] = useState("Trending");
  const [filterData, setFilterData] = useState(PROGRAMDATA?.slice(0, 5));

  useEffect(() => {
    if (activeFilter === "All") {
      setFilterData(PROGRAMDATA.slice(0, 10));
    } else if (activeFilter === "Trending") {
      setFilterData(PROGRAMDATA.slice(0, 5));
    } else if (activeFilter === "Computer Science") {
      setFilterData(
        PROGRAMDATA.filter((ele) => ele.title === "COMPUTER SCIENCE")
      );
    } else if (activeFilter === "Electrical") {
      setFilterData(
        PROGRAMDATA.filter(
          (ele) => ele.title === "ELECTRONICS AND COMMUNICATION ENGINEERING"
        )
      );
    } else if (activeFilter === "Mechanical") {
      setFilterData(
        PROGRAMDATA.filter((ele) => ele.title === "MECHANICAL ENGINEERING")
      );
    } else if (activeFilter === "Other") {
      setFilterData(PROGRAMDATA?.slice(0, 5));
    }
  }, [activeFilter]);

  return (
    <div className=" relative min-h-[200vh] ">
      <Hero />
      <div className=" mt-[110px] max-w-[1400px] mx-auto ">
        <LogoScroll />
      </div>
      <div className=" px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] gap-[50px]  min-[1024px]:flex-row flex-col  mt-[120px] flex items-center justify-between">
        <HomeCard
          title={"PARTNERSHIP"}
          desc={"In Partnership with Google for Education"}
          isCenter={true}
          imag2={"/image/googleEducationWhite.png"}
          image1={"/image/IT-removebg-preview.png"}
        />
        <HomeCard
          title={"RECOGNITION"}
          desc={"Recognized and Certified by the Nation"}
          isCenter={false}
          imag2={"/image/skillimndia.png"}
          image1={"/image/nsdc.png"}
        />
      </div>
      <div id="onlineCourse" className=" px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] mx-auto mt-[120px]">
        <div className="online-course-head-container">
          <p className="text-[14px] font-[700] text-black tracking-[3px] ">
            COURSE
          </p>
          <h3 className=" text-[55px]  w-[470px] tracking-[-2px] mt-[50px] font-[700] leading-[60px] max-[1439px]:text-[49px] max-[1439px]:leading-mt-[54px] max-[1024px]:text-[36px] max-[1024px]:w-full max-[1024px]:leading-[40px] ">
            Our Online Training Programs
          </h3>
          <p className=" md:text-[16px] text-[12px] md:mt-[47px] mt-[37px] font-[400] ">
            All courses has certified Certificate partners.
          </p>
        </div>
        <div className=" flex items-center gap-4 mt-[80px] flex-wrap">
          {filters?.map((item, index) => (
            <button
              key={`filter-${index}`}
              id="btnTrending"
              className={`bg-white/70 flex items-center gap-1 px-[20px] md:text-[20px] py-[15px] text-[16px] shadow-lg rounded-[130px]`}
              onClick={() => setActiveFilter(item.title)}
            >
              {" "}
              {item.icon} <span>{item.title}</span>{" "}
            </button>
          ))}
        </div>
        <p className=" md:text-[14px] font-[700] tracking-[3px] md:mt-[64px] mt-[51px]  ">
          5 TRENDING COURSES FOUND
        </p>
        <div className=" mt-[100px]  flex flex-wrap justify-start gap-8 ">
          {filterData?.map((item, index) => (
            <SmallCard index={index} data={item} key={`smallCard-${index}`} />
          ))}
        </div>
      </div>
      <div className="   px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] mt-[100px] overflow-hidden  flex flex-wrap justify-start gap-8 ">
        <Experts
          title={"EXPERTS"}
          head={head}
          text={
            "Get better knowledge from our best industry experts from the best of the companies."
          }
        />
      </div>
      <div className="px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] mt-[100px] overflow-hidden flex flex-wrap justify-start gap-8">
        <GlobalCards />
      </div>
      <div
        id="demoNav"
        className=" px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] mx-auto mt-[120px]"
      >
        <div className="online-course-head-container">
          <p className="text-[14px] font-[700] text-black tracking-[3px] ">
            COURSE
          </p>
          <h3 className=" text-[25px] md:text-[55px] w-[470px] tracking-[-2px] mt-4 md:mt-[50px] font-[700] leading-[60px] ">
            Explore our Free programs
          </h3>
          <div className=" flex md:flex-row flex-col md:items-center items-start justify-start md:justify-between">
            <p className=" md:text-[16px] text-[12px] md:mt-[47px] mt-[37px] font-[400] ">
              All courses has certified Certificate partners.
            </p>
            <a
              id="btnViewMore"
              className="  md:mt-0 mt-2 px-4 py-2 w-[140px] flex items-center gap-1 cursor-pointer bg-white rounded-[20px] shadow-md  "
            >
              View more <FaArrowRight className=" rotate-[-45deg] " />
            </a>
          </div>
        </div>
      </div>
      <div className=" mt-4 md:mt-[100px] px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] flex flex-wrap justify-center md:justify-start gap-8 ">
        {[0, 1, 2].map((item, index) => (
          <SmallCard2 index={index} key={`smallCard-${index}`} />
        ))}
      </div>
      <div className="px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] mt-[100px] mb-[100px]  overflow-hidden  flex flex-wrap justify-center gap-8">
        <Community />
      </div>
      <div
        id="reviewNav"
        className="px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] mt-[100px] mb-[100px]  overflow-hidden  flex flex-wrap justify-center gap-8"
      >
        <div className=" w-full  ">
          <p className="feedback-para">FEEDBACK</p>
          <h4 className="text-[55px] font-bold w-[295px] mt-[50px] leading-[60px] -tracking-[1px] max-[1439px]:text-[49px] max-[1439px]:leading-mt-[54px] max-[1024px]:text-[36px] max-[1024px]:w-full max-[1024px]:leading-[40px]">
            Trusted by 50K+ Users
          </h4>
          <div className="feedback-grey-para-container max-[1024px]:flex-col max-[1024px]:justify-start max-[1024px]:items-start">
            <p className="feedback-para-grey">
              Trusted by our community of over 50K+ users.
            </p>
            <img src="/image/Homepage/google_review_chip.svg" alt="" />
          </div>
        </div>
        <Review />
      </div>
      <div className="px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] mt-[100px] mb-[100px]  overflow-hidden  flex flex-wrap justify-center gap-8">
        <Support />
      </div>
      <div className="px-[140px] max-[1024px]:p-[20px]  max-[1439px]:px-[120px] max-[1278px]:px-[100px] mt-[100px] mb-[100px]  overflow-hidden  flex flex-wrap justify-center gap-8">
        <SupportCards />
      </div>
    </div>
  );
}
