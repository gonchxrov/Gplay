import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { fetchOneGame } from "../../http/GameAPI";
import { imgPath, format } from "../../helpers";
import { Route, Link, Routes, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";

import "./Game.scss";

const Game = () => {
  const [game, setGame] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchOneGame(params.id)
      .then((data) => setGame(data))
      .finally(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    console.log(game);
  }, [game]);

  return (
    <Layout isLoaded={isLoaded}>
      <section className="section--game">
        <h1>{game.title}</h1>
        <div className="game-block col-10 row mx-auto">
          <div className="image-wrapper col-5">
            <img src={`${imgPath}/img/games/main/${game.photo}`} />
          </div>
          <div className="info-wrapper col-7">
            <p>
              <span className="green-text">Title:</span> {game.title}
            </p>
            <p>
              <span className="green-text">Description:</span>{" "}
              {game.description}
            </p>
            <p>
              <span className="green-text">Date:</span>{" "}
              {format(game.releaseDate)}
            </p>
            <p className="price">
              <span className="green-text">Price:</span> {game.price} €
            </p>
            <Button>Buy</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Game;
