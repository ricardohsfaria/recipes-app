import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';
import Footer from '../components/Footer';

function Drinks() {
  const { setTitle, recipes } = useContext(RecipesProvider);
  useEffect(() => {
    setTitle('Drinks');
  }, [setTitle]);
  return (
    <div>
      drinks
      <fieldset>
        <legend>{recipes}</legend>
      </fieldset>
      <Footer />

    </div>
  );
}

export default Drinks;
