import styles from "./Disclaimer.module.css";

const Disclaimer = () => {
  return (
    <div className={styles["disclaimer-container"]}>
      <span
        role="img"
        aria-label="warning"
        className={styles["warning-icon-cake-page"]}>
        ⚠️
      </span>
      <p className={styles["disclaimer"]}>
        Ce site est un projet expérimental. Aucun paiement en ligne n’est
        effectué.
      </p>
      <span
        role="img"
        aria-label="warning"
        className={styles["warning-icon-cake-page"]}>
        ⚠️
      </span>
    </div>
  );
};
export default Disclaimer;
