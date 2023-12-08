import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>
          <App />
          <a style={"color: var(--tg-theme-button-text-color)"} href='https://t.me/ktotam112'> Contact developer </a>
      </BrowserRouter>
  </React.StrictMode>
);

