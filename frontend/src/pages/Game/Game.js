import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";

const Game = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <h1>GAME</h1>
    </Layout>
  );
};

export default Game;
