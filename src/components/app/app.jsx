import { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../nav-bar/nav-bar.jsx";
export default function App() {
  const apiURL = "https://fakestoreapi.com";
  const [cartItems, setCartItems] = useState({});
  return (
    <>
      <NavBar cartItems={cartItems} />
      <Outlet context={{ apiURL, cartItems, setCartItems }} />
    </>
  );
}
