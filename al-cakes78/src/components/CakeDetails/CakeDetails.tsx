import { CAKES } from "@/data/cakes";
import styles from "./CakeDetails.module.css";
import CakeImageDisplay from "./CakeImageDisplay";
import CakeInfosDisplay from "./CakeInfosDisplay";

type Props = {
  cake: (typeof CAKES)[number];
};

const CakeDetails = ({ cake }: Props) => {
  return (
    <section className={styles["cake-details-section"]}>
      <CakeImageDisplay name={cake.name} images={cake.images} />
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
