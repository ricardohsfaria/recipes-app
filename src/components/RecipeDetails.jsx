import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeDetails({ index, recipe, literal }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ recipe[`str${literal}Thumb`] }
        alt={ recipe[`str${literal}`] }
      />
      <span
        data-testid={ `${index}-card-name` }
      >
        { recipe[`str${literal}`] }
      </span>
    </div>
  );
}

RecipeDetails.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.func.isRequired,
  literal: PropTypes.string.isRequired,
};
