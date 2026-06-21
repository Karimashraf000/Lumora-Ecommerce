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
        <div className={styles.searchField}>
          <form>
            <input type="text" placeholder="search-products" className={styles.inputField} />
            <button className={styles.searchBtn}>
              <IoSearchSharp />
            </button>
          </form>
        </div>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.homeLink}>
            Home
          </Link>
          <Link to="/about" className={styles.aboutLink}>
            about
          </Link>
          <Link to="/contact" className={styles.contactLink}>
            contact
          </Link>
        </div>
        <div className={styles.navIcons}>
          <div className={styles.favorites}>
            <MdFavoriteBorder />
            <span className={styles.count}>0</span>
          </div>
          <div className={styles.cart}>
            <CiShoppingCart />
            <span className={styles.count}>0</span>
          </div>
        </div>
      </div>
    </header>
  );
}
