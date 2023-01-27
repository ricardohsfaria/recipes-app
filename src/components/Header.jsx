import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesProvider from '../context/RecipesProvider';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const history = useHistory();
  const { title } = useContext(RecipesProvider);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const { pathname } = history.location;
  if (pathname === '/'
        || pathname.startsWith('/meals/') || pathname.startsWith('/drinks/')
        || pathname.startsWith('meals/:id-da-receita/')
        || pathname.startsWith('drinks/:id-da-receita/')) {
    return null;
  } if (pathname === '/profile' || pathname === '/done-recipes'
  || pathname === '/favorite-recipes') {
    return (
      <div>
        <h1 data-testid="page-title">{title}</h1>
        <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
      </div>
    );
  }

  return (
    <div>
      <h1 data-testid="page-title">{title}</h1>
      <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
      <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
    </div>
  );
}

export default Header;
