import './App.css';
import {AuthorizationPage} from './pages/authorizationPage/AuthorizationPage';
import {LocalizationContextProvider} from './services/contexts/LocalizationContext';

import {Localization} from './components/localization/Localization';
import {PrivateNotesListPage} from './pages/privateNotesListPage/PrivateNotesListPage';
import {AddNoteModalContextProvider} from './services/contexts/AddNoteModalContext';
import {PublicNotesListPage} from './pages/publicNotesListPage/PublicNotesListPage';

function App() {
  return (
    <LocalizationContextProvider>
      <Localization />
      <AddNoteModalContextProvider>
        <PrivateNotesListPage />
        {/*  <PublicNotesListPage />*/}
      </AddNoteModalContextProvider>
      {/*<AuthorizationPage />*/}
    </LocalizationContextProvider>
  );
}

export default App;
