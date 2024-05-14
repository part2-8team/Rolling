import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyles.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <App />
  </>,
);
