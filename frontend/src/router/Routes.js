import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Catalog from "../pages/Catalog/Catalog";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import Game from "../pages/Game/Game";

export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGN_IN: "/sign-in",
  PROFILE: "/profile",
  CATALOG: "/catalog",
  GAME: "/game",
};

export const publicRoutes = [
  {
    path: ROUTE.HOME,
    element: <Home />,
  },
  {
    path: ROUTE.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: ROUTE.CATALOG,
    element: <Catalog />,
  },
  {
    path: `${ROUTE.GAME}/:id`,
    element: <Game />,
  },
];

export const authRoutes = [
  {
    path: ROUTE.PROFILE,
    element: <Profile />,
  },
];
