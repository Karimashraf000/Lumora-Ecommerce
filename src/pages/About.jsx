import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>Our Story</span>
          <h1>Redefining Modern <br /><span>E-commerce</span></h1>
          <p>
            Lumora is more than just a store. We are a collection of curators, designers,
            and dreamers dedicated to bringing you the finest products from around the world.
          </p>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionGrid}>
          <div className={styles.missionText}>
            <h2>Our Mission</h2>
            <p>
              To democratize luxury by providing high-quality, sustainable, and
              beautifully designed products that enhance your daily life.
              We believe that everyone deserves to surround themselves with excellence.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>10k+</h3>
                <p>Happy Customers</p>
              </div>
              <div className={styles.statItem}>
                <h3>500+</h3>
                <p>Curated Brands</p>
              </div>
              <div className={styles.statItem}>
                <h3>24/7</h3>
                <p>White-glove Support</p>
              </div>
            </div>
          </div>
          <div className={styles.missionImage}>
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <h2>Why Lumora?</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>✨</div>
            <h3>Quality First</h3>
            <p>Every item in our collection undergoes rigorous quality checks to ensure it meets our standards.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌿</div>
            <h3>Sustainability</h3>
            <p>We partner with brands that prioritize ethical production and environmentally friendly materials.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤝</div>
            <h3>Community</h3>
            <p>A portion of every sale goes back to supporting local artisans and small creators.</p>
          </div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <h2>Experience the Future of Shopping</h2>
        <p>Join thousands of others who have found their perfect style with Lumora.</p>
        <button className={styles.ctaBtn}>Join the Journey</button>
      </section>
    </div>
  );
}