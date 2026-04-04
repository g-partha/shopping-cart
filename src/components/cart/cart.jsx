import { useOutletContext } from "react-router";
import CartItem from "../cart-item/cart-item.jsx";
export default function Cart() {
  const { cartItems, setCartItems } = useOutletContext();
  console.log(cartItems);
  return (
    <div>
      {cartItems.forEach((id, quantity) => {
        return (
          <CartItem
            itemId={id}
            initialQuantity={quantity}
            setCartItems={setCartItems}
          />
        );
      })}
    </div>
  );
}
