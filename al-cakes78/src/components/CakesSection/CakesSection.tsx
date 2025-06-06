"use client";

import { CAKES } from "@/data/cakes";
import CakeCardXs from "@/components/CakeCardXs/CakeCardXs";
import styles from "./CakesSection.module.css";

const CakesSection = () => {
  return (
    <section className={styles["cakes-section"]}>
      <div className={styles["cakes-section-grid"]}>
        {CAKES.map(({ id, name, slug, image }) => (
          <article key={id}>
            <CakeCardXs id={id} name={name} slug={slug} image={image} />
          </article>
        ))}
      </div>
    </section>
  );
};
export default CakesSection;
