import React from "react";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { imgPath } from "../../helpers";
import { ROUTE } from "../../router";

import "@splidejs/react-splide/css";
import "./GameSlider.scss";

export function GameSlider({ games }) {
  const navigate = useNavigate();

  return (
    <Splide
      className="game-list row p-0"
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
        <SplideSlide key={game.id} className="game">
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
              <span onClick={() => navigate(`${ROUTE.GAME}/${game.id}`)}>
                {game.title}
              </span>
            </p>
            <div className="text__footer">
              <p className="game__price">
                {game.price} <span>$</span>
              </p>
              <button type="button" className="btn btn--green">
                Buy
              </button>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
