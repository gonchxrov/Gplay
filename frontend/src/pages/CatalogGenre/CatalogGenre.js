import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchGamesByGenre } from "../../http/GameAPI";
import { fetchGenre } from "../../http/GenreAPI";
import { GameList } from "../../components/GameList/GameList";
import { Layout } from "../../components/Layout/Layout";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ROUTE } from "../../router/Routes";

import "./CatalogGenre.scss";

const CatalogGenre = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [games, setGames] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchGenre(params.id).then((data) => {
      setBreadcrumbs([
        {
          route: ROUTE.CATEGORY,
          title: "Categories",
        },
        {
          route: location.pathname,
          title: data.title,
        },
      ]);
    });
  }, []);

  useEffect(() => {
    fetchGamesByGenre(params.id, activePage)
      .then((data) => {
        setGames(data.games);
        setTotalCount(data.totalCount);
      })
      .finally(() => setIsLoaded(true));
  }, [breadcrumbs]);

  useEffect(() => {
    fetchGamesByGenre(params.id, activePage).then((data) =>
      setGames(data.games)
    );
  }, [activePage]);

  return (
    <Layout isLoaded={isLoaded}>
      <section className="section--catalog-genre">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
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

export default CatalogGenre;
