import styles from "./AboutSection.module.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-container"]}>
        <div className={styles["about-header"]}>
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
          <div className={`${styles["about-image-container"]} bordered`}>
            <div className={`${styles["about-image"]} bordered`}>
              <div className={styles["about-text-content"]}>
                <h2>Mon histoire</h2>

                <p className={styles["about-text"]}>
                  Derrière chaque entremets se cache une véritable passion pour
                  la pâtisserie, le sens du détail et le plaisir de partager.
                </p>
                <p className={styles["about-text"]}>
                  Moi, c’est Colette. Depuis toujours, j’ai adoré imaginer des
                  desserts pour les repas en famille.
                </p>
                <p className={styles["about-text"]}>
                  Le jour où j’ai découvert les entremets, ce fut une évidence :
                  j’y ai trouvé un terrain d’expression à la fois créatif et
                  raffiné.
                </p>
                <p className={styles["about-text"]}>
                  Depuis, je m’y consacre avec enthousiasme et petit à petit,
                  j’ai affiné mes gestes, ma technique et développer mon propre
                  style.
                </p>
                <p className={styles["about-text"]}>
                  Aujourd’hui, je mets cette passion au service de vos tables,
                  avec l’envie de proposer des créations aussi élégantes que
                  savoureuses.
                </p>
                <p className={styles["about-text"]}>
                  C’est dans ma cuisine à Versailles que je laisse libre cours à
                  cette passion qui ne me quitte plus et je serais ravie de
                  contribuer à rendre vos moments encore plus gourmands.
                </p>
                <p className={styles["about-text"]}>
                  Alors, n’hésitez pas à me contacter pour en discuter ensemble
                  !
                </p>
                <p className={styles["about-text"]}>
                  <strong>À très bientôt !</strong>
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
