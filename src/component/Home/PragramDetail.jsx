"use client";
import { cards } from "@/helper/programContentCardDetail";
import React from "react";
import ProgramContentCard from "./ProgramContentCard";
import Link from "next/link";
import Image from "next/image";

const PragramDetail = ({ data }) => {
  return (
    <>
      <div className="">
        <div className="program-details-head">
          <div>
            <p className="program-details-para">PROGRAM</p>
            <h6 className="program-details-heading">{data?.program?.title}</h6>
          </div>
          <Link
            href="#formContact"
            className="btnDownloadBrochure flex text-white"
            style={{ textDecoration: "none" }}
          >
            <Image
            className=" size-5 "
              src={require("../../../public/image/download_icon.svg")}
              alt=""
            />
            <span className=" text-white"> Download Brochure</span>
          </Link>
        </div>
        <div className="program-details-card-container">
          {cards.map((card, index) => (
            <ProgramContentCard
              color={data?.program?.color}
              key={index}
              title={card.title}
              des={card.des}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PragramDetail;
