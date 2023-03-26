import { configureStore } from "@reduxjs/toolkit";
import userReducer, {
  setIsAuth,
  setUser,
  setPhoto,
  unSetUser,
  unSetPhoto,
  selectUser,
  selectIsAuth,
  selectIsAdmin,
} from "./User";

import cartReducer, {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setCart,
  unSetCart,
  selectCart,
} from "./Cart";

export {
  setIsAuth,
  setUser,
  setPhoto,
  setCart,
  unSetCart,
  unSetUser,
  unSetPhoto,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  selectUser,
  selectIsAuth,
  selectIsAdmin,
  selectCart,
};

const saveToLocalStorage = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const store = configureStore({
  reducer: {
    user: userReducer,
    cartReducer,
  },
});

store.subscribe(() => {
  const storeState = store.getState();
  const cartState = storeState.cartReducer.cart;
  saveToLocalStorage("cart", cartState);
});

export default store;
