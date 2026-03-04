import { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../nav-bar/nav-bar.jsx";
export default function App() {
  const [cartItems, setCartItems] = useState({});
  return (
    <>
      <NavBar />
      <Outlet context={{ cartItems, setCartItems }} />
    </>
  );
}
