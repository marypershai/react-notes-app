import {Button} from '../../components/button/Button';
import {useLocalization} from '../../services/hooks/UseLocalization';
import './Note.css';
import {NoteInerface} from '../../services/interfaces/note';
import {AddToFavorites} from '../iconButton/AddToFavorites';
import {useContext} from 'react';
import {AddNoteModalContext} from '../../services/contexts/AddNoteModalContext';
import {DeleteNoteModalContext} from '../../services/contexts/DeleteNoteModalContext';
import {AddNoteModal} from '../modals/addNoteModal/AddNoteModal';
import {DeleteModal} from '../modals/deleteModal/DeleteModal';

type NoteProps = {
  note: NoteInerface;
  isPublic: boolean;
};

export const Note = (props: NoteProps) => {
  const {language: loc} = useLocalization();
  const {note, isPublic} = props;

  const {modalVisibility, setModalVisibility} = useContext(DeleteNoteModalContext);

  const deleteNote = () => {
    setModalVisibility(() => !modalVisibility);
  };

  const editNote = () => {
    console.log('Edit Note');
  };

  const readMore = () => {
    console.log('Read More');
  };
  return (
    <div className="note">
      <div className="note-title" style={{background: note.color}}>
        <div>{note.title}</div>
        {isPublic ? (
          <div className="star">
            <AddToFavorites />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="note-content">
        <div className="note-field">
          <div className="note-field-title">{loc.note_title}</div>
          <div className="note-field-text">{note.title}</div>
        </div>
        <div className="note-field">
          <div className="note-field-title">{loc.note_text}</div>
          <div className="note-field-text">{note.text}</div>
        </div>

        <div className="note-field">
          <div className="note-field-title">{loc.note_tags}</div>
          <div className="note-field-text">{note.tags.join(', ')}</div>
        </div>
        {isPublic ? (
          ''
        ) : (
          <div className="note-field">
            <div className="note-field-title">{loc.note_isPublic}</div>
            <div className="note-field-text">{note.isPublic ? loc.yes : loc.no}</div>
          </div>
        )}
      </div>
      {isPublic ? (
        ''
      ) : (
        <div className="note-buttons">
          <Button text={loc.delete} onClick={deleteNote}></Button>
          <Button text={loc.edit} onClick={editNote}></Button>
          <Button text={loc.read_more} onClick={readMore}></Button>
        </div>
      )}
      {modalVisibility ? <DeleteModal /> : ''}
    </div>
  );
};
