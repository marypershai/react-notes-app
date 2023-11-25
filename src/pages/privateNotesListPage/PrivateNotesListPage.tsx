import {NotesList} from '../../components/noteList/NoteList';

export const PrivateNotesListPage = () => {
  return <NotesList isPublic={false} />;
};
