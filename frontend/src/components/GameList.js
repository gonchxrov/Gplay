import React from "react";
import { Game } from "./Game";

export function GameList({ games }) {
  return (
    <ul className="game-list">
      {games.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </ul>
  );
}
