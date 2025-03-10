import React from "react";

function GlobalCards() {
  return (

    <div className=" flex justify-center w-full items-center lg:flex-row flex-col gap-4 ">
      <div className="global-card min-h-[500px] h-full w-full lg:w-1/3 lg:max-w-[373px]">
        <p className="global-card-para">GLOBAL</p>
        <h5 className="global-card-heading">
          Studied by lots of students around the globe.
        </h5>
      </div>
      <div className="liked-card min-h-[500px] h-full w-full lg:w-1/3 lg:max-w-[373px]">
        <p className="liked-card-para">LIKED</p>
        <h5 className="liked-card-heading">4.5+ Rating for our courses</h5>
        <p className="liked-card-rating-para">
          4.5+ <span> &nbsp; Google Reviews</span>
        </p>
        <div className="liked-card-animated-section">
          <h3>4.5+</h3>
          <img src="/image/star_small_1.svg" alt="" />
          <img src="/image/star_big.svg" alt="" />
          <img src="/image/star_small_1.svg" alt="" />
        </div>
        <p className="liked-card-rating-para2">
          4.5+ <span> &nbsp; Google Reviews</span>
        </p>
      </div>
      <div className="offer-card min-h-[500px] h-full w-full lg:w-1/3 lg:max-w-[373px]">
        <p className="offer-card-para">OFFERS</p>
        <h2 className="offer-card-heading">
          Awesome discounts on all courses
        </h2>
        <p className="offer-card-para-grey">
          <b>₹500 OFF</b> on every courses, Get start for owning a new skill.
        </p>
        <div className="offer-card-tag-1">
          <img src="/image/yellow_tag.svg" alt="" />
          <img src="/image/purple_tag.svg" alt="" />
          <img src="/image/offer_tag.svg" alt="" />
        </div>
      </div>
    </div>

  );
}

export default GlobalCards;
