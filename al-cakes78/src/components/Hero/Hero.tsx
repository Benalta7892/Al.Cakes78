import styles from "./Hero.module.css";
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
    <section className={`${styles["hero"]} hero`}>
      <HeroCarousel slides={SLIDES} options={OPTIONS} />
      <div className={styles["hero-content"]}>
        <h1 className={styles["hero-title"]}>Entremets pour vos Évènements</h1>
        <div className={styles["hero-buttons"]}>
          <Link href="/gateaux" className="btn btn-primary">
            Découvrir
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Besoin d&apos;un renseignement ?
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
