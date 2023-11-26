import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {router} from './services/router/router';
import {RouterProvider} from 'react-router-dom';
import {Localization} from './components/localization/Localization';
import {LocalizationContextProvider} from './services/contexts/LocalizationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationContextProvider>
      <Localization />
      <RouterProvider router={router} />
    </LocalizationContextProvider>
  </React.StrictMode>
);
