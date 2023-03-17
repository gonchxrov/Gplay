import React, { useEffect, useState } from "react";
import { fetchGames } from "../../http/GameAPI";
import { Showcase } from "../../components/Showcase/Showcase";
import { GameSlider } from "../../components/GameSlider/GameSlider";

import "@splidejs/react-splide/css";
import "./Home.scss";

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
      <section className="showcase col-10 mx-auto">
        <Showcase games={gamesShowcase} />
      </section>

      <section className="catalog col-10 mx-auto">
        <GameSlider games={games} />
      </section>
    </>
  );
};

export default Home;
