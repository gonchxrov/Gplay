import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { imgPath } from "../../helpers";
import { ROUTE } from "../../router";

import "@splidejs/react-splide/css";
import "./Item.scss";

export function Item({ item, type }) {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (type === "category") {
      item.url = `${ROUTE.CATEGORY}/${item.id}`;
      item.urlImg = `${imgPath}/img/categories/${item.photo}`;
    } else {
      item.url = `${ROUTE.GENRE}/${item.id}`;
      item.urlImg = `${imgPath}/img/genres/${item.photo}`;
    }

    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <div className="item">
          <div className="item__image">
            <div onClick={() => navigate(item.url)}>
              <img src={item.urlImg} alt={item.title} />
            </div>
          </div>
          <div className="item__text">
            <p className="item__name">
              <span onClick={() => navigate(item.url)}>{item.title}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
