import styles from "@/styles/Hero.module.css";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
