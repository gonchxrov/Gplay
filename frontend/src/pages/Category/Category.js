import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../http/CategoryAPI";
import { ItemList } from "../../components/ItemList/ItemList";
import { Layout } from "../../components/Layout/Layout";

import "./Category.scss";

const Category = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data))
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <section className="section--category">
        <h1>Categories</h1>
        <ItemList items={categories} type="category" />
      </section>
    </Layout>
  );
};

export default Category;
