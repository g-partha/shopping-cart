import css from "./nav-bar.module.css";
import { Link } from "react-router";

export default function NavBar({ cartItems }) {
  const count = Object.keys(cartItems).length;
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
          <Link to="/cart">CART </Link>
          {count > 0 && <span className={css.cartIndicator}>{count}</span>}
        </li>
      </ul>
    </nav>
  );
}
