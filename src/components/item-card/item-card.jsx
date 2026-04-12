import css from "./item-card.module.css";
import useFetchGetData from '../../custom-hooks/use-fetch-get.jsx';
import { useState } from 'react';
import downArrow from '../../assets/arrow-down-circle.svg';
import upArrow from '../../assets/arrow-up-circle.svg';

const ItemCard = ({ apiURL, itemId, setCartItems }) => {
  const { data, error, loading } = useFetchGetData(`${apiURL}/products/${itemId}`);
  const [quantity, setQuantity] = useState(0);
  const [buttonText, setButtonText] = useState('Add to cart.');
  const handleSubmit = (e) => {
    e.preventDefault();
    const numberQuantity = +quantity;
    if (numberQuantity > 0) {
      setCartItems((cartItems) => ({ ...cartItems, [itemId]: (cartItems[itemId] ? cartItems[itemId] + numberQuantity : numberQuantity) }));
      setButtonText('Added to cart');
    }
  }
  const handleChange = (value) => {
    typeof Number(value) === 'number' && quantity >= 0 && setQuantity(value);
    setButtonText('Add to cart');
  }
  const handleIcrement = () => {
    setQuantity((quantity) => +quantity + 1);
    setButtonText('Add to cart');
  }
  const handleDecrement = () => {
    quantity > 0 && setQuantity((quantity) => +quantity - 1);
    setButtonText('Add to cart');
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (data) {
    return (
      <div className={css.itemCard}>
        <div className={css.imageContainer}>
          <img className={css.image} src={data.image}></img>
        </div>
        <div className={css.title}>{data.title}</div>
        <form className={css.quantityForm} onSubmit={handleSubmit}>
          <input value={quantity} type='number' onChange={(e) => handleChange(e.target.value)} />
          <img src={upArrow} onClick={handleIcrement} />
          <img src={downArrow} onClick={handleDecrement} />
          <button type="submit">{buttonText}</button>

        </form>
      </div>
    );
  }
};

export default ItemCard;
