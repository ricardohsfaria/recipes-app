import React, { useContext } from 'react';
import RecipesProvider from '../context/RecipesProvider';
import Footer from '../components/Footer';

function Drinks() {
  const { recipes } = useContext(RecipesProvider);
  return (
    <div>
      <fieldset>
        <legend>{recipes}</legend>
      </fieldset>
      <Footer />
    </div>
  );
}

export default Drinks;
