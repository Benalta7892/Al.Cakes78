import { CAKES } from "@/data/cakes";
import styles from "./CakeDetails.module.css";
import CakeImageDisplay from "./CakeImageDisplay";
import CakeInfosDisplay from "./CakeInfosDisplay";

type Props = {
  cake: (typeof CAKES)[number];
};

const CakeDetails = ({ cake }: Props) => {
  return (
    <section className={styles["cake-details-section"]} data-aos="fade-up">
      {/* Afficher les images du gateaux */}
      <CakeImageDisplay name={cake.name} images={cake.images} />

      {/* Afficher les informations du gateaux */}
      <CakeInfosDisplay
        name={cake.name}
        description={cake.description}
        ingredients={cake.ingredients}
        molds={cake.molds}
      />
    </section>
  );
};
export default CakeDetails;
