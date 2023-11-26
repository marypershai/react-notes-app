import './App.css';
import {LocalizationContextProvider} from './services/contexts/LocalizationContext';
import {Localization} from './components/localization/Localization';
import {AddNoteModalContextProvider} from './services/contexts/AddNoteModalContext';
import {DeleteNoteModalContextProvider} from './services/contexts/DeleteNoteModalContext';
import {Outlet, RouterProvider} from 'react-router-dom';
import {router} from './services/router/Router';
import {Menu} from './components/menu/Menu';

function App() {
  return (
    <div>
      <Menu />
      <DeleteNoteModalContextProvider>
        <AddNoteModalContextProvider>
          <Outlet />
        </AddNoteModalContextProvider>
      </DeleteNoteModalContextProvider>
    </div>
  );
}

export default App;
