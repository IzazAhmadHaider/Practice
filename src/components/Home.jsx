// import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-3 mt-4">
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
      <Link to="/catagories" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
        Catagories
      </Link>
      <Link to="/map" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
        MapCreating
      </Link>
      <Link to="/map2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
        MapShowing
      </Link>
      <Link to="/curve" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
        curve
      </Link>
      <Link to="/dropdown" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
        dropdown
      </Link>
      <Link to="/cobj" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
        objects
      </Link>
      <Link to="/luthfullah" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
        Luthfullah
      </Link>
      <Link to="/imagecreator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
      imagecreator
      </Link>
      <Link to="/cardsanimator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
      Cards Animator
      </Link>
      <Link to="/StickyMobile" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
      Sticky Mobile
      </Link>
    </div>
  );
}

export default Home;