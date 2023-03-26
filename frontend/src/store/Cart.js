import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload.cart;
    },
    unSetCart: (state, action) => {
      state.cart = [];
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.game.id === action.payload.game.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.game.id === action.payload.game.id
      );
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.game.id === action.payload.game.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.game.id !== action.payload.game.id
      );

      state.cart = removeItem;
    },
  },
});

export const {
  setCart,
  unSetCart,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

export const selectCart = (state) => state.cartReducer.cart;

export default cartSlice.reducer;
