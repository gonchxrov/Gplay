import React, { useEffect, useState } from "react";
import { fetchGames } from "../http/GameAPI";
import { Showcase } from "../components/Showcase";
import { GameSlider } from "../components/GameSlider";

import "@splidejs/react-splide/css";

const Home = () => {
  const [games, setGames] = useState([]);
  const [gamesShowcase, setGamesShowcase] = useState([]);

  useEffect(() => {
    fetchGames().then((data) => setGames(data));
  }, []);

  useEffect(() => {
    setGamesShowcase(games.filter((game) => game.showcase));
  }, [games]);
  return (
    <>
      <h1>Home</h1>
      <Showcase games={gamesShowcase} />
      <GameSlider games={games} />
    </>
  );
};

export default Home;
