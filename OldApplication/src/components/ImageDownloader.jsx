import { useRef, useState, useEffect } from "react";
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
        sixes: "",
        fours: "",
        strikeRate: 0,
    });

    const [colors, setColors] = useState({
        textColor: "#ffffff",
        backgroundColor: "#96bcda",
        labelColor: "#ffcc00", // Color for labels
        borderColor: "#360607", // Color for borders
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPlayerData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        const { score, ballsFaced } = playerData;
        if (score && ballsFaced) {
            const calculatedStrikeRate = ((score / ballsFaced) * 100).toFixed(3);
            setPlayerData((prevData) => ({
                ...prevData,
                strikeRate: Math.min(calculatedStrikeRate, 9999),
            }));
        } else {
            setPlayerData((prevData) => ({
                ...prevData,
                strikeRate: 0,
            }));
        }
    }, [playerData.score, playerData.ballsFaced]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPlayerData((prevData) => ({
                ...prevData,
                image: reader.result,
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleColorChange = (e) => {
        const { name, value } = e.target;
        setColors((prevColors) => ({
            ...prevColors,
            [name]: value,
        }));
    };

    const handleDownload = () => {
        if (divRef.current) {
            toPng(divRef.current, { quality: 1.0 })
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

                <input
                    type="number"
                    name="sixes"
                    placeholder="6s"
                    value={playerData.sixes}
                    onChange={handleInputChange}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="fours"
                    placeholder="4s"
                    value={playerData.fours}
                    onChange={handleInputChange}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />

                {/* Color inputs for text, background, label, and border colors */}
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
                <div className="flex flex-col mb-2">
                    <label className="mb-1">Label Color:</label>
                    <input
                        type="color"
                        name="labelColor"
                        value={colors.labelColor}
                        onChange={handleColorChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="mb-1">Border Color:</label>
                    <input
                        type="color"
                        name="borderColor"
                        value={colors.borderColor}
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
                            className="w-[170px] scale-[0.8] h-48 border rounded-lg absolute top-2 right-1 z-20 mb-4"
                        />
                    )}
                    <img src={flame} className="absolute w-52 scale-[0.8] opacity-70 aspect-square top-0 -right-4 z-10" alt="" />
                    <img src={triangle} className="absolute scale-[0.8] w-40 aspect-square top-10 right-3 rotate-12 z-0" alt="" />
                    <div className="absolute top-10 left-1.5 z-0 flex space-x-1">
                        <img src={spl2} className="w-4 aspect-square" alt="" />
                        <p className="flex flex-col text-left leading-tight uppercase text-[6px] font-bold" style={{ color: colors.textColor }}>
                            <span className="tracking-[0.2em] font-extrabold">Tufail MEMORIAL</span>
                            <span>Sheikh Jana PREMIER LEAGUE</span>
                            <span className="text-[#fc065e] tracking-[0.2em]">2nd edition 2024</span>
                        </p>
                    </div>

                    <div className="absolute bottom-3.5 z-10 w-full">
                        <h1
                            className="text-base mx-auto w-fit z-10 bg-[#360607] leading-tight tracking-[0.2em] uppercase text-[15px] font-bold px-4 py-1 rounded-xl"
                            style={{ color: colors.textColor }}
                        >
                            {playerData.name || "Player Name"}
                        </h1>
                        <div className="grid grid-cols-2 text-sm font-bold w-[70%] mx-auto h-14 scale-90" style={{ color: colors.textColor }}>
                            {/* Score */}
                            <div className="flex p-0.5 justify-between mx-auto w-full z-10 border-r border-b" style={{ borderColor: colors.borderColor }}>
                                <p className="overflow-hidden" style={{ color: colors.labelColor }}>Score:</p>
                                <p>{playerData.score || "0"}</p>
                            </div>

                            {/* Balls Faced */}
                            <div className="flex p-0.5 justify-between mx-auto w-full z-10 border-b" style={{ borderColor: colors.borderColor }}>
                                <p className="overflow-hidden" style={{ color: colors.labelColor }}>Balls Faced:</p>
                                <p>{playerData.ballsFaced || "0"}</p>
                            </div>

                            {/* Fours */}
                            <div className="flex p-0.5 justify-between mx-auto w-full z-10 border-r border-b" style={{ borderColor: colors.borderColor }}>
                                <p className="overflow-hidden" style={{ color: colors.labelColor }}>4s:</p>
                                <p>{playerData.fours || "0"}</p>
                            </div>

                            {/* Sixes */}
                            <div className="flex p-0.5 justify-between mx-auto w-full z-10 border-b" style={{ borderColor: colors.borderColor }}>
                                <p className="overflow-hidden" style={{ color: colors.labelColor }}>6s:</p>
                                <p>{playerData.sixes || "0"}</p>
                            </div>

                            {/* Strike Rate */}
                            <div className="flex p-0.5 justify-between mx-auto w-full z-10 border-r" style={{ borderColor: colors.borderColor }}>
                                <p className="overflow-hidden" style={{ color: colors.labelColor }}>SR:</p>
                                <p>{playerData.strikeRate || "0"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleDownload}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Download Image
                </button>
            </div>
        </div>
    );
};

export default DownloadImage;
