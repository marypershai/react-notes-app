import './App.css';
import {AddNoteModalContextProvider} from './services/contexts/AddNoteModalContext';
import {DeleteNoteModalContextProvider} from './services/contexts/DeleteNoteModalContext';
import {Outlet} from 'react-router-dom';
import {Menu} from './components/menu/Menu';
import {EditNoteModalContextProvider} from './services/contexts/EditNoteModalContext';

function App() {
  return (
    <div>
      <Menu />
      <DeleteNoteModalContextProvider>
        <AddNoteModalContextProvider>
          <EditNoteModalContextProvider>
            <Outlet />
          </EditNoteModalContextProvider>
        </AddNoteModalContextProvider>
      </DeleteNoteModalContextProvider>
    </div>
  );
}

export default App;
