import {NotesList} from '../../components/noteList/NoteList';

export const PrivateNotesListPage = () => {
  return (
    <div>
      <NotesList isPublic={false} />
    </div>
  );
};
