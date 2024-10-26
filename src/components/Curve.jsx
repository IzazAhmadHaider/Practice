import React from "react";

function Curve() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="relative rounded-[100px] z-50 h-[500px] w-[500px] bg-red-500">
        <div className="absolute w-[40px] h-[20px] left-[71%] top-0 inset-0 z-10 bg-white"></div>
        <div className="absolute top-0 right-0 z-50 h-32 w-32 bg-white rounded-bl-[100px]">
          <img src="your image" alt="" />
          <div className="absolute top-0 right-[8rem] rounded-tr-[100px] w-5 h-7 bg-red-500"></div>
          <div className="absolute w-[16px] h-[20px] left-[87.6%] top-[8rem] inset-0 z-10 bg-white"></div>
          <div className="absolute top-[8rem] right-[0rem] z-50 rounded-tr-[100px] w-5 h-7 bg-red-500"></div>
        </div>
        <div className="absolute top-0 right-0 w-5 h-8 bg-white rounded-tr-[100px]"></div>
      </div>
    </div>
  );
}

export default Curve;
