import './App.css';
import {AuthorizationPage} from './pages/authorizationPage/AuthorizationPage';
import {LocalizationContextProvider} from './services/contexts/LocalizationContext';

import {Localization} from './components/localization/Localization';

function App() {
  return (
    <LocalizationContextProvider>
      <Localization />

      <AuthorizationPage />
    </LocalizationContextProvider>
  );
}

export default App;
