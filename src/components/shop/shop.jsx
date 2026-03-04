import { useOutletContext } from 'react-router';
import useFetchGetData from '../../custom-hooks/use-fetch-get.jsx';
import ItemCard from '../item-card/item-card.jsx';
export default function Shop() {
  const { setCartItems } = useOutletContext();
  const { data } = useFetchGetData("https://fakestoreapi.com/products/");
  return <div>
    {data && data.map((item) => {
      return <ItemCard key={item.id} itemId={item.id} />
    })}

  </div>;
}
