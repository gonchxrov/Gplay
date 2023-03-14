import React, { useEffect, useState } from "react";
import { fetchGames } from "../http/GameAPI";

const Game = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then((data) => setGames(data));
  }, []);

  return (
    <>
      <h1>GAME</h1>
    </>
  );
};

export default Game;
