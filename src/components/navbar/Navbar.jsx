import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export default function Navbar() {
  const { favoriteProducts, cartItems } = useContext(ProductsContext);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>Lumora</h1>
          </Link>
        </div>
        <nav className={styles.navLinks}>
          <Link to="/" className={styles.homeLink}>
            Home
          </Link>
          <Link to="/search" className={styles.contactLink}>
            Shop
          </Link>
          <Link to="/about" className={styles.aboutLink}>
            About
          </Link>
        </nav>
        <div className={styles.navIcons}>
          <Link to="/favorites" className={styles.favorites}>
            <MdFavoriteBorder />
            <span className={styles.count}>{favoriteProducts.length}</span>
          </Link>
          <Link to="/cart" className={styles.cart}>
            <CiShoppingCart />
            <span className={styles.count}>{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
