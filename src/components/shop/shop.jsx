import { useOutletContext } from 'react-router';
import useFetchGetData from '../../custom-hooks/use-fetch-get.jsx';
import ItemCard from '../item-card/item-card.jsx';
export default function Shop() {
  const { apiURL, setCartItems } = useOutletContext();
  const { data } = useFetchGetData(`${apiURL}/products/`);
  return <div>
    {data && data.map((item) => {
      return <ItemCard key={item.id} apiURL={apiURL} itemId={item.id} setCartItems={setCartItems} />
    })}
  </div>;
}
