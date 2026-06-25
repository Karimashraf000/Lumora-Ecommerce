import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.content}>
        <h2>Join the Lumora Club</h2>
        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" className={styles.input} />
          <button type="submit" className={styles.button}>Subscribe</button>
        </form>
      </div>
    </div>
  );
}
