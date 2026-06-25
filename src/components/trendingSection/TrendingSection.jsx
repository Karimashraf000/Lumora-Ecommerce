import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import ProductCard from "./ProductCard";
import { CircleLoader } from "react-spinners";
import styles from "./TrendingSection.module.css";

export default function TrendingSection() {
  const { products, loading } = useContext(ProductsContext);

  // Assuming products with a high rating are "trending"
  const trendingProducts = products
    .filter((product) => product.rating >= 4.8)
    .slice(0, 4);

  return (
    <div className={styles.trendingContainer}>
      <h2 className={styles.title}>Trending Now</h2>
      {loading ? (
        <div className={styles.loaderContainer}>
          <CircleLoader color="#36d7b7" />
        </div>
      ) : (
        <div className={styles.resultsGrid}>
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              imgUrl={product.thumbnail}
            />
          ))}
        </div>
      )}
    </div>
  );
}
