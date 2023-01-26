import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import RecipesProvider from './RecipesProvider';

export function ContextProvider({ children }) {
  const [recipes, setRecipes] = useState('Xablau');

  const GLOBAL_CONTEXT = useMemo(
    () => ({
      recipes,
      setRecipes,
    }),
    [
      recipes,
      setRecipes,
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
