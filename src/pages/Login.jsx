import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    email: '',
    password: '',
    disableLoginButton: true,
  };

  handleInputChanges = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.formCheck());
  };

  emailCheck = () => {
    const { email } = this.state;
    const validEmailRegex = /\S+@\S+\.\S+/;

    return (validEmailRegex.test(email)); // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  };

  passwordCheck = () => {
    const MIN_PASSWORD_SIZE = 6;
    const { password } = this.state;

    return (password.length > MIN_PASSWORD_SIZE);
  };

  formCheck = () => {
    this.setState({
      disableLoginButton: !(this.emailCheck() && this.passwordCheck()),
    });
  };

  handleClickLoginButton = () => {
    const { history } = this.props;
    const { email } = this.state;
    const userEmail = JSON.stringify({ email }); // https://stackabuse.com/storing-to-localstorage-in-react/

    localStorage.setItem('user', userEmail);
    history.push('/meals');
  };

  render() {
    const { disableLoginButton } = this.state;

    return (
      <div>
        <fieldset>
          <legend>Login</legend>
          <input
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
            name="email"
            onChange={ this.handleInputChanges }
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Password"
            name="password"
            onChange={ this.handleInputChanges }
          />
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ disableLoginButton }
            onClick={ this.handleClickLoginButton }
          >
            Enter
          </button>
        </fieldset>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
