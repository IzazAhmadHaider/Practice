// import React from 'react'

function Luthfullah() {
  return (
<div className="">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-center text-3xl h-[100vh]">Main Page</h1>
      </header>

        <Video />

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Luthfullah</p>
      </footer>
    </div>  )
}

export default Luthfullah


function Video() {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <video controls className="w-full">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }