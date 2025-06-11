import styles from "./CakeInfosDisplay.module.css";
import Image from "next/image";
import IntroSection from "@/components/IntroSection/IntroSection";
import CakeIngredientsSection from "./CakeIngredientsSection";
import CakeMoldsSection from "./CakeMoldsSection";

type Props = {
  name: string;
  description: string;
  ingredients: string[];
  molds: {
    size: string;
    price: number;
  }[];
};

const CakeInfosDisplay = ({ name, description, ingredients, molds }: Props) => {
  return (
    <div className={`${styles["display-container"]} bordered`}>
      <div className={`${styles["display-wrapper"]} bordered`}>
        {/* Logo centré */}
        <div className={styles["logo-container"]}>
          <Image
            src="/images/Logo.svg"
            width={264}
            height={237}
            alt="Logo"
            className={styles["img"]}
          />
        </div>

        {/* Titre h2 */}
        {/* Description */}
        <IntroSection title={name} description={description} />

        {/* Ingrédients avec un titre et une liste */}
        <CakeIngredientsSection ingredients={ingredients} />

        {/* Moules disponible (taille et prix) avec un titre et un tableau */}
        <CakeMoldsSection molds={molds} />
      </div>
    </div>
  );
};
export default CakeInfosDisplay;
