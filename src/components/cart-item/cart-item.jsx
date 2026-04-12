import useFetchGetData from '../../custom-hooks/use-fetch-get.jsx';
import { useState } from 'react';
import downArrow from '../../assets/arrow-down-circle.svg';
import upArrow from '../../assets/arrow-up-circle.svg';
import cartRemove from '../../assets/cart-remove.svg';

const CartItem = ({ apiURL, itemId, cartItems, setCartItems }) => {
  const { data, error, loading } = useFetchGetData(`${apiURL}/products/${itemId}`);
  const handleIcrement = () => {
    setCartItems((cartItems) => ({ ...cartItems, [itemId]: cartItems[itemId] + 1 }));
  }
  const handleDecrement = () => {
    cartItems[itemId] === 1 && removeItems();
    cartItems[itemId] > 1 && setCartItems((cartItems) => ({ ...cartItems, [itemId]: cartItems[itemId] - 1 }));
  }
  
  const removeItems = () => {
    const {[itemId]: removedIitem, ...remainingItems} = cartItems;
    setCartItems(remainingItems);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (data) {
    return (
      <div>
        <div>
          <img src={data.image}></img>
        </div>
        <div>{data.title}</div>
        <div>
          <div>{cartItems[itemId]}</div>
          <img src={upArrow} onClick={handleIcrement} />
          <img src={downArrow} onClick={handleDecrement} />
          <img src={cartRemove} onClick={removeItems} />
        </div>
      </div>
    );
  }
};

export default CartItem;
