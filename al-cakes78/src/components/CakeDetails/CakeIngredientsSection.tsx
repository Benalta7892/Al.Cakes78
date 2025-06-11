import styles from "./CakeIngredients.module.css";

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
            <span>◈</span> {ingredient}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CakeIngredients;
