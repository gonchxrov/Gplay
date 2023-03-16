import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { imgPath } from "../helpers";
import { ROUTE } from "../router";

import "@splidejs/react-splide/css";

export function GameSlider({ games }) {
  return (
    <Splide
      games={games}
      options={{
        type: "loop",
        gap: "1rem",
        arrows: false,
        pagination: "true",
        perPage: 3,
        autoWidth: true,
      }}
    >
      {games.map((game) => (
        <SplideSlide key={game.id} className="showcase-item">
          <div className="game__image">
            <div onClick={() => navigate(`${ROUTE.GAME}/${game.id}`)}>
              <img
                src={`${imgPath}/img/games/main/${game.photo}`}
                alt={game.title}
              />
            </div>
          </div>
          <div className="game__text">
            <p className="game__name">
              <a href="#">{game.title}</a>
            </p>
            <div className="text__footer">
              <p className="game__price">
                {game.price} <span>$</span>
              </p>
              <button type="button" className="btn--green">
                Buy
              </button>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
