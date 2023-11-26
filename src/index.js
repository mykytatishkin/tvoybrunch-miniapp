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
          Created by <a href='https://t.me/mykytatishkin'>@mykytatishkin</a>
      </BrowserRouter>
  </React.StrictMode>
);

