import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import { renderWithRouter } from './helpers/renderWith';

describe('A página Profile', () => {
  test('contém um elemento que mostra um email de exemplo caso não haja email do usuário', () => {
    render(<Profile />);

    const userEmail = screen.getByTestId('profile-email');
    expect(userEmail).toBeInTheDocument();

    const exampleEmail = 'example@example.com';
    expect(userEmail.textContent).toBe(exampleEmail);
  });

  test('contém um elemento que mostra o email do usuário caso esteja no localStorage', () => {
    const email = 'conde@dracula.com';
    const userEmail = JSON.stringify({ email });
    localStorage.setItem('user', userEmail);

    render(<Profile />);

    const emailElement = screen.findByText(/conde@dracula.com/i);
    waitFor(() => expect(emailElement).toBeInTheDocument());
  });

  test('contém um botão que redireciona para a página Done Recipes', () => {
    const { history } = renderWithRouter(<Profile />);

    const doneRecipesBtn = screen.getByTestId('profile-done-btn');
    expect(doneRecipesBtn).toBeInTheDocument();

    userEvent.click(doneRecipesBtn);
    waitFor(() => expect(history.location.pathname).toBe('/done-recipes'));
  });

  test('contém um botão que redireciona para a página Favorite Recipes', () => {
    const { history } = renderWithRouter(<Profile />);

    const favoriteRecipesBtn = screen.getByTestId('profile-favorite-btn');
    expect(favoriteRecipesBtn).toBeInTheDocument();

    userEvent.click(favoriteRecipesBtn);
    waitFor(() => expect(history.location.pathname).toBe('/favorite-recipes'));
  });

  test('contém um botão Logout', () => {
    render(<Profile />);

    const logoutBtn = screen.getByText(/Logout/i);
    expect(logoutBtn).toBeInTheDocument();
    userEvent.click(logoutBtn);
  });

  test('o botão Logout que redireciona para a página de Login', () => {
    const { history } = renderWithRouter(<Profile />);

    const logoutBtn = screen.getByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();

    userEvent.click(logoutBtn);
    waitFor(() => expect(history.location.pathname).toBe('/'));
  });
});
