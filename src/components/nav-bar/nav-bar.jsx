import css from "./nav-bar.module.css";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className={css.container}>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
        </li>
      </ul>
    </nav>
  );
}
