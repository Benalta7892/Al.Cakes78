import styles from "./CakeDetails.module.css";
import CakeImageDisplay from "./CakeImageDisplay";
import CakeInfosDisplay from "./CakeInfosDisplay";

type Props = {
  name: string;
  images: string[];
};

const CakeDetails = ({ name, images }: Props) => {
  return (
    <section className={styles["cake-details-section"]}>
      <CakeImageDisplay name={name} images={images} />
      <CakeInfosDisplay />
    </section>
  );
};
export default CakeDetails;
