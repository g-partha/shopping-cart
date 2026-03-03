import { Outlet } from "react-router";
import NavBar from "../nav-bar/nav-bar.jsx";

export default function App() {
  return (
    <>
      <div>Start here</div>
      <NavBar />
      <Outlet />
    </>
  );
}
