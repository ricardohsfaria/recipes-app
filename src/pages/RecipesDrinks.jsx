import React, { useContext } from 'react';
import RecipesProvider from '../context/RecipesProvider';
import RecipeDetails from '../components/RecipeDetails';

const doze = 12;
export default function RecipiesDrinks() {
  const { recipesDrink } = useContext(RecipesProvider);

  return (
    <div>
      {recipesDrink.map((recipe, index) => (
        index < doze && (
          <RecipeDetails
            key={ recipe.idDrink }
            recipe={ recipe }
            index={ index }
            literal="Drink"
          />
        )
      ))}
    </div>
  );
}
