import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div
        data-testid="footer"
        className="footer"
      >
        <fieldset>
          <legend>Footer</legend>
          <footer>
            <a href="/drinks">
              <img
                src="src/images/drinkIcon.svg"
                alt="drink icon"
                data-testid="drinks-bottom-btn"
              />
            </a>
            <a href="/meals">
              <img
                src="src/images/mealIcon.svg"
                alt="meal icon"
                data-testid="meals-bottom-btn"
              />
            </a>
          </footer>
        </fieldset>
      </div>
    );
  }
}

export default Footer;
