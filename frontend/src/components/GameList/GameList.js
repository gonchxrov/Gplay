import React from "react";
import { GameItem } from "../GameItem/GameItem";

import "./GameList.scss";

export function GameList({ games }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
}
