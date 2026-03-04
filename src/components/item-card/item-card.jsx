import css from "./item-card.module.css";
import useFetchGetData from '../../custom-hooks/use-fetch-get.jsx';

const ItemCard = ({ itemId }) => {
  const { data, error, loading } = useFetchGetData(`https://fakestoreapi.com/products/${itemId}`);

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
        <div>{data.title}</div>
      </div>
    );
  }
};

export default ItemCard;
