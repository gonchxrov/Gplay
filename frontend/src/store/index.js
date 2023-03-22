import { configureStore } from "@reduxjs/toolkit";
import userReducer, {
  setIsAuth,
  setUser,
  setPhoto,
  unSetUser,
  unSetPhoto,
  selectIsAuth,
} from "./User";

export { setIsAuth, setUser, setPhoto, unSetUser, unSetPhoto, selectIsAuth };

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
