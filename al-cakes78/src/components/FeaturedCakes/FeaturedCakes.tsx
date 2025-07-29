import styles from "./FeaturedCakes.module.css";
import { CAKES } from "@/data/cakes";
import FeaturedCakesCarousel from "./FeaturedCakesCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const FeaturedCakes = () => {
  const featuredCakes = CAKES.filter((cake) => cake.isFeatured);
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <section
      data-aos="fade-up"
      // data-aos-anchor-placement="bottom-bottom"
      className={styles["featured-cakes-section"]}>
      <h2>L&apos;envie commence ici</h2>

      <div className={styles["carousel-wrapper"]}>
        <FeaturedCakesCarousel cakes={featuredCakes} options={OPTIONS} />
      </div>

      <Link href={"/gateaux"} className="btn btn-primary">
        Découvrir tous nos gâteaux
      </Link>
    </section>
  );
};
export default FeaturedCakes;
