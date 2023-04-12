import React, { useEffect, useState } from "react";
import { fetchCountOfGames, fetchGamesByPage } from "../../http/GameAPI";
import { GameList } from "../../components/GameList/GameList";
import { Layout } from "../../components/Layout/Layout";

import "./Catalog.scss";

const Catalog = () => {
  const [games, setGames] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchCountOfGames().then((data) => setTotalCount(data));
  }, []);

  useEffect(() => {
    fetchGamesByPage(activePage)
      .then((data) => {
        setGames(data.games);
        setTotalCount(data.totalCount);
      })
      .finally(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    fetchGamesByPage(activePage).then((data) => setGames(data.games));
  }, [activePage]);

  return (
    <Layout isLoaded={isLoaded}>
      <section className="section--catalog">
        <h1>Catalog</h1>
        <GameList
          games={games}
          activePage={activePage}
          totalCount={totalCount}
          setPage={setActivePage}
        />
      </section>
    </Layout>
  );
};

export default Catalog;
