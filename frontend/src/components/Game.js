import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../router";
import { imgPath } from "../helpers";

export function Game({ game }) {
  const navigate = useNavigate();

  return (
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
          <button type="button" className="btn--green">
            Buy
          </button>
        </div>
      </div>
    </li>
  );
}
