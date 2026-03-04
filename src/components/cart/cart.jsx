import { useOutletContext } from 'react-router';
import ItemCard from '../item-card/item-card.jsx';
export default function Cart() {
  const { setCartItems } = useOutletContext();
  return <div>Cart</div>;
}
