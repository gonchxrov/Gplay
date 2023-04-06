import React, { useEffect, useState } from "react";
import { fetchCountOfGames, fetchGamesByPage } from "../../http/GameAPI";
import { GameList } from "../../components/GameList/GameList";
import { Layout } from "../../components/Layout/Layout";
import "./Catalog.scss";

const Catalog = () => {
  const [totalCount, setTotalCount] = useState([]);
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetchCountOfGames().then((data) => setTotalCount(data));
  }, []);

  useEffect(() => {
    fetchGamesByPage(activePage)
      .then((data) => setGames(data))
      .finally(() => setIsLoaded(true));
  }, [totalCount]);

  useEffect(() => {
    fetchGamesByPage(activePage).then((data) => setGames(data));
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
