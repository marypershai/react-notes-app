import './App.css';
import {LocalizationContextProvider} from './services/contexts/LocalizationContext';
import {Localization} from './components/localization/Localization';
import {AddNoteModalContextProvider} from './services/contexts/AddNoteModalContext';
import {DeleteNoteModalContextProvider} from './services/contexts/DeleteNoteModalContext';
import {Outlet} from 'react-router-dom';
import {Menu} from './components/menu/Menu';
import {NoteListContextProvider} from './services/contexts/NoteListContext';

function App() {
  return (
    <div>
      <Menu />
      <DeleteNoteModalContextProvider>
        <AddNoteModalContextProvider>
          {/*<NoteListContextProvider>*/}
          <Outlet />
          {/*</NoteListContextProvider>*/}
        </AddNoteModalContextProvider>
      </DeleteNoteModalContextProvider>
    </div>
  );
}

export default App;
