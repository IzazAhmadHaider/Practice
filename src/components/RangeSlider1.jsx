import React, { useState } from "react";

const RangeSlider1 = () => {
  const [value, setValue] = useState(1); // Start from 1 instead of 0

  const handleChange = (event) => {
    const tempSliderValue = parseInt(event.target.value);
    setValue(tempSliderValue);
  };

  const getBackgroundColor = (index) => {
    if (value === index + 1) {
      return "#903FFF";
    } else {
      return "#DEE2EB";
    }
  };

  return (
    <div className="wrapper">
      <div className="range flex items-center">
        <div className="range-slider flex-1">
          <label htmlFor="range" className="block text-center">
            Select a value:
          </label>
          <input
            type="range"
            min="1"
            max="30"
            value={value}
            id="range"
            step="1" // Changed step to 1 for single increments
            onChange={handleChange}
            className="w-full cursor-pointer rounded-full h-2 appearance-none bg-[#E7EBF4] range-slider"
          />

          <div className="sliderticks flex justify-between mt-2">
            {Array.from({ length: 30 }).map((_, index) => (
              <div
                key={index}
                className={`rounded-2xl ${index === 20 ? "ml-0" : ""}`}
                style={{
                  width: [1, 5, 10, 15, 20, 25, 30].includes(index + 1) ? "5px" : "3px",
                  height: [1, 5, 10, 15, 20, 25, 30].includes(index + 1) ? "12px" : "4px",
                  backgroundColor: getBackgroundColor(index),
                }}
              ></div>
            ))}
          </div>

          <div className="sliderticks flex justify-between mt-2">
            {[1, 5, 10, 15, 20, 25, 30].map((tick) => (
              <span
                key={tick}
                className={`${tick === 1 ? "" : "pr-5 "} ${
                  tick === 30 ? "-mr-3" : " text-center"
                }`}
              >
                {tick}
              </span>
            ))}
          </div>
        </div>
        <div className="value w-12 text-center text-lg">{value}</div>
      </div>
     
    </div>
  );
};

export default RangeSlider1;
