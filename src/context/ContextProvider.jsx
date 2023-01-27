import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesProvider from './RecipesProvider';

export function ContextProvider({ children }) {
  const [path, setPath] = useState('/drinks');
  const [recipesFood, setRecipesFood] = useState([]);
  const [recipesDrink, setRecipesDrink] = useState([]);
  const [title, setTitle] = useState('');
  const [searching, setSearching] = useState({ value: '', clicked: false, done: false });

  const fetchFood = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    await fetch(url)
      .then((e) => e.json())
      .then((data) => setRecipesFood(data.meals));
  };

  const fetchDrink = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    await fetch(url)
      .then((e) => e.json())
      .then((data) => setRecipesDrink(data.drinks));
  };

  useEffect(() => {
    fetchFood();
    fetchDrink();
  }, []);

  useEffect(() => {
  }, []);

  const GLOBAL_CONTEXT = useMemo(
    () => ({
      path,
      setPath,
      title,
      setTitle,
      recipesFood,
      recipesDrink,
      setRecipesFood,
      searching,
      setSearching,
    }),
    [
      path,
      setPath,
      title,
      setTitle,
      recipesFood,
      recipesDrink,
      setRecipesFood,
      searching,
      setSearching,
    ],
  );

  return (
    <RecipesProvider.Provider value={ GLOBAL_CONTEXT }>
      {children}
    </RecipesProvider.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
