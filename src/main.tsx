import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Router} from './services/router/router';
import {Localization} from './components/localization/Localization';
import {LocalizationContextProvider} from './services/contexts/LocalizationContext';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {setupStore} from './services/store/store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationContextProvider>
        <Localization />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LocalizationContextProvider>
    </Provider>
  </React.StrictMode>
);
