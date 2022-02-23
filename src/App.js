import React, { useEffect, useState } from "react";
import playerData from "./data/player-data.json";
import Player from "./components/Player/Player";
import "./App.css";

function App() {
  // State Variable for Player Data
  const [player, setPlayer] = useState([]);

  // Load Player Data
  useEffect(() => {
    setPlayer(playerData);
  }, []);

  return (
    <div>
      <div>
        <h1 className="heading">Player Profile</h1>
        <p className="player-num">Total Players: {playerData.length}</p>
        {playerData.map((data) => (
          <Player player={data} key={data.id}></Player>
        ))}
      </div>
    </div>
  );
}

export default App;
