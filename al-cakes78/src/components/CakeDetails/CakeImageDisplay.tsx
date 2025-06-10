import styles from "./CakeDetails.module.css";

const CakeImageDisplay = () => {
  return (
    <div className={`${styles["display-container"]} bordered`}>
      <div className={`${styles["display-wrapper"]} bordered`}>
        Cake Image Display
      </div>
    </div>
  );
};
export default CakeImageDisplay;
