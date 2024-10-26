import { useState } from "react";
import POTM from "./ScoreCards/POTM";
import Summary from "./ScoreCards/Summary";
import TeamCard from "./ScoreCards/TeamCard";
import ScoreCardBatting from "./ScoreCards/ScoreCardBatting";
import ScoreCardBowling from "./ScoreCards/ScoreCardBowling";

const DownloadImage = () => {

    const [openpage, setOpenpage] = useState({
        PlayerCard: false,
        Summary: false,
        TeamCard: false,
        ScorecardBatting: false,
        ScorecardBowling: false,
    })
    const HandlePage = (page) => {
        setOpenpage({
            PlayerCard: page === 'PlayerCard',
            Summary: page === 'Summary',
            TeamCard: page === 'TeamCard',
            ScorecardBatting: page === 'ScorecardBatting',
            ScorecardBowling: page === 'ScorecardBowling',
        });
    };
    


    return (
        <>
<button
  className="px-4 py-2 m-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
  onClick={() => HandlePage('PlayerCard')}
>
  Open Player Card
</button>
<button
  className="px-4 py-2 m-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
  onClick={() => HandlePage('Summary')}
>
  Open Summary Card
</button>
<button
  className="px-4 py-2 m-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
  onClick={() => HandlePage('TeamCard')}
>
  Open TeamCard Card
</button>
<button
  className="px-4 py-2 m-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"
  onClick={() => HandlePage('ScorecardBatting')}
>
  Open ScoreCard Batting
</button>
<button
  className="px-4 py-2 m-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600"
  onClick={() => HandlePage('ScorecardBowling')}
>
  Open ScoreCard Bowling
</button>


            {openpage.PlayerCard && <POTM />}
            {openpage.Summary && <Summary />}
            {openpage.TeamCard && <TeamCard />}
            {openpage.ScorecardBatting && <ScoreCardBatting />}
            {openpage.ScorecardBowling && <ScoreCardBowling />}
        </>
    );
};

export default DownloadImage;