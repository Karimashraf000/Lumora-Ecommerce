import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  id,
  title,
  price,
  rating,
  imgUrl,
  description,
}) {

  return (
    <Link to={`/products/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={imgUrl} alt={title} className={styles.image} />
        <div className={styles.cardBody}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.footer}>
            <p className={styles.price}>${price.toFixed(2)}</p>
            <p className={styles.rating}>⭐ {rating.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
