import React, { useState } from "react";
import HighScoreTable from "./components/HighScoreTable.jsx";
import allCountryScores from "./components/scores.js";

const App = () => {
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  const sortedAllScores = allCountryScores
    .reduce((allScores, countryScore) => {
      return allScores.concat(countryScore.scores);
    }, [])
    .sort((a, b) => {
      const scoreA = Number(a.s);
      const scoreB = Number(b.s);
      return sortOrder === "asc" ? scoreB - scoreA : scoreA - scoreB;
    });

  const sortedCountryScores = allCountryScores.map((countryScore) => ({
    ...countryScore,
    scores: countryScore.scores.slice().sort((a, b) => {
      const scoreA = Number(a.s);
      const scoreB = Number(b.s);
      return sortOrder === "asc" ? scoreB - scoreA : scoreA - scoreB;
    }),
  }));

  return (
    <div>
      <h1>High Score per Country</h1>
      <button onClick={toggleSortOrder}> Sort Order</button>
      <HighScoreTable
        country="World"
        scores={sortedAllScores}
        sortOrder={sortOrder}
      />
      {sortedCountryScores.map((countryScore) => (
        <HighScoreTable
          key={countryScore.name}
          country={countryScore.name}
          scores={countryScore.scores}
          sortOrder={sortOrder}
        />
      ))}
    </div>
  );
};
export default App;
