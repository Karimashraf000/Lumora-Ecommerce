import { Link } from "react-router-dom";
import styles from "./RouteNotFound.module.css";

export default function RouteNotFound() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>404</h1>
        <div className={styles.divider}></div>
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorText}>
          It seems you've wandered into uncharted territory. 
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={styles.homeBtn}>
          Return to Sanctuary
        </Link>
      </div>
      <div className={styles.backgroundText}>LUMORA</div>
    </div>
  );
}
