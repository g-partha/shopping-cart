import { useOutletContext } from "react-router";
import CartItem from "../cart-item/cart-item.jsx";
export default function Cart() {
  const { apiURL, cartItems, setCartItems } = useOutletContext();
  console.log(cartItems);
  return (
    <div>
      {Object.keys(cartItems).map((id) => {
        return (
          <CartItem
            key={id}
            itemId={id}
            apiURL={apiURL}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        );
      })}
    </div>
  );
}
