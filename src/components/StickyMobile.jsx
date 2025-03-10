import React from 'react'
import fifth from '../assets/imagedownloaderimages/fifthmobile.svg'

function StickyMobile() {
    return (
        <div className="">
            {/* First Page */}
            <div className="h-[200vh] w-full bg-gray-800 flex items-center justify-center">
                <h1 className="text-white text-3xl">First Page</h1>
            </div>

            {/* Second Page with Scrolling Side Divs */}
            <div className="relative w-full flex justify-around bg-slate-600  h-[500vh] ">
                {/* Left Scrollable Div */}
                <div className='flex flex-col'>

                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl">Scrollable 1</h2>
                    </div>
                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl"></h2>
                    </div>
                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl">Scrollable 1</h2>
                    </div>
                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl"></h2>
                    </div>
                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl">Scrollable 1</h2>
                    </div>
                </div>

                    <div className="w-[30vw] h-[90vh] sticky top-0 flex items-center justify-center">
                        <img className='h-[90vh]' src={fifth} alt="" />
                    </div>
                <div className='flex flex-col'>
                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl"></h2>
                    </div>
                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl">Scrollable 2</h2>
                    </div>
                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl"></h2>
                    </div>
                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl">Scrollable 2</h2>
                    </div>
                    <div className="w-[30vw] h-[100vh] overflow-auto bg-gray-700 flex items-center justify-center">
                        <h2 className="text-white text-2xl"></h2>
                    </div>
                </div>
            </div>

            {/* Last Page */}
            <div className="h-[200vh] w-full bg-gray-900 flex items-center justify-center">
                <h1 className="text-white text-3xl">Last Page</h1>
            </div>
        </div>
    )
}

export default StickyMobile
