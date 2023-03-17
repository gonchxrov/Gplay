import React, { useEffect, useState } from "react";
import { fetchGames } from "../../http/GameAPI";
import { GameList } from "../../components/GameList/GameList";
const Catalog = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then((data) => setGames(data));
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      {games.length ? <GameList games={games} /> : null}
    </>
  );
};

export default Catalog;
