"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./CakeCard.module.css";

type Props = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  price: number;
};

const CakeCard = ({ name, slug, image, description, price }: Props) => {
  const firstSentence = description.split(".")[0] + ".";

  return (
    <div className={styles["cake-card-wrapper"]}>
      <Link
        href={`/gateaux/${slug}`}
        className={`${styles["cake-card-link"]} bordered`}>
        <div className={`${styles["cake-card"]} bordered`}>
          <h3 className={styles["cake-card-title"]}>{name}</h3>
          <div className={styles["cake-card-image-wrapper"]}>
            <Image
              className={styles["cake-card-image"]}
              src={image}
              alt={name}
              height={280}
              width={280}
              style={{ filter: "drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.5))" }}
            />
          </div>
          <div className={styles["cake-card-content"]}>
            <p className={styles["cake-card-description"]}>{firstSentence}</p>
            <p className={styles["cake-card-price"]}>
              À partir de {price.toFixed(2)} €
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CakeCard;
