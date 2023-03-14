import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    unSetUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.role = "";
    },
  },
});

export const { setIsAuth, setUser, unSetUser } = userSlice.actions;

export const selectUser = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    role: state.user.role,
  };
};
export const selectIsAuth = (state) => state.user.isAuth;
export const selectIsAdmin = (state) => state.user.role === "admin";

export default userSlice.reducer;
