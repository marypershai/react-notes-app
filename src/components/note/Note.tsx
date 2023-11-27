import {Button} from '../../components/button/Button';
import {useLocalization} from '../../services/hooks/UseLocalization';
import './Note.css';
import {NoteInterface} from '../../services/interfaces/note';
import {AddToFavorites} from '../iconButton/AddToFavorites';
import React, {useContext, useState} from 'react';
import {AddNoteModalContext} from '../../services/contexts/AddNoteModalContext';
import {DeleteNoteModalContext} from '../../services/contexts/DeleteNoteModalContext';
import {AddNoteModal} from '../modals/addNoteModal/AddNoteModal';
import {DeleteModal} from '../modals/deleteModal/DeleteModal';
import {useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom';
import {NoteListContext} from '../../services/contexts/NoteListContext';

type NoteProps = {
  note: NoteInterface;
  isPublic: boolean;
  forDetailsPage?: boolean;
};

export const Note = (props: NoteProps) => {
  const {language: loc} = useLocalization();
  const {note, isPublic, forDetailsPage} = props;
  const {modalVisibility, setModalVisibility} = useContext(DeleteNoteModalContext);
  const [, setSearchParams] = useSearchParams();
  const [isFavorite, setIsFavorite] = useState(note.isFavorite || false);

  const deleteNote = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target && event.target === event.currentTarget) {
      setModalVisibility(() => !modalVisibility);
    }
  };

  const editNote = () => {
    console.log('Edit Note');
  };

  const readMore = () => {
    setSearchParams(searchParams => {
      searchParams.set('noteId', note.id.toString());
      return searchParams;
    });
  };

  const addToFavorites = () => {
    note.isFavorite = !isFavorite;
    setIsFavorite(() => !isFavorite);
    console.log(note);
  };

  return (
    <div className="note">
      <div className="note-content-wrap">
        <div className="note-title" style={{background: note.color}}>
          <div>{note.title}</div>
          {isPublic ? (
            <div className="star">
              <AddToFavorites isFavorite={isFavorite} onChange={addToFavorites} />
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
          {isPublic || forDetailsPage ? (
            ''
          ) : (
            <div className="note-field">
              <div className="note-field-title">{loc.note_isPublic}</div>
              <div className="note-field-text">{note.isPublic ? loc.yes : loc.no}</div>
            </div>
          )}
        </div>
      </div>
      {isPublic || forDetailsPage ? (
        ''
      ) : (
        <div className="note-buttons">
          <Button text={loc.delete} onClick={deleteNote}></Button>
          <Button text={loc.edit} onClick={editNote}></Button>
          <Button text={loc.read_more} onClick={readMore}></Button>
        </div>
      )}
    </div>
  );
};
