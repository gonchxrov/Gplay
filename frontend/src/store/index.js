import { configureStore } from "@reduxjs/toolkit";
import userReducer, {
  setIsAuth,
  setUser,
  unSetUser,
  selectIsAuth,
} from "./User";

export { setIsAuth, setUser, unSetUser, selectIsAuth };

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
