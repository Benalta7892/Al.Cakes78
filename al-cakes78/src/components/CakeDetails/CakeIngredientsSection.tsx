import styles from "./CakeIngredients.module.css";
import Image from "next/image";

type Props = {
  ingredients: string[];
};

const CakeIngredients = ({ ingredients }: Props) => {
  return (
    <section className={styles["cake-ingredients-section"]}>
      <h3 className={styles["title-ingredients-section"]}>Ingrédients</h3>
      <ul className={styles["ingredients-list"]}>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={styles["ingredient-item"]}>
            <Image
              src="/images/puce.svg"
              alt="puce de liste"
              width={10}
              height={10}
              className={styles["list-bullet"]}
            />
            {ingredient}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CakeIngredients;
