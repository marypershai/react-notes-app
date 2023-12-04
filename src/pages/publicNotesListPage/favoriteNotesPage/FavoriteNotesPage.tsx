import './FavoriteNotesPage.css';
import {NotesList} from '../../../components/noteList/NoteList';

export const FavoriteNotesPage = () => {
  return <NotesList isPublic={false} />;
};
