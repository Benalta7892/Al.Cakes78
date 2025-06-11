"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./CakeCardXs.module.css";

type Props = {
  id: number;
  name: string;
  slug: string;
  images: string[];
};

const CakeCardXs = ({ name, slug, images }: Props) => {
  return (
    <div className={styles["cake-card-xs-wrapper"]}>
      <Link
        href={`/gateaux/${slug}`}
        className={`${styles["cake-card-xs-link"]} bordered`}>
        <div className={`${styles["cake-card-xs"]} bordered`}>
          <div className={styles["cake-card-xs-image-wrapper"]}>
            <Image
              className={styles["cake-card-xs-image"]}
              src={images[0]}
              alt={name}
              height={280}
              width={280}
              style={{ filter: "drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.5))" }}
            />
          </div>
          <h3 className={styles["cake-card-xs-title"]}>{name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CakeCardXs;
