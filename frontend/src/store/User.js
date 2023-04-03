import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    role: "",
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    setPhoto: (state, action) => {
      state.photo = action.payload.photo;
    },
    unSetPhoto: (state) => {
      state.photo = "";
    },
    unSetUser: (state) => {
      state.id = 0;
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.role = "";
    },
  },
});

export const { setIsAuth, setUser, setPhoto, unSetUser, unSetPhoto } =
  userSlice.actions;

export const selectUser = (state) => {
  return {
    id: state.user.id,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    photo: state.user.photo,
    role: state.user.role,
  };
};
export const selectIsAuth = (state) => state.user.isAuth;
export const selectIsAdmin = (state) => state.user.role === "admin";

export default userSlice.reducer;
