import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './pages/Login';
import RecipesFood from './pages/RecipesFood';
import RecipesDrinks from './pages/RecipesDrinks';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/meals" component={ RecipesFood } />
      <Route exact path="/drinks" component={ RecipesDrinks } />
    </Switch>
  );
}

export default App;

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
