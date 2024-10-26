import { useRef, useState  , useEffect} from "react";
import { toPng } from "html-to-image";
import triangle22 from "../../assets/imagedownloaderimages/triangle22.png";
import download from "downloadjs";
import './imagdownloader.css';

const ScoreCardBatting = () => {
  const divRef = useRef(null);

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  // State for customizable colors
  const [mainBgColor, setMainBgColor] = useState("#2d3748");
  const [liBgColor, setLiBgColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#ffffff");
  const [ulBgColor, setUlBgColor] = useState("#FFFFFF");

  // Initialize the players with unique objects
  const [players, setPlayers] = useState(
    Array(11).fill(null).map(() => ({
      name: "",
      score: 0,
      balls: 0,
      fours: 0,
      sixes: 0,
      bowler: "",
    }))
  );
  const playerInputRefs = useRef([]); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (playerInputRefs.current && !playerInputRefs.current.some(ref => ref && ref.contains(event.target))) {
        setVisiblePlayerIndex(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  // State to toggle visibility of player inputs
  const [visiblePlayerIndex, setVisiblePlayerIndex] = useState(null);

  const handlePlayerChange = (index, field, value) => {
    const updatedPlayers = players.map((player, i) =>
      i === index ? { ...player, [field]: value } : player
    );
    setPlayers(updatedPlayers);
  };

  const calculateStrikeRate = (runs, balls) => {
    return balls > 0 ? ((runs / balls) * 100).toFixed(2) : "0.00";
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

  const togglePlayerInput = (index) => {
    setVisiblePlayerIndex(visiblePlayerIndex === index ? null : index);
  };

  return (
    <div className="p-4 font-SairaCondensed flex w-full space-y-4">
      <div className="flex max-lg:flex-col-reverse w-full space-x-5">
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

          <div className="grid grid-cols-4 gap-2 ">
            {players.map((player, index) => (
              <div key={index} className="mb-2 relative border border-gray-300 rounded p-2 space-y-2">
                <button
                  onClick={() => togglePlayerInput(index)}
                  className="bg-gray-200 px-4 py-2 rounded w-full text-left font-semibold"
                >
                  {player.name || `Player ${index + 1}`}
                </button>

                {visiblePlayerIndex === index && (
                  <div ref={el => playerInputRefs.current[index] = el} className="space-y-2 absolute z-50 bg-slate-400 p-1 min-w-[30vw] max-md:w-[90vw] outline">
                    <input
                      type="text"
                      placeholder={`Player ${index + 1} Name`}
                      value={player.name}
                      onChange={(e) => handlePlayerChange(index, "name", e.target.value)}
                      className="block w-full p-1 border border-gray-300 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Bowler Name"
                      value={player.bowler}
                      onChange={(e) => handlePlayerChange(index, "bowler", e.target.value)}
                      className="block w-full p-1 border border-gray-300 rounded"
                    />
                    <input
                      type="number"
                      placeholder="Total Runs"
                      value={player.score}
                      onChange={(e) => handlePlayerChange(index, "score", e.target.value)}
                      className="block w-full p-1 border border-gray-300 rounded"
                    />
                    <input
                      type="number"
                      placeholder="Balls Faced"
                      value={player.balls}
                      onChange={(e) => handlePlayerChange(index, "balls", e.target.value)}
                      className="block w-full p-1 border border-gray-300 rounded"
                    />
                    <input
                      type="number"
                      placeholder="4s"
                      value={player.fours}
                      onChange={(e) => handlePlayerChange(index, "fours", e.target.value)}
                      className="block w-full p-1 border border-gray-300 rounded"
                    />
                    <input
                      type="number"
                      placeholder="6s"
                      value={player.sixes}
                      onChange={(e) => handlePlayerChange(index, "sixes", e.target.value)}
                      className="block w-full p-1 border border-gray-300 rounded"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

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
              List Background Color:
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
          <div
            ref={divRef}
            className={`p-4 relative min-w-[400px] rounded-lg shadow-lg w-96 flex  flex-row-reverse`}
            style={{ backgroundColor: mainBgColor, color: textColor }}
          >
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

            <div className="flex w-full flex-col mt-8">
              <div className="flex justify-between items-center min-w-[50%] mx-auto">
                <h2 className="text-base font-bold text-center">{team1 || "Team 1"}</h2>
                <span className="font-bold mx-2"> vs </span>
                <h2 className="text-base font-bold text-center">{team2 || "Team 2"}</h2>
              </div>
              <p className="text-center font-semibold" style={{ color: textColor }}>
                ScoreCard Of Sheikh Jana Champions
              </p>

              <div className="mt-1 py-1 w-full px-2" style={{ backgroundColor: ulBgColor + "10" }}>
                {/* Table header */}
                <div className="grid grid-cols-8 font-semibold text-xs text-center uppercase border-b border-gray-300 pb-2" style={{ color: textColor }}>
                  <span className="col-span-1">Name</span>
                  <span className="col-span-2">Bowler</span>
                  <span className="">Runs</span>
                  <span className="">Balls</span>
                  <span className="">4s</span>
                  <span className="">6s</span>
                  <span className="">SR</span>
                </div>

                <ul className="mt-2 space-y-1">
                  {players.map((player, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-8 text-[10px] text-center font-medium uppercase"
                      style={{ backgroundColor: liBgColor, color: textColor }}
                    >
                      <span className="col-span-1 tracking-wider">{player.name || `Player ${index + 1}`}</span>
                      <span className="col-span-2">{player.bowler}</span>
                      <span className="">{player.score}</span>
                      <span className="">{player.balls}</span>
                      <span className="">{player.fours}</span>
                      <span className="">{player.sixes}</span>
                      <span className="">{calculateStrikeRate(player.score, player.balls)}</span>
                    </li>
                  ))}
                </ul>
                <div className=" h-[40px] mt-3 w-full" style={{ backgroundColor: liBgColor }}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>



            </div>
          </div>

          <div className="mt-4">
            <button onClick={handleDownload} className="px-4 py-2 rounded bg-blue-500 text-white">
              Download Scorecard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCardBatting;
