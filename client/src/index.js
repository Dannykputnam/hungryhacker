import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
import FoodProvider from './providers/FoodProvider';
import CoffeeProvider from './providers/CoffeeProvider';
import BarProvider from './providers/BarProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FoodProvider>
          <CoffeeProvider>
            <BarProvider>
              <App />
            </BarProvider>
          </CoffeeProvider>
        </FoodProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);