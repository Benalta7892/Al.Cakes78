type CakeIngredientsProps = {
  ingredients: string[];
};

const CakeIngredients = ({ ingredients }: CakeIngredientsProps) => {
  return (
    <section>
      <h3>Ingrédients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
};
export default CakeIngredients;
