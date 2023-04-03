import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import {
  unSetCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  selectCart,
  selectUser,
} from "../../store";
import { createPurchase } from "../../http/PurchaseAPI";
import { ROUTE } from "../../router";
import { imgPath } from "../../helpers";

import "./Cart.scss";

const Cart = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buy = () => {
    cart.map((item) => {
      createPurchase({
        userId: user.id,
        gameId: item.game.id,
        price: item.game.price,
        quantity: item.quantity,
      });
    });

    localStorage.setItem("cart", "");
    dispatch(unSetCart());

    navigate(ROUTE.HOME);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setTotalPrice(
      cart.reduce(
        (accumulator, { game, quantity }) =>
          accumulator + quantity * game.price,
        0
      )
    );
  }, [cart]);

  const handleDecrement = (game) => {
    dispatch(
      decrementQuantity({
        game,
      })
    );
  };

  const handleIncrement = (game) => {
    dispatch(
      incrementQuantity({
        game,
      })
    );
  };

  const handleRemove = (game) => {
    dispatch(
      removeFromCart({
        game,
      })
    );
  };

  return (
    <Layout isLoaded={isLoaded}>
      <h1>Cart</h1>
      <section className="section--cart">
        {cart.length > 0 ? (
          <div>
            <ul className="cart-list">
              {cart.map((item) => (
                <li className="cart-item" key={item.game.id}>
                  <div className="cart-item__image">
                    <Link to={`${ROUTE.GAME}/${item.game.id}`}>
                      <img
                        src={`${imgPath}/img/games/main/${item.game.photo}`}
                        alt={item.game.title}
                      />
                    </Link>
                  </div>
                  <div className="cart-item__name">
                    <Link className="link" to={`${ROUTE.GAME}/${item.game.id}`}>
                      {item.game.title}
                    </Link>
                  </div>
                  <div className="cart-item__price">
                    <span>{item.game.price * item.quantity} €</span>
                  </div>
                  <div className="cart-item__amount">
                    <button
                      onClick={() => handleDecrement(item.game)}
                      type="button"
                      className="btn btn-dec shadow-none"
                    >
                      <div className="icon"></div>
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.game)}
                      type="button"
                      className="btn btn-inc shadow-none"
                    >
                      <div className="icon"></div>
                    </button>
                  </div>
                  <div
                    className="cart-item__delete"
                    onClick={() => handleRemove(item.game)}
                  >
                    <div className="icon"></div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="order">
              <div className="order-wrapper">
                <p className="text">Total: </p>
                <b>{totalPrice} €</b>
              </div>
              <button onClick={buy} type="button" className="btn btn--green">
                Proceed to checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="oops-block">
            <h2>Cart is empty!</h2>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
