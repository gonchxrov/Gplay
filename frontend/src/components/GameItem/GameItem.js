import React from "react";
import { useNavigate } from "react-router-dom";
import { imgPath } from "../../helpers";
import { ROUTE } from "../../router";
import { ButtonBuy } from "../ButtonBuy/ButtonBuy";

import "@splidejs/react-splide/css";
import "./GameItem.scss";

export function GameItem({ game }) {
  const navigate = useNavigate();

  return (
    <div className="game">
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
          <ButtonBuy game={game} />
        </div>
      </div>
    </div>
  );
}
