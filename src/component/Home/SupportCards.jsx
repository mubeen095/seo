import React from "react";
import { FaArrowRight } from "react-icons/fa";

function SupportCards() {
  return (
    <div className=" w-full flex lg:flex-row flex-col  items-center  lg:justify-between justify-center lg:gap-4  lg:space-y-0 space-y-4 ">
      <a href="/#demoNav" className="contact-card1 lg:w-1/3 w-full" >
        <div>
          <p className="contact-card-para">DEMO</p>
          <h5 className="contact-card-heading">Request a free demo</h5>
          <div className="contact-card-img-1">
            <div>
              <img className="hand-logo" alt="" />
              <img className="btn-request" alt="" />
              <img className="layer-1" src="/image/request_layer_4.svg" alt="" />
              <img className="layer-2" src="/image/request_layer_3.svg" alt="" />
              <img className="layer-3" src="/image/request_layer_2.svg" alt="" />
              <img className="layer-4" src="/image/request_layer_1.svg" alt="" />
            </div>
          </div>
        </div>
        <p className="request-para flex items-center gap-1">
          Request <FaArrowRight className=" rotate-[-45deg] text-[#8bc12d] " />
        </p>
      </a>
      <a
        href="tel:+918121965854"
        className="contact-card2 lg:w-1/3 w-full"

      >
        <div>
          <p className="contact-card-para">CALL US</p>
          <h5 className="contact-card-heading">Have doubt ? <br /> Call Us</h5>
          <div className="contact-card-img-2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <img src="/image/call_logo.svg" alt="" />
          </div>
        </div>
        <p className="contact-num-para flex items-center gap-1">
          {" "}
          +91 81219 65854 <FaArrowRight className=" rotate-[-45deg] text-[#00a5ed] " />
        </p>
      </a>
      <a
        href="mailto:support@itnova.inS"
        className="contact-card3 lg:w-1/3 w-full"

      >
        <div>
          <p className="contact-card-para">QUERY</p>
          <h5 className="contact-card-heading">Have query ?  <br />  Mail Us</h5>
          <div className="contact-card-img-3">
            <img className="blue-chat" alt="" />
            <img className="white-chat" alt="" />
          </div>
        </div>
        <p className="email-para flex items-center gap-1">
          help@itnova.ai <FaArrowRight className=" rotate-[-45deg] text-[#0078ff] " />
        </p>
      </a>
    </div>
  );
}

export default SupportCards;
