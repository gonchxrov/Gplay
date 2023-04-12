import React, { useEffect, useState } from "react";
import { fetchGames } from "../../http/GameAPI";
import { Showcase } from "../../components/Showcase/Showcase";
import { GameSlider } from "../../components/GameSlider/GameSlider";
import { Layout } from "../../components/Layout/Layout";

import "@splidejs/react-splide/css";
import "./Home.scss";

const Home = () => {
  const [games, setGames] = useState([]);
  const [gamesShowcase, setGamesShowcase] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchGames()
      .then((data) => {
        setGames(data);
        setGamesShowcase(data.filter((game) => game.showcase));
      })
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <section className="section--showcase">
        <Showcase games={gamesShowcase} />
      </section>

      <section className="section--game-slider">
        <GameSlider games={games} />
      </section>
    </Layout>
  );
};

export default Home;
