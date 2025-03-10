import React from "react";

function Community() {
  return (
    <div id="communityNav" className="community-card">
      <div className="community-card-head flex-wrap gap-2 justify-center">
        <div>
          <p className="community-card-para">COMMUNITY</p>
          <h5 className="community-card-heading">Our IT NOVA Community</h5>
        </div>
        <div className="community-count-card-container">
          <div className="community-count-card">
            <p>UNIVERSITY</p>
            <h5>10+</h5>
          </div>
          <div className="community-count-card">
            <p>COMPANIES</p>
            <h5>30+</h5>
          </div>
          <div className="community-count-card">
            <p>INDUSTRY PROFFESIONAL</p>
            <h5>20+</h5>
          </div>
        </div>
      </div>
      <img className="visa-location" src="/image/visa.svg" alt="" />
      <img className="deloitte-location" src="/image/deloitte.svg" alt="" />
      <img className="hp-location" src="/image/hp.svg" alt="" />
      <img className="accenture-location" src="/image/accenture.svg" alt="" />
      <img className="ola-location" src="/image/ola.svg" alt="" />
      <img className="jio-location" src="/image/jio.svg" alt="" />
      <p className="community-para-grey">
        Globally connected community.
      </p>
    </div>
  );
}

export default Community;
