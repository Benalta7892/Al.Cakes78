import Image from "next/image";
import styles from "./InfoCard.module.css";

type Props = {
  title: string;
  text: string;
  imageSrc: string;
  alt: string;
};

const InfoCardReverse = ({ title, text, imageSrc, alt }: Props) => {
  return (
    <article className={`${styles["card"]} ${styles["card-reverse"]}`}>
      <div className={styles["image-wrapper"]}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className={styles["image-card-info"]}
        />
      </div>

      <div
        className={`${styles["card-content"]} ${styles["card-content-reverse"]}`}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
};
export default InfoCardReverse;
