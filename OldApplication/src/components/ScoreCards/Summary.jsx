import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image'; // Make sure to install this library
import download from 'downloadjs'; // Make sure to install this library
import triangle22 from "../../assets/imagedownloaderimages/triangle22.png";


function Summary() {
  const divRef = useRef(null);
  const [team1, setTeam1] = useState({
    name: '',
    batsman1: { name: '', score: '' },
    batsman2: { name: '', score: '' },
    bowler1: { name: '', wicketsRuns: '' },
    bowler2: { name: '', wicketsRuns: '' },
  });
  const [team2, setTeam2] = useState({
    name: '',
    batsman1: { name: '', score: '' },
    batsman2: { name: '', score: '' },
    bowler1: { name: '', wicketsRuns: '' },
    bowler2: { name: '', wicketsRuns: '' },
  });
  const [winner, setWinner] = useState('');

  // New state variables for colors
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [ulBgColor, setUlBgColor] = useState('#903fff');
  const [liBgColor, setLiBgColor] = useState('#903fff');
  const [li1BgColor, setLi1BgColor] = useState('#999fff');
  const [textColor, setTextColor] = useState('#000000');
  const [borderColor, setBorderColor] = useState('#000000');

  const handleDownload = () => {
    if (divRef.current) {
      toPng(divRef.current, { quality: 1, pixelRatio: 5 })
        .then((dataUrl) => {
          download(dataUrl, 'team-card.png');
        })
        .catch((err) => {
          console.error('Oops, something went wrong!', err);
        });
    }
  };

  return (
    <div className="flex space-x-4 mx-aut font-SairaCondensed p-4">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Who Won The Match"
          value={winner}
          onChange={(e) => setWinner(e.target.value)}
          className="border rounded p-2 w-full mb-4"
        />

        <div className="mb-6 grid gap-2 grid-cols-2">
          <h2 className="text-lg font-bold mb-2">Team 1</h2>
          <input
            type="text"
            placeholder="TEAM 1 Name"
            value={team1.name}
            onChange={(e) => setTeam1({ ...team1, name: e.target.value })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Batsman 1 Name"
            value={team1.batsman1.name}
            onChange={(e) => setTeam1({ ...team1, batsman1: { ...team1.batsman1, name: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Batsman 1 Score (Balls)"
            value={team1.batsman1.score}
            onChange={(e) => setTeam1({ ...team1, batsman1: { ...team1.batsman1, score: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Batsman 2 Name"
            value={team1.batsman2.name}
            onChange={(e) => setTeam1({ ...team1, batsman2: { ...team1.batsman2, name: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Batsman 2 Score (Balls)"
            value={team1.batsman2.score}
            onChange={(e) => setTeam1({ ...team1, batsman2: { ...team1.batsman2, score: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Bowler 1 Name"
            value={team1.bowler1.name}
            onChange={(e) => setTeam1({ ...team1, bowler1: { ...team1.bowler1, name: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Bowler 1 Wickets-Runs"
            value={team1.bowler1.wicketsRuns}
            onChange={(e) => setTeam1({ ...team1, bowler1: { ...team1.bowler1, wicketsRuns: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Bowler 2 Name"
            value={team1.bowler2.name}
            onChange={(e) => setTeam1({ ...team1, bowler2: { ...team1.bowler2, name: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Bowler 2 Wickets-Runs"
            value={team1.bowler2.wicketsRuns}
            onChange={(e) => setTeam1({ ...team1, bowler2: { ...team1.bowler2, wicketsRuns: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
        </div>

        <div className="mb-6 grid gap-2 grid-cols-2">
          <h2 className="text-lg font-bold mb-2">Team 2</h2>
          <input
            type="text"
            placeholder="TEAM 2 Name"
            value={team2.name}
            onChange={(e) => setTeam2({ ...team2, name: e.target.value })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Batsman 1 Name"
            value={team2.batsman1.name}
            onChange={(e) => setTeam2({ ...team2, batsman1: { ...team2.batsman1, name: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Batsman 1 Score (Balls)"
            value={team2.batsman1.score}
            onChange={(e) => setTeam2({ ...team2, batsman1: { ...team2.batsman1, score: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Batsman 2 Name"
            value={team2.batsman2.name}
            onChange={(e) => setTeam2({ ...team2, batsman2: { ...team2.batsman2, name: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Batsman 2 Score (Balls)"
            value={team2.batsman2.score}
            onChange={(e) => setTeam2({ ...team2, batsman2: { ...team2.batsman2, score: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Bowler 1 Name"
            value={team2.bowler1.name}
            onChange={(e) => setTeam2({ ...team2, bowler1: { ...team2.bowler1, name: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Bowler 1 Wickets-Runs"
            value={team2.bowler1.wicketsRuns}
            onChange={(e) => setTeam2({ ...team2, bowler1: { ...team2.bowler1, wicketsRuns: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Bowler 2 Name"
            value={team2.bowler2.name}
            onChange={(e) => setTeam2({ ...team2, bowler2: { ...team2.bowler2, name: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Bowler 2 Wickets-Runs"
            value={team2.bowler2.wicketsRuns}
            onChange={(e) => setTeam2({ ...team2, bowler2: { ...team2.bowler2, wicketsRuns: e.target.value } })}
            className="border rounded p-2 w-full mb-2"
          />
        </div>

        {/* Color inputs for customization */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Customize Colors</h2>
          <label className="block mb-2">Background Color:</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="border rounded p-2 w-full mb-4"
          />
          <label className="block mb-2">LI Color:</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setLiBgColor(e.target.value)}
            className="border rounded p-2 w-full mb-4"
          />
          <label className="block mb-2">LI Color:</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setLi1BgColor(e.target.value)}
            className="border rounded p-2 w-full mb-4"
          />
          <label className="block mb-2">UL Color:</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setUlBgColor(e.target.value)}
            className="border rounded p-2 w-full mb-4"
          />
          <label className="block mb-2">Text Color:</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="border rounded p-2 w-full mb-4"
          />
          <label className="block mb-2">Border Color:</label>
          <input
            type="color"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
            className="border rounded p-2 w-full mb-4"
          />
        </div>

        <div>
          <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded">
            Download Summary
          </button>
        </div>
      </div>

      <div
        ref={divRef}
        className={`p-4 relative min-w-[400px] rounded-lg shadow-lg w-96 max-h-96 h-fit flex  flex-row-reverse`}
        style={{ backgroundColor: backgroundColor, color: textColor }}
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

          <h2 className="text-2xl font-bold mb-4">Match Summary</h2>
          <h3 className="text-xl font-bold">{winner} Won The Match</h3>
          <div className="mb-4">
          <div className=" h-[40px] mt-3 w-full" style={{ backgroundColor: liBgColor }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="flex my-2">
              {/* Team 1 Section */}
              <div className="w-full px-2" style={{ backgroundColor: ulBgColor + "10" }}>
                <h4 className="text-lg font-bold">{team1.name}</h4>

                {/* Batsmen and Bowlers */}
                <div className="flex justify-between mb-0.5" style={{ backgroundColor: li1BgColor }}>
                  <span>{team1.batsman1.name || 'Batsman'}</span>
                  <span>{team1.batsman1.score || '00(00)'}</span>
                </div>
                <div className="flex justify-between mb-0.5" style={{ backgroundColor: li1BgColor }}>
                  <span>{team1.batsman2.name || 'Batman'}</span>
                  <span>{team1.batsman2.score || '0-00'}</span>
                </div>
                <div className="flex justify-between mb-0.5" style={{ backgroundColor: li1BgColor }}>
                  <span>{team1.bowler1.name || 'Bowler'}</span>
                  <span>{team1.bowler1.wicketsRuns || '0-00'}</span>
                </div>
                <div className="flex justify-between mb-0.5" style={{ backgroundColor: li1BgColor }}>
                  <span>{team1.bowler2.name || 'Bowler'}</span>
                  <span>{team1.bowler2.wicketsRuns || '0-00'}</span>
                </div>
              </div>

              {/* Team 2 Section */}
              <div className="w-full px-2">
                <h4 className="text-lg font-bold">{team2.name}</h4>

                {/* Batsmen and Bowlers */}
                <div className="flex justify-between mb-0.5" style={{ backgroundColor: liBgColor }}>
                  <span>{team2.batsman1.name || 'Batman'}</span>
                  <span>{team2.batsman1.score || '00(00)'}</span>
                </div>
                <div className="flex justify-between mb-0.5" style={{ backgroundColor: liBgColor }}>
                  <span>{team2.batsman2.name || 'Batman'}</span>
                  <span>{team2.batsman2.score || '00(00)'}</span>
                </div>
                <div className="flex justify-between mb-0.5" style={{ backgroundColor: liBgColor }}>
                  <span>{team2.bowler1.name || 'Batman'}</span>
                  <span>{team2.bowler1.wicketsRuns || '0-00'}</span>
                </div>
                <div className="flex justify-between mb-0.5" style={{ backgroundColor: liBgColor }}>
                  <span>{team2.bowler2.name || 'Batman'}</span>
                  <span>{team2.bowler2.wicketsRuns || '0-00'}</span>
                </div>
              </div>
            </div>



          </div>



        </div>
      </div>

    </div>
  );
}

export default Summary;
