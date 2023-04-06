import React from "react";
import { GameItem } from "../GameItem/GameItem";
import { Pagination } from "../Pagination/Pagination";
import "./GameList.scss";

export function GameList({ games, activePage, totalCount, setPage }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
      <Pagination
        totalCount={totalCount}
        limit={10}
        activePage={activePage}
        setPage={setPage}
      />
    </div>
  );
}
