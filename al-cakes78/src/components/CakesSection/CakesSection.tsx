"use client";

import { CAKES } from "@/data/cakes";
import CakeCard from "@/components/CakeCard/CakeCard";
import styles from "./CakesSection.module.css";

const CakesSection = () => {
  return (
    <section className={`${styles["cakes-section"]} cakes-section`}>
      <div className={styles["cakes-section-grid"]}>
        {CAKES.map(({ id, name, slug, images, description, price }) => (
          <article data-aos="fade-up" key={id}>
            <CakeCard
              id={id}
              name={name}
              slug={slug}
              images={images}
              description={description}
              price={price}
            />
          </article>
        ))}
      </div>
    </section>
  );
};
export default CakesSection;
