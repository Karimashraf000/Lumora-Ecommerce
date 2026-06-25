import styles from "./FeaturesSection.module.css";
import { FiTruck, FiShield, FiRotateCcw, FiHeadphones } from "react-icons/fi";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FiTruck />,
      title: "Global Shipping",
      description: "Fast and secure delivery to over 100 countries worldwide."
    },
    {
      icon: <FiShield />,
      title: "Secure Payments",
      description: "Multiple payment methods protected by 256-bit encryption."
    },
    {
      icon: <FiRotateCcw />,
      title: "Easy Returns",
      description: "30-day hassle-free return policy for all our products."
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Support",
      description: "Our dedicated support team is always ready to help you."
    }
  ];

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
