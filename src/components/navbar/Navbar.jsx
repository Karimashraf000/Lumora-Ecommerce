import { Link } from "react-router-dom";

import { IoSearchSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import styles from "./Navbar.module.css";

export default function Navbar() {
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
            <span className={styles.count}>0</span>
          </Link>
          <Link to="/checkout" className={styles.cart}>
            <CiShoppingCart />
            <span className={styles.count}>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
