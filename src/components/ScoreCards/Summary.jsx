import React, { useState, useRef, useEffect } from 'react';
import { toPng } from 'html-to-image'; // Make sure to install this library
import download from 'downloadjs'; // Make sure to install this library
import triangle22 from "../../assets/imagedownloaderimages/triangle22.png";
import qalanadars from "../../assets/imagedownloaderimages/qalanadars.png";
import risingstar from "../../assets/imagedownloaderimages/risingstar.png";
import united from "../../assets/imagedownloaderimages/united.png";
import lions from "../../assets/imagedownloaderimages/lions.png";
import warriors from "../../assets/imagedownloaderimages/warriors.png";
import zwanan from "../../assets/imagedownloaderimages/zwanan.png";
import zalmi from "../../assets/imagedownloaderimages/zalmi.png";


function Summary() {
  const divRef = useRef(null);
  const [team1, setTeam1] = useState({
    name: '',
    totalscore: 0,
    totalovers: 0,
    batsman1: { name: '', score: '' },
    batsman2: { name: '', score: '' },
    bowler1: { name: '', wicketsRuns: '' },
    bowler2: { name: '', wicketsRuns: '' },
  });
  const [team2, setTeam2] = useState({
    name: '',
    totalscore: 0,
    totalovers: 0,
    batsman1: { name: '', score: '' },
    batsman2: { name: '', score: '' },
    bowler1: { name: '', wicketsRuns: '' },
    bowler2: { name: '', wicketsRuns: '' },
  });
  const [winner, setWinner] = useState('');

  // New state variables for colors
  const [backgroundColor, setBackgroundColor] = useState('#134700');
  const [ulBgColor, setUlBgColor] = useState('#903fff');
  const [liBgColor, setLiBgColor] = useState('#903fff');
  const [li1BgColor, setLi1BgColor] = useState('#999fff');
  const [textColor, setTextColor] = useState('#fff');
  const [borderColor, setBorderColor] = useState('#000000');
  const [selectedImages, setSelectedImages] = useState([]);

  const [teamsimgs, setTeamsimgs] = useState({
    Team1img: triangle22,
    Team2img: triangle22
  });

  const handleImageClick = (src) => {
    setSelectedImages((prevSelected) => {
      // If the image is already selected, deselect it
      if (prevSelected.includes(src)) {
        return prevSelected.filter((image) => image !== src);
      }
      // If two images are already selected, show an alert
      else if (prevSelected.length === 2) {
        const confirmClear = window.confirm(
          "You already selected two images. Do you want to clear the selection and choose again?"
        );
        if (confirmClear) {
          return [src]; // Start fresh with the newly selected image
        } else {
          return prevSelected; // Keep current selection if user cancels
        }
      }
      // If fewer than two images are selected, add the new one
      else {
        return [...prevSelected, src];
      }
    });
  };




  useEffect(() => {
    setTeamsimgs((prevTeamsimgs) => ({
      Team1img: selectedImages[0] || prevTeamsimgs.Team1img,
      Team2img: selectedImages[1] || prevTeamsimgs.Team2img,
    }));
  }, [selectedImages]);


  const images = [triangle22, qalanadars, lions, united, zwanan, risingstar, warriors,zalmi]

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
    <div className="flex max-md:flex-col-reverse space-x-4 mx-aut font-SairaCondensed p-4">
      <div className="mb-6">

        <input
          type="text"
          placeholder="Who Won The Match by Runs / Wickets"
          value={winner}
          onChange={(e) => setWinner(e.target.value)}
          className="border rounded p-2 w-full mb-4"
        />

        <div className="grid grid-cols-4 gap-2 my-1">
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              className={`w-10 aspect-square border p-1 ${selectedImages.includes(imgSrc) ? 'border-blue-500' : ''
                }`}
              alt=""
              onClick={() => handleImageClick(imgSrc)}
            />
          ))}
        </div>

        <div className="mb-2 grid gap-2 grid-cols-2">
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
            placeholder="TEAM Total score /wickets (Overs)"
            value={team1.totalscore}
            onChange={(e) => setTeam1({ ...team1, totalscore: e.target.value })}
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

        <div className="mb-2 grid gap-2 grid-cols-2">
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
            placeholder="TEAM Total score /wickets (Overs)"
            value={team2.totalscore}
            onChange={(e) => setTeam1({ ...team2, totalscore: e.target.value })}
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
        <h2 className="text-lg font-bold mb-2">Customize Colors</h2>
        <div className="mb-6 grid grid-cols-4 gap-3">
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
      </div>
      <div>
        <div
          ref={divRef}
          className={`px-4 uppercase py-2 relative min-w-[400px] rounded-lg shadow-lg w-96 max-h-96 h-fit flex  flex-row-reverse`}
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

            {/* <h2 className="text-2xl font-bold mb-2">Match Summary</h2> */}
            <div className="mt-2">
              <div className='w-fit h-[80px] border mx-auto bg-[#ffffff50] flex justify-between rounded-sm items-center'>
                {teamsimgs.Team1img && (
                  <img
                    src={teamsimgs.Team1img}
                    alt="Captain"
                    className="w-20 aspect-square"
                  />
                )}
                <span className='font-SairaSemiCondensed font-extrabold text-5xl text-white'>VS</span>
                {teamsimgs.Team2img && (
                  <img
                    src={teamsimgs.Team2img}
                    alt="Captain"
                    className="w-20 aspect-square"
                  />
                )}
              </div>
              <div className=" h-auto mt-3 w-[95%] text-center my-auto rounded-sm mx-auto" style={{ backgroundColor: liBgColor }}>
                <h3 className="text-xl font-bold">{winner || ' Who Won THe Match'}</h3>

              </div>
              <div className="flex my-2">
                {/* Team 1 Section */}
                <div className="w-full px-2" style={{ backgroundColor: ulBgColor + "10" }}>

                  <div className="flex justify-between rounded-sm py-1.5 mb-0.5" style={{ backgroundColor: liBgColor }}>
                    <span>{team1.name || 'Team 1 Name'}</span>
                    <span>{team1.totalscore || 'R/W(O)'}</span>
                  </div>
                  <div className="flex justify-between rounded-sm mb-0.5" style={{ backgroundColor: li1BgColor }}>
                    <span>{team1.batsman1.name || 'Batsman'}</span>
                    <span>{team1.batsman1.score || '00(00)'}</span>
                  </div>
                  <div className="flex justify-between rounded-sm mb-0.5" style={{ backgroundColor: li1BgColor }}>
                    <span>{team1.batsman2.name || 'Batman'}</span>
                    <span>{team1.batsman2.score || '0-00'}</span>
                  </div>
                  <div className="flex justify-between rounded-sm mb-0.5" style={{ backgroundColor: li1BgColor }}>
                    <span>{team1.bowler1.name || 'Bowler'}</span>
                    <span>{team1.bowler1.wicketsRuns || '0-00'}</span>
                  </div>
                  <div className="flex justify-between rounded-sm mb-0.5" style={{ backgroundColor: li1BgColor }}>
                    <span>{team1.bowler2.name || 'Bowler'}</span>
                    <span>{team1.bowler2.wicketsRuns || '0-00'}</span>
                  </div>
                </div>

                {/* Team 2 Section */}
                <div className="w-full px-2">
                  <div className="flex justify-between rounded-sm py-1.5 mb-0.5" style={{ backgroundColor: li1BgColor }}>
                    <span>{team2.name || 'Team 2 Name'}</span>
                    <span>{team2.totalscore || 'R/W(O)'}</span>
                  </div>
                  <div className="flex justify-between rounded-sm mb-0.5" style={{ backgroundColor: liBgColor }}>
                    <span>{team2.batsman1.name || 'Batman'}</span>
                    <span>{team2.batsman1.score || '00(00)'}</span>
                  </div>
                  <div className="flex justify-between rounded-sm mb-0.5" style={{ backgroundColor: liBgColor }}>
                    <span>{team2.batsman2.name || 'Batman'}</span>
                    <span>{team2.batsman2.score || '00(00)'}</span>
                  </div>
                  <div className="flex justify-between rounded-sm mb-0.5" style={{ backgroundColor: liBgColor }}>
                    <span>{team2.bowler1.name || 'Bowler '}</span>
                    <span>{team2.bowler1.wicketsRuns || '0-00'}</span>
                  </div>
                  <div className="flex justify-between rounded-sm mb-0.5" style={{ backgroundColor: liBgColor }}>
                    <span>{team2.bowler2.name || 'Bowler '}</span>
                    <span>{team2.bowler2.wicketsRuns || '0-00'}</span>
                  </div>
                </div>
              </div>



            </div>
          </div>



        </div>
        <div>
          <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded">
            Download Summary
          </button>
        </div>
      </div>


    </div>
  );
}

export default Summary;
