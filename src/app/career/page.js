import CareerCard from "@/component/Career/CareerCard";
import HeroCareer from "@/component/Career/HeroCareer";
import JonRole from "@/component/Career/JonRole";
import MakingBetter from "@/component/Career/MakingBetter";
import ScrollableCareer from "@/component/Career/ScrollableCareer";

const Career = () => {
  return (
    <div className=" pb-[100px] ">
      <HeroCareer />
      <ScrollableCareer />
      <MakingBetter />
      <CareerCard />
      <div id="jobOffers"></div>
      <JonRole />
    </div>
  );
};
export default Career;
