import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GameItem } from "../GameItem/GameItem";

import "@splidejs/react-splide/css";
import "./GameSlider.scss";

export function GameSlider({ games }) {
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
        <SplideSlide key={game.id} className="m-0">
          <GameItem key={game.id} game={game} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
