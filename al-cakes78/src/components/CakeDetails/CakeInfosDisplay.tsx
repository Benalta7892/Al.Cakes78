import styles from "./CakeInfosDisplay.module.css";
import Image from "next/image";
import IntroSection from "@/components/IntroSection/IntroSection";
import CakeIngredientsSection from "./CakeIngredientsSection";
import CakeMoldsSection from "./CakeMoldsSection";

const CakeInfosDisplay = () => {
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
        <IntroSection
          title="Dalia, le Gâteau Fruité"
          description={
            <>
              Dalia est un entremets fruité, léger et gourmand. Sa génoise à la
              vanille est garnie d&apos;une mousse légère aux fruits rouges, le
              tout recouvert d&apos;un glaçage miroir. Décoré avec des fruits
              frais et des fleurs comestibles, il est parfait pour toutes les
              occasions.
            </>
          }
        />

        {/* Ingrédients avec un titre et une liste */}
        <CakeIngredientsSection
          ingredients={[
            "Génoise à la vanille",
            "Mousse légère aux fruits rouges",
            "Glaçage miroir",
            "Décor en chocolat blanc",
            "Fruits frais",
            "Fleurs comestibles",
          ]}
        />

        {/* Moules disponible (taille et prix) avec un titre et un tableau */}
        <CakeMoldsSection />
      </div>
    </div>
  );
};
export default CakeInfosDisplay;
