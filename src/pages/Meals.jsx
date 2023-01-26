import React, { useContext } from 'react';
import RecipesProvider from '../context/RecipesProvider';

function Meals() {
  const { recipes } = useContext(RecipesProvider);
  return (
    <div>
      <fieldset>
        <legend>{recipes}</legend>
      </fieldset>
    </div>
  );
}

export default Meals;
