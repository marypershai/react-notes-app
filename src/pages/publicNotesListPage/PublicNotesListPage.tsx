import {NotesList} from '../../components/noteList/NoteList';

export const PublicNotesListPage = () => {
  return (
    <div>
      <NotesList isPublic={true} />
    </div>
  );
};
