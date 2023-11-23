import './App.css';
import {AuthorizationPage} from './pages/authorizationPage/AuthorizationPage';
import {LocalizationContextProvider} from './services/contexts/LocalizationContext';

import {Localization} from './components/localization/Localization';
import {NotesListPage} from './pages/notesListPage/NotesListPage';

function App() {
  return (
    <LocalizationContextProvider>
      <Localization />
      <NotesListPage />
      {/*<AuthorizationPage />*/}
    </LocalizationContextProvider>
  );
}

export default App;
