import styles from "@/styles/Hero.module.css";
import HeroCarousel from "./HeroCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 3;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const SLIDES = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <HeroCarousel slides={SLIDES} options={OPTIONS} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Entremets pour vos Évènements</h1>
        <div className={styles.heroButtons}>
          <Link href="/gateaux" className={styles.primaryBtn}>
            Découvrir
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Besoin d&apos;un renseignement ?
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
