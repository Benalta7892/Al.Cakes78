import styles from "./AboutSection.module.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-header"]}>
        <h2>À propos de moi</h2>
        <div className={`${styles["about-image-container"]} bordered`}>
          <div className={`${styles["about-image"]} bordered`}>
            <Image
              src="/images/img-about.png"
              width={579}
              height={873}
              alt="Photo de la chef"
              className={styles["chef-about-image"]}
            />
          </div>
        </div>
      </div>

      <div className={styles["about-content"]}>
        <div className={`${styles["about-image-container2"]} bordered`}>
          <div className={`${styles["about-image"]} bordered`}>
            <Image
              src="/images/img-about2.png"
              width={498}
              height={624}
              alt="Photo de la chef"
              className={styles["cake-about-image"]}
            />
          </div>
        </div>

        <div className={styles["about-text-content"]}>
          <h3>Bienvenue !</h3>
          <p className={styles["about-text"]}>
            Derrière chaque gâteau se cache une passion pour la pâtisserie, le
            goût du détail et l’envie de faire plaisir.
          </p>
          <p className={styles["about-text"]}>
            Je m’appelle Colette, pâtissière indépendante, spécialisée dans la
            création de gâteaux faits maison sur commande.
          </p>
          <p className={styles["about-text"]}>
            Depuis ma cuisine en Essonne, je prépare des créations
            personnalisées pour toutes les occasions : anniversaires, mariages,
            baby showers ou simples moments gourmands.
          </p>
          <Image
            src="/images/signature.png"
            width={579}
            height={50}
            alt="Photo de la chef"
            className={styles["signature-image"]}
          />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
