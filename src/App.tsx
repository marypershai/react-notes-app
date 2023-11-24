import './App.css';
import {AuthorizationPage} from './pages/authorizationPage/AuthorizationPage';
import {LocalizationContextProvider} from './services/contexts/LocalizationContext';

import {Localization} from './components/localization/Localization';
import {NotesListPage} from './pages/notesListPage/NotesListPage';
import {AddNoteModalContextProvider} from './services/contexts/AddNoteModalContext';

function App() {
  return (
    <LocalizationContextProvider>
      <Localization />
      <AddNoteModalContextProvider>
        <NotesListPage />
      </AddNoteModalContextProvider>
      {/*<AuthorizationPage />*/}
    </LocalizationContextProvider>
  );
}

export default App;
