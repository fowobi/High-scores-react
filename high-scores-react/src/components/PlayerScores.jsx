import React from "react";
import { FaGamepad } from 'react-icons/fa';


const PlayerScore = ({ name, score }) => {
  return (
    <tr>
      <td>  <FaGamepad className="gamepad-icon" /> {name}</td>
      <td>{score}</td>
    </tr>
  );
};

export default PlayerScore;
