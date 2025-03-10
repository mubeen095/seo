import React from "react";

function DotLoader() {
  return (
    <div className=" flex justify-center items-center h-full w-full fixed z-[1024] left-0 top-0 bg-primary ">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

export default DotLoader;
