import InfoCard from "./InfoCard";
import InfoCardReverse from "./InfoCardReverse";
import styles from "@/styles/CardInfos.module.css";

const CardInfos = () => {
  return (
    <section>
      <div className={styles["cards-container"]}>
        <InfoCard
          title="Le gout de la qualité"
          text="Des saveurs vraies, choisies avec soin, parce que chaque bouchée parle d’elle-même."
          imageSrc="/images/cardinfo1.jpg"
          alt="Image pour illustrer le gout de la qualité"
        />

        <InfoCardReverse
          title="Le gout de la beauté"
          text="Un dessert se déguste d’abord avec les yeux. Ici, chaque création raconte une histoire délicieuse."
          imageSrc="/images/cardinfo2.jpg"
          alt="Image pour illustrer la beauté des gâteaux"
        />
      </div>
    </section>
  );
};
export default CardInfos;
