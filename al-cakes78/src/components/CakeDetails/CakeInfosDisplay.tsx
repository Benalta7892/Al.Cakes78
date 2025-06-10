import styles from "./CakeDetails.module.css";

const CakeInfosDisplay = () => {
  return (
    <div className={`${styles["display-container"]} bordered`}>
      <div className={`${styles["display-wrapper"]} bordered`}>
        Cake Infos Display
      </div>
    </div>
  );
};
export default CakeInfosDisplay;
