import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  selectCart,
  selectIsAuth,
} from "../../store";

export function ButtonBuy({ game }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const IsAuth = useSelector(selectIsAuth);
  const initialState = "Buy";
  const changedState = "In cart";
  const [buttonText, setButtonText] = useState(initialState);

  useEffect(() => {
    if (!IsAuth) {
      setButtonText(initialState);
    }
  }, [IsAuth]);

  useEffect(() => {
    if (Boolean(cart.find((item) => item.game.id === game.id)) && IsAuth) {
      setButtonText(changedState);
    }
  }, [game.id, IsAuth]);

  const handleClick = () => {
    console.log(IsAuth);

    if (IsAuth) {
      if (Boolean(cart.find((item) => item.game.id === game.id))) {
        setButtonText(initialState);

        dispatch(
          removeFromCart({
            game,
          })
        );
      } else {
        setButtonText(changedState);

        dispatch(
          addToCart({
            game,
          })
        );
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <button type="button" className="btn btn--green" onClick={handleClick}>
      {buttonText}
    </button>
  );
}
