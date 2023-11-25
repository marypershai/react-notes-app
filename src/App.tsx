import './App.css';
import {AuthorizationPage} from './pages/authorizationPage/AuthorizationPage';
import {LocalizationContextProvider} from './services/contexts/LocalizationContext';

import {Localization} from './components/localization/Localization';
import {PrivateNotesListPage} from './pages/privateNotesListPage/PrivateNotesListPage';
import {AddNoteModalContextProvider} from './services/contexts/AddNoteModalContext';
import {PublicNotesListPage} from './pages/publicNotesListPage/PublicNotesListPage';
import {DeleteNoteModalContextProvider} from './services/contexts/DeleteNoteModalContext';

function App() {
  return (
    <div className="main-container">
      <LocalizationContextProvider>
        <Localization />
        <DeleteNoteModalContextProvider>
          <AddNoteModalContextProvider>
            <PrivateNotesListPage />
            {/*<PublicNotesListPage />*/}
            {/*<AuthorizationPage />*/}
          </AddNoteModalContextProvider>
        </DeleteNoteModalContextProvider>
      </LocalizationContextProvider>
    </div>
  );
}

export default App;
