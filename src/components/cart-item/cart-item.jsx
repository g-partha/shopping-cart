import useFetchGetData from "../../custom-hooks/use-fetch-get.jsx";
import downArrow from "../../assets/arrow-down-circle.svg";
import upArrow from "../../assets/arrow-up-circle.svg";
import cartRemove from "../../assets/cart-remove.svg";
import css from "./cart-item.module.css";
const CartItem = ({ apiURL, itemId, cartItems, setCartItems }) => {
  const { data, error, loading } = useFetchGetData(
    `${apiURL}/products/${itemId}`,
  );
  const handleIcrement = () => {
    setCartItems((cartItems) => ({
      ...cartItems,
      [itemId]: cartItems[itemId] + 1,
    }));
  };
  const handleDecrement = () => {
    cartItems[itemId] === 1 && removeItems();
    cartItems[itemId] > 1 &&
      setCartItems((cartItems) => ({
        ...cartItems,
        [itemId]: cartItems[itemId] - 1,
      }));
  };

  const removeItems = () => {
    const { [itemId]: removedIitem, ...remainingItems } = cartItems;
    setCartItems(remainingItems);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (data) {
    return (
      <div className={css.container}>
        <div className={css.image}>
          <img src={data.image}></img>
        </div>
        <div className={css.title}>{data.title}</div>
        <div className={css.quantityContaner}>
          <div className={css.quantity}>{cartItems[itemId]}</div>
          <img
            className={css.quantityModifierIcons}
            src={upArrow}
            onClick={handleIcrement}
          />
          <img
            className={css.quantityModifierIcons}
            src={downArrow}
            onClick={handleDecrement}
          />
          <img
            className={css.quantityModifierIcons}
            src={cartRemove}
            onClick={removeItems}
          />
        </div>
      </div>
    );
  }
};

export default CartItem;
