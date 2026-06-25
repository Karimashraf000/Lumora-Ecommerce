import HeroSection from "../components/herosection/HeroSection";
import TrendingSection from "../components/trendingSection/TrendingSection";
import FeaturesSection from "../components/featuresSection/FeaturesSection";
import NewsletterSection from "../components/newsletterSection/NewsletterSection";

export default function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <FeaturesSection />
      <TrendingSection />
      <NewsletterSection />
    </div>
  );
}
