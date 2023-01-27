import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';

function FavoriteRecipes() {
  const { setTitle } = useContext(RecipesProvider);
  useEffect(() => {
    setTitle('Favorite Recipes');
  }, [setTitle]);
  return (
    <div>Favorite Recipes</div>
  );
}

export default FavoriteRecipes;
