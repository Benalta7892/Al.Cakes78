import styles from "./FeaturedCakes.module.css";
import { CAKES } from "@/data/cakes";
import FeaturedCakesCarousel from "./FeaturedCakesCarousel";
import { EmblaOptionsType } from "embla-carousel";
// import Link from "next/link";

const FeaturedCakes = () => {
  const featuredCakes = CAKES.filter((cake) => cake.isFeatured);
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <section className={styles["featured-cakes-section"]}>
      <FeaturedCakesCarousel cakes={featuredCakes} options={OPTIONS} />
    </section>
  );
};
export default FeaturedCakes;
