import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Login</legend>
          <input
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Password"
          />
          <button
            type="button"
            data-testid="login-submit-btn"
          >
            Enter
          </button>
        </fieldset>
      </div>
    );
  }
}

export default Login;
