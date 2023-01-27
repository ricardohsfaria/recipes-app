import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';
import Footer from '../components/Footer';

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
      <Footer />
    </div>
  );
}

export default Meals;
