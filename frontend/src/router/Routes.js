import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Catalog from "../pages/Catalog/Catalog";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import Game from "../pages/Game/Game";
import Category from "../pages/Category/Category";
import Cart from "../pages/Cart/Cart";
import Purchases from "../pages/Purchases/Purchases";
import Search from "../pages/Search/Search";

export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGN_IN: "/sign-in",
  PROFILE: "/profile",
  CATALOG: "/catalog",
  GAME: "/game",
  CATEGORY: "/category",
  GENRE: "/genre",
  CART: "/cart",
  PURCHASES: "/purchases",
  SEARCH: "/search",
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
    path: `${ROUTE.SEARCH}/:keyword`,
    element: <Search />,
  },
  {
    path: `${ROUTE.GAME}/:id`,
    element: <Game />,
  },
  {
    path: `${ROUTE.CATEGORY}`,
    element: <Category />,
  },
  {
    path: `${ROUTE.CATEGORY}/:id`,
    element: <Catalog />,
  },
];

export const authRoutes = [
  {
    path: ROUTE.PROFILE,
    element: <Profile />,
  },
  {
    path: ROUTE.CART,
    element: <Cart />,
  },
  {
    path: ROUTE.PURCHASES,
    element: <Purchases />,
  },
];
