import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import JonRoleCard from "./JonRoleCard";

const JonRole = () => {
  return (
    <>
      <div className="px-[140px] mt-[131px] max-[1439px]:px-[120px]  max-[1278px]:px-[100px]  max-[1024px]:px-[20px]">
        <p className="text-sm font-bold tracking-[3px]">JOB ROLES</p>
        <h5 className="text-[55px] font-bold w-[295px] mt-[50px] leading-[60px] -tracking-[1px] max-[1439px]:text-[49px] max-[1439px]:leading-mt-[54px] max-[1024px]:text-[36px] max-[1024px]:w-full max-[1024px]:leading-[40px]  ">
          Latest jobs for you
        </h5>

        <div className="mt-[72px] flex gap-[24px] flex-wrap">
          <JonRoleCard
            para1="ROLE1"
            heading1="Inside sales Strategist"
            location="LOCATION"
            locationName= " Hyderabad "
          />
          <JonRoleCard
            para1="ROLE2"
            heading1="Talent Acquisition"
            location="LOCATION"
            locationName= " Hyderabad "
          />
          <JonRoleCard
            para1="ROLE3"
            heading1="Corporate Relations"
            location="LOCATION"
            locationName= " Hyderabad "
          />
          <JonRoleCard
            para1="ROLE4"
            heading1="Operation Specialist"
            location="LOCATION"
            locationName=" Hyderabad "
          />
          <JonRoleCard
            para1="LET US KNOW"
            heading1="Didn't find your role?"
            location="LOCATION"
            locationName=" Hyderabad "
          />
        </div>
      </div>
    </>
  );
};

export default JonRole;