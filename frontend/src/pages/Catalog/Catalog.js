import React, { useEffect, useState, componentDidMount } from "react";
import { fetchGames } from "../../http/GameAPI";
import { GameList } from "../../components/GameList/GameList";
import { Layout } from "../../components/Layout/Layout";

const Catalog = () => {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchGames()
      .then((data) => setGames(data))
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <h1>Catalog</h1>
      <GameList games={games} />
    </Layout>
  );
};

export default Catalog;
