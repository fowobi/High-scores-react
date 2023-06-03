import React from "react";
import PlayerScore from "./PlayerScores";



const HighScoreTable = ({ country, scores, sortOrder }) => {
  const sortedScores = scores.slice().sort((a, b) => {
    const scoreA = Number(a.s);
    const scoreB = Number(b.s);
    return sortOrder === 'asc' ? scoreB - scoreA : scoreA - scoreB;
  });

  return (
    <div className="country">
       
        <h2>{country === 'World' ? 'World-wide' : country} High Scores</h2>
      
      <table>
        
        <tbody>
          {sortedScores.map((score, index) => (
            <PlayerScore key={index} name={score.n} score={score.s} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreTable;
