import { useOutletContext } from 'react-router';
import ItemCard from '../item-card/item-card.jsx';
export default function Cart() {
  const { cartItems } = useOutletContext();
  console.log(cartItems);
  return <div>Cart</div>;
}
