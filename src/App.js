import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';
import Meals from './pages/Meals';
import MealDetails from './components/MealDetails';
import MealDetailsInProgress from './components/MealDetailsInProgress';
import Drinks from './pages/Drinks';
import DrinkDetails from './components/DrinkDetails';
import DrinkDetailsInProgress from './components/DrinkDetailsInProgress';
import Profile from './pages/Profile';
import { ContextProvider } from './context/ContextProvider';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route exact path="/meals" component={ Meals } />
          <Route exact path="/meals/:id-da-receita" component={ MealDetails } />
          <Route
            exact
            path="/meals/:id-da-receita/:in-progress"
            component={ MealDetailsInProgress }
          />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/drinks/:id-da-receita" component={ DrinkDetails } />
          <Route
            exact
            path="/drinks/:id-da-receita/:in-progress"
            component={ DrinkDetailsInProgress }
          />

        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
