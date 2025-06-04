"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./CakeCardXs.module.css";

type Props = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

const CakeCardXs = ({ name, slug, image }: Props) => {
  return (
    <div className={styles["cake-card-xs-wrapper"]}>
      <Link
        href={`/cakes/${slug}`}
        className={`${styles["cake-card-xs-link"]} bordered`}>
        <div className={`${styles["cake-card-xs"]} bordered`}>
          <div className={styles["cake-card-xs-image-wrapper"]}>
            <Image
              className={styles["cake-card-xs-image"]}
              src={image}
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
