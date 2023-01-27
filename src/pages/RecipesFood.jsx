import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';
import RecipeDetails from '../components/RecipeDetails';
import Footer from '../components/Footer';

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
      <Footer />
    </div>
  );
}

export default Meals;
