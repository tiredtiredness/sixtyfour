import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './normalize.css';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
