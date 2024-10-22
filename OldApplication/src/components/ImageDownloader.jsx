/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { toPng } from "html-to-image";
import download from "downloadjs";
import triangle from "../assets/imagedownloaderimages/triangle.png";
import flame from "../assets/imagedownloaderimages/brushed.png";
import spl2 from "../assets/imagedownloaderimages/spl2.png";
import './imagdownloader.css'

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
    const [bowlerData, setBowlerData] = useState({
        overs: "",
        wickets: "",
        runs: "",
        econ: "",
    });

    const [colors, setColors] = useState({
        textColor: "#ffffff",
        backgroundColor: "#96bcda",
        labelColor: "#ffcc00", // Color for labels
        borderColor: "#360607", // Color for borders
    });

    const [strifs, setStrifs] = useState(false);
    const [selectedAward, setSelectedAward] = useState("");


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
    const handleAwardChange = (e) => {
        setSelectedAward(e.target.value);
    };
    const renderComponent = () => {
        if (selectedAward.includes('Batsman')) return <Batsmancomponent colors={colors} playerData={playerData} />;
        if (selectedAward.includes('Bowler')) return <BowlerComponent colors={colors} bowlerData={bowlerData} />;
        if (selectedAward.includes('Allrounder')) return <AllrounderComponent colors={colors} AllrounderData={bowlerData} playerData={playerData} />;
        return null;
    };


    return (
        <div className="p-4 font-SairaCondensed w-full flex max-md:flex-col-reverse  flex-grow space-x-10">
            <div className="mb-4 grid grid-cols-2 gap-2 max-md:grid-cols-1 max-md:mt-3">
                <select name="award" value={selectedAward} onChange={handleAwardChange} className="block w-full mb-2 p-2 border border-gray-300 uppercase rounded">
                    <option value="">Select Award</option>
                    <option value="Player of the Match (Batsman)">Player of the Match (Batsman)</option>
                    <option value="Player of the Match (Bowler)">Player of the Match (Bowler)</option>
                    <option value="Player of the Match (Allrounder)">Player of the Match (AllRounder)</option>
                    <option value="Best Bowler of the Match">Best Bowler of the Match</option>
                    <option value="Best Batsman of the Match">Best Batsman of the Match</option>
                </select>

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
                <input
                    type="number"
                    name="overs"
                    placeholder="Overs [For Bowlers]"
                    value={bowlerData.overs}
                    onChange={(e) => setBowlerData({ ...bowlerData, overs: e.target.value })}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />

                <input
                    type="number"
                    name="wickets"
                    placeholder="Wickets [For Bowlers]"
                    value={bowlerData.wickets}
                    onChange={(e) => setBowlerData({ ...bowlerData, wickets: e.target.value })}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />

                <input
                    type="number"
                    name="runs"
                    placeholder="Runs [For Bowlers]"
                    value={bowlerData.runs}
                    onChange={(e) => setBowlerData({ ...bowlerData, runs: e.target.value })}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />



                {/* Color inputs for text, background, label, and border colors */}
                <div className="flex flex-col mb-2">
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-fit" onClick={() => { setStrifs(!strifs) }}>Strips</button>
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
                    className={`p-8 relative ${strifs && 'strifs'} text-white w-64 h-72 flex flex-col items-center justify-center rounded-lg shadow-lg`}
                >
                    <p
                        style={{ color: colors.textColor }}
                        className={`leading-tight tracking-[0.2em] uppercase text-[15px] font-bold absolute top-2 shadow-2xl ${strifs && 'bg-[#360607] rounded-lg p-1.5'}`}
                    >
                        Sheikh Jana Champions
                    </p>
                    {selectedAward && (
                        <p
                            className="absolute uppercase text-2xl leading-[22px] font-bold text-white w-[35%]"
                            style={{ top: "30%", left: "3%", color: colors.labelColor }}
                        >
                            {selectedAward.replace(/\s*\(.*?\)\s*/g, "")}
                        </p>
                    )}


                    {playerData.image && (
                        <img
                            src={playerData.image}
                            alt="Player"
                            className={`w-[170px] scale-[0.8] h-48 border rounded-lg absolute top-2 right-1 z-20 mb-4 ${strifs && 'scale-[0.65]'}`}
                        />
                    )}
                    <img src={flame} className="absolute w-52 scale-[0.8] opacity-70 aspect-square top-0 -right-4 z-10" alt="" />
                    <img src={triangle} className="absolute scale-[0.8] w-40 aspect-square top-10 right-3 rotate-12 z-0" alt="" />
                    <div className="absolute top-10 left-1.5 z-0 flex space-x-1">
                        <img src={spl2} className="w-4 aspect-square" alt="" />
                        <p className={`flex flex-col text-left leading-tight uppercase text-[6px] font-bold ${strifs && 'bg-[#360607] rounded-lg p-1.5'}`} style={{ color: colors.textColor }}>
                            <span className="tracking-[0.2em] font-extrabold">Tufail MEMORIAL</span>
                            <span>Sheikh Jana PREMIER LEAGUE</span>
                            <span className="text-[#fc065e] tracking-[0.2em]">2nd edition 2024</span>
                        </p>
                    </div>

                    <div className={`absolute bottom-0 z-10 w-full ${strifs && 'bg-[#360607] rounded-lg'}`}>
                        <h1
                            className="text-base mx-auto w-fit z-10 bg-[#360607] leading-tight tracking-[0.2em] uppercase text-[15px] font-bold px-4 py-1 rounded-xl"
                            style={{ color: colors.textColor }}
                        >
                            {playerData.name || "Player Name"}
                        </h1>
                        {renderComponent()}
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




function Batsmancomponent({ colors, playerData }) {
    return (
        <>

            <div className={`grid grid-cols-2 text-sm font-bold w-[70%] mx-auto  scale-90 `} style={{ color: colors.textColor }}>
                {/* Score */}
                <div className="flex p-0.5 justify-between mx-auto w-full  z-10 border-r border-b" style={{ borderColor: colors.borderColor }}>
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
        </>
    )
}


function BowlerComponent({ colors, bowlerData }) {


    // Convert overs to balls (1 over = 6 balls)
    const totalBalls = Math.floor(bowlerData.overs) * 6 + (bowlerData.overs % 1) * 10;

    return (
        <>
            <div className={`grid grid-cols-2 text-sm font-bold w-[70%] mx-auto scale-95 mb-3`} style={{ color: colors.textColor }}>
                {/* Overs */}
                <div className="flex p-0.5 justify-between mx-auto w-full z-10 border-r border-b" style={{ borderColor: colors.borderColor }}>
                    <p className="overflow-hidden" style={{ color: colors.labelColor }}>Overs:</p>
                    <p>{bowlerData.overs || "0"}</p>
                </div>

                {/* Wickets */}
                <div className="flex p-0.5 justify-between mx-auto w-full z-10 border-b" style={{ borderColor: colors.borderColor }}>
                    <p className="overflow-hidden" style={{ color: colors.labelColor }}>Wickets:</p>
                    <p>{bowlerData.wickets || "0"}</p>
                </div>

                {/* Runs Conceded */}
                <div className="flex p-0.5 justify-between mx-auto w-full z-10 border-r " style={{ borderColor: colors.borderColor }}>
                    <p className="overflow-hidden" style={{ color: colors.labelColor }}>Runs:</p>
                    <p>{bowlerData.runs || "0"}</p>
                </div>

                {/* Strike Rate */}
                <div className="flex p-0.5 justify-between mx-auto w-full z-10 " style={{ borderColor: colors.borderColor }}>
                    <p className="overflow-hidden" style={{ color: colors.labelColor }}>Econ:</p>
                    <p>{Math.ceil((bowlerData.runs / bowlerData.overs) * 10000) / 10000}</p>

                </div>
            </div>
        </>
    );
}
function AllrounderComponent({ colors, AllrounderData, playerData }) {
    return (
        <>
            <div className="flex justify-between w-[80%] mx-auto my-1">
                <h1
                    className="text-[10px] w-fit z-10 bg-[#360607] leading-tight tracking-[0.1em] uppercase font-bold px-2 py-0.5 rounded-lg"
                    style={{ color: colors.textColor }}
                >
                    Bowling Stats
                </h1>
                <h1
                    className="text-[10px] w-fit z-10 bg-[#360607] leading-tight tracking-[0.1em] uppercase font-bold px-2 py-0.5 rounded-lg"
                    style={{ color: colors.textColor }}
                >
                    Batting Stats
                </h1>
            </div>

            <div className="flex">
                <div className={`grid grid-cols-2 text-xs font-semibold w-[60%] mx-auto scale-90 mb-2`} style={{ color: colors.textColor }}>
                    <div className="flex p-0.25 justify-between mx-auto w-full z-10 border-r border-b" style={{ borderColor: colors.borderColor }}>
                        <p className="overflow-hidden" style={{ color: colors.labelColor }}>Overs:</p>
                        <p>{AllrounderData.overs}</p>
                    </div>

                    {/* Wickets */}
                    <div className="flex p-0.25 justify-between mx-auto w-full z-10 border-b" style={{ borderColor: colors.borderColor }}>
                        <p className="overflow-hidden" style={{ color: colors.labelColor }}>Wickets:</p>
                        <p>{AllrounderData.wickets}</p>
                    </div>

                    {/* Runs Conceded */}
                    <div className="flex p-0.25 justify-between mx-auto w-full z-10 border-r" style={{ borderColor: colors.borderColor }}>
                        <p className="overflow-hidden" style={{ color: colors.labelColor }}>Runs:</p>
                        <p>{AllrounderData.runs}</p>
                    </div>

                    {/* Strike Rate */}
                    <div className="flex p-0.25 justify-between mx-auto w-full z-10" style={{ borderColor: colors.borderColor }}>
                        <p className="overflow-hidden" style={{ color: colors.labelColor }}>Econ:</p>
                        <p>{Math.ceil((AllrounderData.runs / AllrounderData.overs) * 10000) / 10000}</p>

                    </div>
                </div>

                <div className={`grid grid-cols-2 text-xs font-semibold w-[60%] mx-auto scale-90`} style={{ color: colors.textColor }}>
                    <div className="flex p-0.25 justify-between mx-auto w-full z-10 border-r border-b" style={{ borderColor: colors.borderColor }}>
                        <p className="overflow-hidden" style={{ color: colors.labelColor }}>Score:</p>
                        <p>{playerData.score || "0"}</p>
                    </div>

                    {/* Balls Faced */}
                    <div className="flex p-0.25 justify-between mx-auto w-full z-10 border-b" style={{ borderColor: colors.borderColor }}>
                        <p className="overflow-hidden" style={{ color: colors.labelColor }}>Balls Faced:</p>
                        <p>{playerData.ballsFaced || "0"}</p>
                    </div>

                    {/* Fours */}
                    <div className="flex p-0.25 justify-between mx-auto w-full z-10 border-r border-b" style={{ borderColor: colors.borderColor }}>
                        <p className="overflow-hidden" style={{ color: colors.labelColor }}>4s:</p>
                        <p>{playerData.fours || "0"}</p>
                    </div>

                    {/* Sixes */}
                    <div className="flex p-0.25 justify-between mx-auto w-full z-10 border-b" style={{ borderColor: colors.borderColor }}>
                        <p className="overflow-hidden" style={{ color: colors.labelColor }}>6s:</p>
                        <p>{playerData.sixes || "0"}</p>
                    </div>

                    {/* Strike Rate */}
                    <div className="flex p-0.25 justify-between mx-auto w-full z-10 border-r" style={{ borderColor: colors.borderColor }}>
                        <p className="overflow-hidden" style={{ color: colors.labelColor }}>SR:</p>
                        <p>{playerData.strikeRate || "0"}</p>
                    </div>
                </div>
            </div>

        </>
    );
}

