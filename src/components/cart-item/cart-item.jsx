import useFetchGetData from '../../custom-hooks/use-fetch-get.jsx';
import { useState } from 'react';
import downArrow from '../../assets/arrow-down-circle.svg';
import upArrow from '../../assets/arrow-up-circle.svg';

const CartItem = ({ itemId, initialQuantity, setCartItems }) => {
  const { data, error, loading } = useFetchGetData(`https://fakestoreapi.com/products/${itemId}`);
  const [quantity, setQuantity] = useState(initialQuantity);
  const updateCart = () => {
    const numberQuantity = +quantity;
    if (numberQuantity > 0) {
      setCartItems((cartItems) => ({ ...cartItems, [itemId]: (cartItems[itemId] ? cartItems[itemId] + numberQuantity : numberQuantity) }));
    }
  }
  const handleChange = (value) => {
    typeof Number(value) === 'number' && quantity >= 0 && setQuantity(value);
    updateCart();
  }
  const handleIcrement = () => {
    setQuantity((quantity) => +quantity + 1);
    updateCart();
  }
  const handleDecrement = () => {
    quantity > 0 && setQuantity((quantity) => +quantity - 1);
    updateCart();
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
        </form>
      </div>
    );
  }
};

export default CartItem;
