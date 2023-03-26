import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout/Layout";
import "./Cart.scss";

const Cart = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <h1>Cart</h1>
    </Layout>
  );
};

export default Cart;
