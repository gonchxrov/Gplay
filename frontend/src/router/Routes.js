import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Catalog from "../pages/Catalog/Catalog";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import Game from "../pages/Game/Game";
import Cart from "../pages/Cart/Cart";

export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGN_IN: "/sign-in",
  PROFILE: "/profile",
  CATALOG: "/catalog",
  GAME: "/game",
  CART: "/cart",
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
  {
    path: ROUTE.CART,
    element: <Cart />,
  },
];

export const authRoutes = [
  {
    path: ROUTE.PROFILE,
    element: <Profile />,
  },
];
