import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import download from "downloadjs";
import triangle from "../assets/imagedownloaderimages/triangle.png";
import flame from "../assets/imagedownloaderimages/brushed.png";
import spl2 from "../assets/imagedownloaderimages/spl2.png";

const DownloadImage = () => {
    const divRef = useRef(null);

    const [playerData, setPlayerData] = useState({
        name: "",
        image: "",
        score: "",
        ballsFaced: "",
    });

    const [colors, setColors] = useState({
        textColor: "#ffffff", // Default text color
        backgroundColor: "#96bcda", // Default background color
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPlayerData({
            ...playerData,
            [name]: value,
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0]; // Get the first file uploaded
        const reader = new FileReader(); // Create a FileReader to read the file

        reader.onloadend = () => {
            setPlayerData((prevData) => ({
                ...prevData,
                image: reader.result, // Set the image data as a Data URL
            }));
        };

        if (file) {
            reader.readAsDataURL(file); // Read the file as a Data URL
        }
    };

    const handleColorChange = (e) => {
        const { name, value } = e.target;
        setColors({
            ...colors,
            [name]: value,
        });
    };

    const handleDownload = () => {
        if (divRef.current) {
            toPng(divRef.current, {
                quality: 1.0,
            })
                .then((dataUrl) => {
                    download(dataUrl, "cricket-card.png");
                })
                .catch((err) => {
                    console.error("Oops, something went wrong!", err);
                });
        }
    };

    return (
        <div className="p-4 font-SairaCondensed w-full flex flex-grow space-x-10">
            {/* Inputs to gather player data */}
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Player Name"
                    value={playerData.name}
                    onChange={handleInputChange}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />

                {/* File input for uploading the image */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />

                <input
                    type="number"
                    name="score"
                    placeholder="Score"
                    value={playerData.score}
                    onChange={handleInputChange}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="ballsFaced"
                    placeholder="Balls Faced"
                    value={playerData.ballsFaced}
                    onChange={handleInputChange}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />

                {/* Color inputs for text and background colors */}
                <div className="flex flex-col mb-2">
                    <label className="mb-1">Text Color:</label>
                    <input
                        type="color"
                        name="textColor"
                        value={colors.textColor}
                        onChange={handleColorChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="mb-1">Background Color:</label>
                    <input
                        type="color"
                        name="backgroundColor"
                        value={colors.backgroundColor}
                        onChange={handleColorChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>
            </div>
            <div>
                <div
                    ref={divRef}
                    style={{
                        backgroundColor: colors.backgroundColor,
                    }}
                    className="p-8 relative text-white w-64 h-72 flex flex-col items-center justify-center rounded-lg shadow-lg"
                >
                    <p
                        style={{ color: colors.textColor }}
                        className="leading-tight tracking-[0.2em] uppercase text-[15px] font-bold absolute top-2 shadow-2xl"
                    >
                        Sheikh Jana Champions
                    </p>
                    {playerData.image && (
                        <img
                            src={playerData.image}
                            alt="Player"
                            className="w-[170px] scale-[0.8] h-48 border rounded-lg absolute top-2 right-1 z-20 mb-4 "
                        />
                    )}
                    <img src={flame} className="absolute w-52 scale-[0.8] opacity-70 aspect-square top-0 -right-4 z-10" alt="" />
                    <img src={triangle} className="absolute scale-[0.8] w-40 aspect-square top-10  right-3 rotate-12  z-0" alt="" />
                    <div className="absolute  top-10  left-1.5  z-0 flex space-x-1">
                        <img src={spl2} className=" w-4 aspect-square" alt="" />
                        <p className=" flex flex-col text-left leading-tight uppercase text-[6px] font-bold" style={{ color: colors.textColor }}>
                            <span className="tracking-[0.2em] font-extrabold">Tufail MEMORIAL</span>
                            <span>Sheikh Jana PREMIER LEAGUE</span>
                            <span className="text-[#fc065e] tracking-[0.2em]">2nd edition 2024</span>
                        </p>
                    </div>

                    <div className="absolute bottom-0 z-10 w-full">
                        <h1
                            className="text-base mx-auto w-fit z-10 bg-[#360607] leading-tight tracking-[0.2em] uppercase text-[15px] font-bold px-4 py-1 rounded-xl"
                            style={{ color: colors.textColor }}
                        >
                            {playerData.name || "Player Name"}
                        </h1>
                        <div className="grid grid-cols-2 text-sm font-bold w-[70%] mx-auto h-14 scale-95" style={{ color: colors.textColor }}>
                            {/* Score */}
                            <div className="flex justify-between mx-auto w-full z-10  border-r border-b border-[#360607] px-2">
                                <p className="overflow-hidden">Score:</p>
                                <p>{playerData.score || "0"}</p>
                            </div>

                            {/* Balls Faced */}
                            <div className="flex justify-between mx-auto w-full z-10  border-b border-[#360607] px-2">
                                <p className="overflow-hidden">Balls Faced:</p>
                                <p>{playerData.ballsFaced || "0"}</p>
                            </div>

                            {/* Strike Rate */}
                            <div className="flex justify-between w-full  border-r  border-[#360607] mx-auto z-10  px-2">
                                <p className="overflow-hidden">Strike Rate:</p>
                                <p>{playerData.strikeRate || "0"}</p>
                            </div>

                            {/* Average */}
                            <div className="flex justify-between w-full mx-auto z-10 px-2 ">
                                <p className="overflow-hidden">Average:</p>
                                <p>{playerData.average || "0"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-[90%] h-[72px] z-0 border-t-[2px] border-[#360607]"></div>
                </div>
                {/* Button to download the card as PNG */}
                <button
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                    onClick={handleDownload}
                >
                    Download as PNG
                </button>
            </div>
        </div>
    );
};

export default DownloadImage;
