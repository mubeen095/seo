import React from "react";

function Refer() {
  return (
    <div className=" mt-[20px] flex justify-between bg-white rounded-[20px] border border-[#ccc] relative overflow-hidden">
      <div className="border refer-section-container flex border-[#D3D3D3] justify-between md:gap-[100px] min-h-[550px] w-full py-10 bg-white relative overflow-hidden">
        <div className=" md:w-[50%] w-full md:px-[50px] flex justify-between flex-col pb-[100px]">
          <div>
            <p className="text-sm font-semibold tracking-[3px]">REFER</p>
            <h5 className="text-[55px] font-bold leading-[58px] mt-[30px]">
              Refer someone and Earn upto ₹500
            </h5>
          </div>

          <p className="text-[15px] mt-[30px]  text-paraColor ">
            Cashback/Vouchers, on every successful enrollment.
          </p>
          <button className="btnRefer">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Refering
            </a>
          </button>
        </div>

        <div className=" md:w-[70%] "></div>
      </div>
    </div>
  );
}

export default Refer;
