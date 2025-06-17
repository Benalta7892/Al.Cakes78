import styles from "./ServicesSection.module.css";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className={`${styles["services-section"]}`}>
      <div className={styles["services-wrapper"]}>
        {/* <Image
          src="/images/img-service.svg"
          width={594}
          height={100}
          alt="Image de service"
          className={`${styles["service-image"]} ${styles["service-image1"]}`}
        /> */}
        <div className={`${styles["services-container"]} bordered`}>
          <div className={`${styles["services-content"]} bordered`}>
            <div className={styles["services-header"]}>
              <div className={styles["services-logo"]}>
                <Image
                  src="./images/logo-order-service.svg"
                  alt="logo de commande"
                  width={50}
                  height={50}
                  className={styles["services-logo-image"]}
                />
              </div>

              <div className={styles["services-title"]}>
                <h2>Commandes</h2>
              </div>

              <div className={styles["right"]} />
            </div>

            <p>
              Les commandes doivent être passées au moins{" "}
              <span className={styles["highlight-text"]}>5 jours avant</span> la
              date de votre événement.
            </p>
            <p>
              Afin de garantir la qualité du travail, l’approvisionnement des
              ingrédients et une organisation optimale, les demandes en deçà de
              ce délai ne sont pas prises en charge.
            </p>
            <p>Toute commande est acceptée sous réserve de disponibilité.</p>
          </div>
        </div>

        <div className={`${styles["services-container"]} bordered`}>
          <div className={`${styles["services-content"]} bordered`}>
            <div className={styles["services-header"]}>
              <div className={styles["services-logo"]}>
                <Image
                  src="./images/logo-gateaux-service.svg"
                  alt="logo de personnalisation"
                  width={50}
                  height={50}
                  className={styles["services-logo-image"]}
                />
              </div>

              <div className={styles["services-title"]}>
                <h2>Personnalisation</h2>
              </div>

              <div className={styles["right"]} />
            </div>

            <p>
              Que ce soit pour célébrer un anniversaire, marquer un événement ou
              simplement savourer un moment sucré, je propose des gâteaux{" "}
              <span className={styles["highlight-text"]}>
                entièrement personnalisés
              </span>
              , pensés sur mesure selon{" "}
              <span className={styles["highlight-text"]}>vos envies</span>, et
              livrés partout en Île-de-France.
            </p>
            <p>Une envie particulière ? Échangeons avec plaisir.</p>
          </div>
        </div>

        <div className={`${styles["services-container"]} bordered`}>
          <div className={`${styles["services-content"]} bordered`}>
            <div className={styles["services-header"]}>
              <div className={styles["services-logo"]}>
                <Image
                  src="./images/logo-delivery-service.svg"
                  alt="logo de livraison"
                  width={50}
                  height={50}
                  className={styles["services-logo-image"]}
                />
              </div>

              <div className={styles["services-title"]}>
                <h2>Livraison</h2>
              </div>

              <div className={styles["right"]} />
            </div>

            <p>
              Livraison ou retrait ? <br /> C’est vous qui choisissez !
            </p>

            <p>
              Je propose la{" "}
              <span className={styles["highlight-text"]}>livraison</span>{" "}
              partout en{" "}
              <span className={styles["highlight-text"]}>Île-de-France</span>,
              avec des frais ajustés selon la distance depuis ma cuisine située
              à <span className={styles["highlight-text"]}>Versailles</span>,
              point de départ de chaque commande.
            </p>

            <p>
              À partir de <strong>85 € de commande</strong>, la livraison vous
              est offerte — où que vous soyez en Île-de-France.
            </p>

            <p>
              Chaque gâteau est soigneusement emballé afin de garantir sa
              fraîcheur et son intégrité jusqu’à sa réception.
            </p>

            <table className={styles["delivery-table"]}>
              <tbody>
                <tr className={styles["delivery-row"]}>
                  <td className={styles["delivery-size"]}>Zone 1 : 15km</td>
                  <td className={styles["delivery-price"]}>10 €</td>
                </tr>

                <tr className={styles["delivery-row"]}>
                  <td className={styles["delivery-size"]}>Zone 2 : 30 km</td>
                  <td className={styles["delivery-price"]}>15 €</td>
                </tr>

                <tr className={styles["delivery-row"]}>
                  <td className={styles["delivery-distance"]}>
                    Zone 3 : 30 km et +
                  </td>
                  <td className={styles["delivery-price"]}>20 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <Image
          src="/images/img-service2.svg"
          width={594}
          height={100}
          alt="Image de service"
          className={`${styles["service-image"]} ${styles["service-image2"]}`}
        /> */}
      </div>
    </section>
  );
};
export default ServicesSection;
