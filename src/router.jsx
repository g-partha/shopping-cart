import { createBrowserRouter } from "react-router";
import App from "./components/app/app.jsx";
import ErrorPage from "./components/error-page/error-page.jsx";
import Home from "./components/home/home.jsx";
import Shop from "./components/shop/shop.jsx";
import Cart from "./components/cart/cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default router;
