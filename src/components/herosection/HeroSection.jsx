import styles from "./HeroSection.module.css";
import Headimg from "../../assets/headphones-audio-listen.jpeg"

function HeroSection() {
  return (
    <div className={styles.heroSection} id="hero">
      <div className={styles.heroLeftSection}>
        <div className={styles.newArrivals}>
          <p>✨ Curated Collection</p>
        </div>

        <div className={styles.heroHeading}>
          <h1 className={styles.firstH1}>Elevated Essentials</h1>
          <h1 className={styles.secondH1}>for Every Lifestyle</h1>
        </div>

        <div className={styles.heroSubheading}>
          <p className={styles.heroP}>
            Discover a thoughtfully curated selection of premium
            <br />
            menswear, women's apparel, and signature accessories 
            <br />
            designed for the modern individual.
          </p>
        </div>

        <div className={styles.shopNowBtn}>
          <button>Shop Now</button>
        </div>
      </div>

      <div className={styles.heroRightSection}>
        <img
          src={Headimg}
          alt={ "Hero product"}
        />
      </div>
    </div>
  );
}

export default HeroSection;
