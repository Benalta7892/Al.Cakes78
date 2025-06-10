import styles from "./CakeDetails.module.css";
import CakeImageDisplay from "./CakeImageDisplay";
import CakeInfosDisplay from "./CakeInfosDisplay";

const CakeDetails = () => {
  return (
    <section className={styles["cake-details-section"]}>
      <CakeImageDisplay />
      <CakeInfosDisplay />
    </section>
  );
};
export default CakeDetails;
