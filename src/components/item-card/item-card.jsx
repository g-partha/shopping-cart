import { useEffect, useState } from "react";
import css from "./item-card.module.css";

const ItemCard = ({ itemId }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://fakestoreapi.com/products/${itemId}`, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => setData(result))
      .catch((errorCaught) => {
        if (errorCaught.name !== "AbortError") {
          setError(errorCaught.message);
        }
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [itemId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (data !== null) {
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
