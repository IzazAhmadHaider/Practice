// import React from 'react'
import icon from '../assets/icon.svg'

function Luthfullah() {
  return (
    <div className="">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-center text-3xl h-[100vh]">Main Page</h1>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            fontFamily: "Arial, sans-serif",
            fontSize: "10px",
            marginLeft: "-7px",
            color: "#333",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={icon}
              alt="Normal POI Icon"
              style={{
                width: "38px",
                height: "25px",
                objectFit: "contain",
                borderRadius: "20px",
                background: "#10E0D7",
                boxShadow: "0px 4px 5px 2px #00000040",
                padding: "5px 3px",
              }}
            />
          </div>
          <p
            style={{
              margin: 0,
              fontWeight: 500,
            }}
          >
            Hello
          </p>
        </div>

      </header>

      <Video />

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Luthfullah</p>
      </footer>
    </div>)
}

export default Luthfullah


function Video() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl">Lutfullah Video</h1>
        <video controls className="w-full">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}