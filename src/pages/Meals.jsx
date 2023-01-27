import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';

function Meals() {
  const { recipes, setTitle } = useContext(RecipesProvider);
  useEffect(() => {
    setTitle('Meals');
  }, [setTitle]);
  return (
    <div>
      <fieldset>
        <legend>{recipes}</legend>
      </fieldset>
    </div>
  );
}

export default Meals;
