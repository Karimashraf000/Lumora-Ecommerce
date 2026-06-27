import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import {
  IoArrowBack,
  IoCartOutline,
  IoHeartOutline,
  IoHeartSharp,
} from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    products,
    loading,
    favoriteProducts,
    setFavoriteProducts,
    cartItems,
    setCartItems,
  } = useContext(ProductsContext);

  const handleFavorites = (product) => {
    setFavoriteProducts((prev) => {
      const exist = prev.some((item) => item.id === product.id);
      if (exist) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, product];
    });
  };

  const product = products.find((item) => String(item.id) === String(id));
  if (loading) {
    return <div className={styles.loading}>Loading product details...</div>;
  }
  const isFavorite = favoriteProducts.some((item) => item.id === product.id);
  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate("/search")}>Back to Shop</button>
      </div>
    );
  }
  const isInCart = cartItems.some((item) => item.id === product.id);
  const handleCartItems = (product) => {
    return setCartItems((prev) => {
      const existInCart = prev.some((item) => item.id === product.id);
      if (existInCart) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };
  return (
    <div className={styles.detailsPage}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>
      <div className={styles.detailsGrid}>
        <div className={styles.imageSection}>
          <div className={styles.mainImageWrapper}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.mainImage}
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className={styles.imageGallery}>
              {product.images.slice(0, 4).map((img, id) => (
                <img key={id} src={img} alt={`${product.title} ${id}`} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.infoSection}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.title}</h1>
          <div className={styles.ratingSection}>
            <span className={styles.stars}>⭐ {product.rating.toFixed(1)}</span>
            <span className={styles.stock}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
          </div>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.actionButtons}>
            <button
              className={styles.addToCart}
              onClick={() => {
                handleCartItems(product);
              }}
            >
              {isInCart ? (
                <>
                  <BsCartCheckFill /> Added to Cart
                </>
              ) : (
                <>
                  <IoCartOutline /> Add to Cart
                </>
              )}
            </button>
            <button
              className={styles.favoriteBtn}
              onClick={() => {
                handleFavorites(product);
              }}
            >
              {isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
            </button>
          </div>
          <div className={styles.productSpecs}>
            <div className={styles.specItem}>
              <strong>Brand:</strong> {product.brand || "Lumora Original"}
            </div>
            <div className={styles.specItem}>
              <strong>Shipping:</strong> Free worldwide shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
