import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { imgPath } from "../../helpers";
import { ROUTE } from "../../router";

import "@splidejs/react-splide/css";
import "./Showcase.scss";

export function Showcase({ games }) {
  return (
    <Splide
      className="showcase-list"
      games={games}
      options={{
        autoplay: true,
        type: "loop",
        autoHeight: true,
      }}
    >
      {games.map((game) => (
        <SplideSlide key={game.id} className="showcase-item">
          <div className="image">
            <img
              src={`${imgPath}/img/games/showcase/${game.photo}`}
              alt={game.title}
            />
          </div>
          <h2>
            <div
              className="link text-center"
              onClick={() => navigate(`${ROUTE.GAME}/${game.id}`)}
            >
              {game.title}
            </div>
          </h2>
        </SplideSlide>
      ))}
    </Splide>
  );
}
