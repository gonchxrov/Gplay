import React, { useEffect, useState } from "react";
import { fetchGenres } from "../../http/GenreAPI";
import { ItemList } from "../../components/ItemList/ItemList";
import { Layout } from "../../components/Layout/Layout";

import "./Genre.scss";

const Genre = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres()
      .then((data) => setGenres(data))
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <section className="section--genre">
        <h1>Genres</h1>
        <ItemList items={genres} type="genre" />
      </section>
    </Layout>
  );
};

export default Genre;
