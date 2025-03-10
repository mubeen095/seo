import React, { useState } from "react";

function Curiculam({ data }) {
  console.log("data=>: ", data);
  const [open, setOpen] = useState(-1);
  return (
    <div className="">
      <div className="curriculum-container">
        <div className="curriculum-accordion-head">
          <p className="curriculum-para">CURRICULUM</p>
          <h6 className="curriculum-heading">Know your course curriculum</h6>
        </div>
        <div className="curriculum-content">
          {data?.map((item, index) => (
            <div className="curriculum-btn">
              <div>
                <div
                  onClick={() => {
                    setOpen(index);
                  }}
                  className="curriculum-title"
                >
                  <div>
                    <p>Curriculum {index + 1}</p>
                    <p>{item.title}</p>
                  </div>
                  <p>{open===index?'-':'+'}</p>
                </div>
              </div>
              <div>
                <div
                  className={`curriculum-content-text overflow-hidden ${
                    open === index ? "h-auto" : "h-0"
                  } `}
                  style={{ marginBottom: "10px" }}
                >
                  {item?.subTitle}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="formContact"></div>
        <img
          className="hor-divider"
          src="/image/horizontal_divider.svg"
          alt=""
        />
        <div className="curriculum-accordion-foot">
          <div>
            <p className="curriculum-foot-para">REGISTER NOW</p>
            <h6 className="curriculum-foot-heading">Like the curriculum ?</h6>
            <form
              id="myForm"
              className="curriculum-form"
              name="contact-details"
            >
              <input
                name="name"
                required=""
                type="text"
                id="txtName"
                placeholder="Full Name"
                fdprocessedid="5ruaru"
              />
              <input
                name="college"
                required=""
                type="text"
                id="txtCollegeName"
                placeholder="College Name"
                fdprocessedid="hr954b"
              />
              <div className="phone-number-container">
                <div className="country-code">+91</div>
                <input
                  name="number"
                  required=""
                  type="text"
                  id="txtPhoneNumber"
                  placeholder="Phone Number"
                  fdprocessedid="dz03vq"
                />
              </div>
              <button
                id="RegButton"
                className="btnRegisterCurriculum"
                fdprocessedid="jyt1pg"
              >
                <div
                  className="btnGreenTag"
                  id="btnSubmitText"
                  style={{
                    backgroundColor: "rgb(255, 171, 0)",
                  }}
                >
                  Submit
                </div>
                <img src="/image/right_arrows.svg" alt="" />
              </button>
            </form>
          </div>
          <div>
            <img alt="" src="/image/ml_form_img.png" />
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              src="/image/enrollgoogle.svg"
              alt=""
              className="aos-init"
            />
            <img
              data-aos="flip-right"
              data-aos-duration="4000"
              src="/image/googleReview.svg"
              alt=""
              className="aos-init"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curiculam;
