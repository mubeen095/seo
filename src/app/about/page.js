import FeatureCard from "@/component/About/FeatureCard";
import HeroAbout from "@/component/About/HeroAbout";
import InfoCardSection from "@/component/About/InfoCardSection";
import LittleMoreSection from "@/component/About/LittleMoreSection";
import MotivatedCard from "@/component/About/MotivatedSecton/MotivatedCard";
import WorkWithUs from "@/component/About/WorkWithUs";
import BgVideo from "@/component/reuseable/BgVideo";
import LogoScroll from "@/component/reuseable/companyAnimation/LogoScroll";
import Hero from "@/component/reuseable/Hero";
import React from "react";

const About = () => {
  return (
    <div className=" pb-[100px]">
    
      <HeroAbout />
      <div className="px-[140px] max-[1439px]:px-[120px] max-[1278px]:px-[100px] overflow-hidden max-[1026px]:px-0">
        <LogoScroll />
      </div>
      <LittleMoreSection />
      <InfoCardSection />
      <FeatureCard />
      <MotivatedCard />
      <WorkWithUs />
    </div>
  );
};

export default About;
