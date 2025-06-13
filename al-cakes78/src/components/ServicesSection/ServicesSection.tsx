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
              Les commandes doivent être passées au minimum 5 jours à l’avance.
              Afin de garantir la qualité du travail, l’approvisionnement des
              ingrédients et une organisation optimale, les demandes en dessous
              de ce délai ne sont pas prises en charge. Toute commande est
              acceptée sous réserve de disponibilité.
            </p>
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
              Pour un anniversaire, un événement ou juste pour le plaisir, je
              prépare des gâteaux maison sur commande, livrés partout en
              Île-de-France.
            </p>
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
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phas ellus viverra nulla ut metus varius laoreet. Quisque rutrum.
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
