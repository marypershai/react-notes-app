import {Button} from '../../components/button/Button';
import {useLocalization} from '../../services/hooks/UseLocalization';
import './Note.css';
import {INote} from '../../services/interfaces/INote';
import {AddToFavorites} from '../iconButton/AddToFavorites';
import React, {useContext, useState} from 'react';
import {DeleteNoteModalContext} from '../../services/contexts/DeleteNoteModalContext';

import {useSearchParams} from 'react-router-dom';
import {EditNoteModalContext} from '../../services/contexts/EditNoteModalContext';

type NoteProps = {
  note: INote;
  isPublic: boolean;
  forDetailsPage?: boolean;
};

export const Note = (props: NoteProps) => {
  const {language: loc} = useLocalization();
  const {note, isPublic, forDetailsPage} = props;
  const {modalContent: deleteModalContent, setModalContent: setDeleteModalContent} =
    useContext(DeleteNoteModalContext);
  const {setModalContent} = useContext(EditNoteModalContext);
  const [, setSearchParams] = useSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const deleteNote = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target && event.target === event.currentTarget) {
      setDeleteModalContent(() => ({
        visibility: true,
        note,
      }));
    }
  };

  const editNote = () => {
    setModalContent(prev => ({
      visibility: !prev.visibility,
      note,
    }));
  };

  const readMore = () => {
    setSearchParams(searchParams => {
      searchParams.set('noteId', note.id!);
      return searchParams;
    });
  };

  const addToFavorites = () => {
    setIsFavorite(() => !isFavorite);
    console.log('add to favorite');
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
