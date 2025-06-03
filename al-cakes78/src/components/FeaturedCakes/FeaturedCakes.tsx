import styles from "./FeaturedCakes.module.css";
import { CAKES } from "@/data/cakes";
import FeaturedCakesCarousel from "./FeaturedCakesCarousel";

const FeaturedCakes = () => {
  const featuredCakes = CAKES.filter((cake) => cake.isFeatured);

  return (
    <section className={styles["featured-cakes-section"]}>
      <FeaturedCakesCarousel cakes={featuredCakes} />
    </section>
  );
};
export default FeaturedCakes;
