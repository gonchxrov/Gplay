import React from "react";
import { useNavigate } from "react-router-dom";

import "./GameList.scss";

export function GameList({ games }) {
  const navigate = useNavigate();

  return (
    <ul className="game-list">
      {games.map((game) => (
        <li className="game">
          <div className="game__image">
            <div onClick={() => navigate(`${ROUTE.GAME}/${game.id}`)}>
              <img
                src={`${imgPath}/img/games/main/${game.photo}`}
                alt={game.title}
              />
            </div>
          </div>
          <div className="game__text">
            <p
              className="game__name"
              onClick={() => navigate(`${ROUTE.GAME}/${game.id}`)}
            >
              {game.title}
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
        </li>
      ))}
    </ul>
  );
}
