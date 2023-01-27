import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';

function Drinks() {
  const { setTitle } = useContext(RecipesProvider);
  useEffect(() => {
    setTitle('Drinks');
  }, [setTitle]);
  return (
    <div>
      drinks
    </div>
  );
}

export default Drinks;
