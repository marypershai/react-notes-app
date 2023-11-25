import {useLocalization} from '../../services/hooks/UseLocalization';
import {mockNotes} from '../../services/data/notes';
import {NoteInerface} from '../../services/interfaces/note';
import {useContext} from 'react';
import {AddNoteModalContext} from '../../services/contexts/AddNoteModalContext';
import {Button} from '../button/Button';
import {AddNoteModal} from '../modals/addNoteModal/AddNoteModal';
import {Note} from '../note/Note';
import './NodeList.css';

type NotesListProps = {
  isPublic: boolean;
};

export const NotesList = (props: NotesListProps) => {
  const {isPublic} = props;
  const {language: loc} = useLocalization();
  const mockNotesList = [...mockNotes];
  const {modalVisibility, setModalVisibility} = useContext(AddNoteModalContext);

  const openAddNewNoteModal = () => {
    setModalVisibility(() => !modalVisibility);
  };

  return (
    <div className="notes-list-wrap">
      <h2>{isPublic ? loc.public_notes_title : loc.private_notes_title}</h2>
      <div className="notes-list">
        {isPublic ? (
          ''
        ) : (
          <div className="note  add-note">
            <Button className={'add-btn'} text={'Add note'} onClick={openAddNewNoteModal} />
            {modalVisibility ? <AddNoteModal /> : ''}
          </div>
        )}
        {mockNotesList.map((noteItem: NoteInerface, index) => {
          return <Note note={noteItem} key={noteItem.id} isPublic={isPublic}></Note>;
        })}
      </div>
    </div>
  );
};
