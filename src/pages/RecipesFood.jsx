import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';
import RecipeDetails from '../components/RecipeDetails';

const doze = 12;
function Meals() {
  const { recipesFood, setTitle } = useContext(RecipesProvider);

  useEffect(() => {
    setTitle('Meals');
  }, [setTitle]);

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
