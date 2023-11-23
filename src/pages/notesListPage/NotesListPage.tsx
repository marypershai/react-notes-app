import {Button} from '../../components/button/Button';
import {useLocalization} from '../../services/hooks/UseLocalization';
import './NotesListPage.css';
import {mockNotes} from '../../services/data/notes';
import {NoteInerface} from '../../services/interfaces/note';
import {Note} from '../../components/note/Note';
import {Fragment} from 'react';

export const NotesListPage = () => {
  const {language: loc} = useLocalization();
  const mockNotesList = [...mockNotes];

  return (
    <div className="notes-list-wrap">
      <h2>Notes</h2>
      <div className="notes-list">
        <div className="note  add-note">
          <Button className={'add-btn'} text={'Add note'} />
        </div>
        {mockNotesList.map((noteItem: NoteInerface, index) => {
          return <Note note={noteItem} key={noteItem.id}></Note>;
        })}
        .
      </div>
    </div>
  );
};
