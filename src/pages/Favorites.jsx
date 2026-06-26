import { useContext } from "react";
import styles from "./Favorites.module.css";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/trendingSection/ProductCard";

export default function Favorites({ favorites }) {
  const { favoriteProducts } = useContext(ProductsContext);

  return (
    <div className={styles.favoritesContainer}>
      {favoriteProducts.map((favProduct) => {
        return (
          <ProductCard
            id={favProduct.id}
            description={favProduct.description}
            imgUrl={favProduct.thumbnail}
            key={favProduct.id}
            price={favProduct.price}
            rating={favProduct.rating}
            title={favProduct.title}
          />
        );
      })}
    </div>
  );
}
