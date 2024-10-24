import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import triangle22 from "../../assets/imagedownloaderimages/triangle22.png";
import download from "downloadjs";
import './imagdownloader.css';

const TeamCard = () => {
  const divRef = useRef(null);

  const [playerNames, setPlayerNames] = useState(Array(10).fill(""));
  const [captainImage, setCaptainImage] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  // State for customizable colors
  const [mainBgColor, setMainBgColor] = useState("#2d3748");
  const [liBgColor, setLiBgColor] = useState("#EAE0D5");
  const [textColor, setTextColor] = useState("#ffffff");
  const [ulBgColor, setUlBgColor] = useState("#FFFFFF"); // New state for <ul> background color

  const handlePlayerNameChange = (index, value) => {
    setPlayerNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames[index] = value;
      return updatedNames;
    });
  };

  const handleCaptainImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCaptainImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (divRef.current) {
      toPng(divRef.current, { quality: 1, pixelRatio: 5 })
        .then((dataUrl) => {
          download(dataUrl, "team-card.png");
        })
        .catch((err) => {
          console.error("Oops, something went wrong!", err);
        });
    }
  };

  return (
    <div className="p-4 font-SairaCondensed flex w-full space-y-4">
      <div className="flex max-lg:flex-col-reverse w-full space-x-5 ">
        <div className="flex flex-col w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Team 1 Name"
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Team 2 Name"
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleCaptainImageUpload}
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
          />

          <div className="grid grid-cols-2 gap-2">
            {playerNames.map((name, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Player ${index + 1} Name`}
                value={name}
                onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                className="block w-full mb-2 p-2 border border-gray-300 rounded"
              />
            ))}
          </div>

          {/* Color Inputs for Customization */}
          <div className="flex flex-col space-y-2">
            <label>
              Main Background Color:
              <input
                type="color"
                value={mainBgColor}
                onChange={(e) => setMainBgColor(e.target.value)}
                className="ml-2"
              />
            </label>
            <label>
              List Item Background Color:
              <input
                type="color"
                value={liBgColor}
                onChange={(e) => setLiBgColor(e.target.value)}
                className="ml-2"
              />
            </label>
            <label>
              Text Color:
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="ml-2"
              />
            </label>
            <label>
              List Background Color: {/* New input for <ul> background color */}
              <input
                type="color"
                value={ulBgColor}
                onChange={(e) => setUlBgColor(e.target.value)}
                className="ml-2"
              />
            </label>
          </div>
        </div>
        <div>

          <div ref={divRef} className={`p-4 relative rounded-lg shadow-lg w-96 flex  flex-row-reverse`} style={{ backgroundColor: mainBgColor, color: textColor }}>
            <img
              src={triangle22}
              className="absolute w-72 opacity-15 aspect-square z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt=""
            />

            <div className="absolute top-2 left-1/2 w-full transform -translate-x-1/2 z-0 flex space-x-1">
              <p className={`text-center flex flex-col w-full leading-tight uppercase text-[10px] font-bold`}>
                <span className="tracking-[1em] font-extrabold">Tufail MEMORIAL</span>
                <span className="tracking-[0.3em]"> Sheikh Jana PREMIER LEAGUE</span>
                <span className="text-[#fc065e] tracking-[0.6em]"> 2nd edition 2024</span>
              </p>
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center pt-10">
              {captainImage && (
                <img
                  src={captainImage}
                  alt="Captain"
                  className="w-[100%] h-[90%]"
                />
              )}
              <div className={`text-center font-bold mt-2`} style={{ color: textColor }}>
                Captain: {team1 || 'Captain Name'}
              </div>
            </div>
            <div className="w-1/2 flex flex-col mt-8">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-lg w-[150px] font-bold text-center">{team1 || 'Team 1'}</h2>
                <span className="font-bold">vs</span>
                <h2 className="text-lg w-[160px] font-bold text-center">{team2 || 'Team 2'}</h2>
              </div>
              <p className="text-center font-semibold "  style={{ color: textColor }}>SJ-Champions Playing XI</p>

              <ul className="mt-1 py-1 w-fit px-5 " style={{ backgroundColor: ulBgColor+'10' }}> {/* Apply new background color */}
                {playerNames.map((name, index) => (
                  <li key={index} className={`text-left font-bold uppercase tracking-wide pl-2 w-[160px] mb-0.5`} style={{ backgroundColor: liBgColor, color: textColor }}>
                    {name || `Player ${index + 1}`}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            onClick={handleDownload}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
