"use client";
import Image from "next/image";
import InfoCard from "./InfoCard";
import InfoCardReverse from "./InfoCardReverse";
import styles from "./CardInfos.module.css";
import { useState, useEffect } from "react";

const CardInfos = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 590);
    };

    checkWidth(); // Initial check
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <section className={styles["cards-section"]}>
      <InfoCard
        title="Le goût de la qualité"
        text="Des saveurs vraies, choisies avec soin, parce que chaque bouchée parle d’elle-même."
        imageSrc="/images/cardinfo1.jpg"
        alt="Image pour illustrer le gout de la qualité"
      />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
      />

      {isMobile ? (
        <InfoCard
          title="Le goût de la beauté"
          text="Un dessert se déguste d’abord avec les yeux. Ici, chaque création raconte une histoire délicieuse."
          imageSrc="/images/cardinfo2.jpg"
          alt="Image pour illustrer la beauté des gâteaux"
        />
      ) : (
        <InfoCardReverse
          title="Le goût de la beauté"
          text="Un dessert se déguste d’abord avec les yeux. Ici, chaque création raconte une histoire délicieuse."
          imageSrc="/images/cardinfo2.jpg"
          alt="Image pour illustrer la beauté des gâteaux"
        />
      )}
    </section>
  );
};
export default CardInfos;
