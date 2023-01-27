import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';
import RecipeDetails from '../components/RecipeDetails';

const doze = 12;
export default function RecipiesDrinks() {
  const { recipesDrink, setTitle } = useContext(RecipesProvider);

  useEffect(() => {
    setTitle('Drinks');
  }, [setTitle]);

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
