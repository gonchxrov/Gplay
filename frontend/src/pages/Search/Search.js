import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGamesByKeyword } from "../../http/GameAPI";
import { GameList } from "../../components/GameList/GameList";
import { Layout } from "../../components/Layout/Layout";

import "./Search.scss";

const Search = () => {
  const params = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [games, setGames] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchGamesByKeyword(params.keyword)
      .then((data) => setGames(data))
      .finally(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    fetchGamesByKeyword(params.keyword).then((data) => setGames(data));
  }, [params.keyword]);

  useEffect(() => {
    setTotalCount(games.length);
  }, [games]);

  return (
    <Layout isLoaded={isLoaded}>
      <section className="section--search">
        <h1 className="mb-4">Search</h1>
        {games.length > 0 ? (
          <>
            <h2 className="mb-4">
              Results found for the keyword: "{params.keyword}"
            </h2>
            <GameList
              games={games}
              activePage={activePage}
              totalCount={totalCount}
              setPage={setActivePage}
            />
          </>
        ) : (
          <div className="oops-block">
            <h2>Nothing found!</h2>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Search;
