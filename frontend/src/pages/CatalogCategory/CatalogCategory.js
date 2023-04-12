import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchGamesByCategory } from "../../http/GameAPI";
import { fetchCategory } from "../../http/CategoryAPI";
import { GameList } from "../../components/GameList/GameList";
import { Layout } from "../../components/Layout/Layout";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ROUTE } from "../../router/Routes";

import "./CatalogCategory.scss";

const CatalogCategory = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [games, setGames] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchCategory(params.id).then((data) => {
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
    fetchGamesByCategory(params.id, activePage)
      .then((data) => {
        setGames(data.games);
        setTotalCount(data.totalCount);
      })
      .finally(() => setIsLoaded(true));
  }, [breadcrumbs]);

  useEffect(() => {
    fetchGamesByCategory(params.id, activePage).then((data) =>
      setGames(data.games)
    );
  }, [activePage]);

  return (
    <Layout isLoaded={isLoaded}>
      <section className="section--catalog-category">
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

export default CatalogCategory;
