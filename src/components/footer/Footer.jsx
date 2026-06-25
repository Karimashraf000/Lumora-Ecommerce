import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoTwitter, IoGlobeOutline } from "react-icons/io5";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link to="/" className={styles.logo}>
              <h2>Lumora</h2>
            </Link>
            <p className={styles.brandText}>
              Defining the future of luxury e-commerce through curated technology and minimalist design.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <IoLogoInstagram />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <IoLogoTwitter />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Website">
                <IoGlobeOutline />
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h3 className={styles.linkTitle}>Shop</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h3 className={styles.linkTitle}>Support</h3>
            <ul>
              <li><Link to="#">Shipping Info</Link></li>
              <li><Link to="#">Returns</Link></li>
              <li><Link to="#">Help Center</Link></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h3 className={styles.linkTitle}>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="#">Terms of Service</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <p>&copy; {new Date().getFullYear()} Lumora E-commerce. Designed for luxury.</p>
            <div className={styles.bottomLinks}>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
