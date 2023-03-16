import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { imgPath } from "../helpers";
import { ROUTE } from "../router";

import "@splidejs/react-splide/css";

export function Showcase({ games }) {
  return (
    <Splide
      games={games}
      options={{
        autoplay: true,
        type: "loop",
        autoHeight: true,
      }}
    >
      {games.map((game) => (
        <SplideSlide key={game.id} className="showcase-item">
          <img
            src={`${imgPath}/img/games/showcase/${game.photo}`}
            alt={game.title}
          />
          <h2>
            <div onClick={() => navigate(`${ROUTE.GAME}/${game.id}`)}>
              {game.title}
            </div>
          </h2>
        </SplideSlide>
      ))}
    </Splide>
  );
}
