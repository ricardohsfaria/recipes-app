import React, { useContext } from 'react';
import RecipesProvider from '../context/RecipesProvider';
import RecipeDetails from '../components/RecipeDetails';

const doze = 12;
function Meals() {
  const { recipesFood } = useContext(RecipesProvider);

  return (
    <div>
      { recipesFood.map((recipe, index) => (
        index < doze && (
          <RecipeDetails
            key={ recipe.idMeal }
            recipe={ recipe }
            index={ index }
            literal="Meal"
          />
        )
      )) }
    </div>
  );
}

export default Meals;
