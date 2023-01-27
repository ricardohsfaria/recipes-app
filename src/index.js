import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ContextProvider } from './context/ContextProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <App />,
  );

serviceWorker.unregister();
