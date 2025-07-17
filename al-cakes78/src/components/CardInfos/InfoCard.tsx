import Image from "next/image";
import styles from "./InfoCard.module.css";

type Props = {
  title: string;
  text: string;
  imageSrc: string;
  alt: string;
};

const InfoCard = ({ title, text, imageSrc, alt }: Props) => {
  return (
    <article data-aos="fade-up" className={styles["card"]}>
      <div className={styles["image-wrapper"]}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className={styles["image-card-info"]}
        />
      </div>

      <div className={styles["card-content"]}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
};
export default InfoCard;
