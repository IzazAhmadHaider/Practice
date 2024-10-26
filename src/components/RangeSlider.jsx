import React, { useState } from "react";
import "../App.css";

function RangeSlider() {
  const [rangePercent, setRangePercent] = useState(0);

  const handleRangeChange = (event) => {
    const value = event.target.value;
    setRangePercent(value);
  };

  return (
    <div>
      <h1>CSS Range Slider</h1>
      <h3>JS used for color-change and % label</h3>
      <input
        type="range"
        value={rangePercent}
        onChange={handleRangeChange}
        onInput={handleRangeChange}
      />
      <div id="h4-container">
        <div id="h4-subcontainer">
          <h4 style={{ transform: `translateX(-50%) scale(${1 + rangePercent / 100})`, left: `${rangePercent}%` }}>
            {rangePercent}
            <span></span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default RangeSlider;
