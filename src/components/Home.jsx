import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-between">
      <Link to="/range-slider" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        RangeSlider1
      </Link>
      <Link to="/rangeslider1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Rangeslider1
      </Link>
      <Link to="/update-object" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        UpdateObject
      </Link>
      <Link to="/apireq" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Apireq
      </Link>
      <Link to="/checksvg" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Checksvg
      </Link>
    </div>
  );
}

export default Home;
