import {useLocalization} from '../../services/hooks/UseLocalization';
import {mockNotes} from '../../services/data/notes';
import {NoteInterface} from '../../services/interfaces/note';
import React, {useContext} from 'react';
import {AddNoteModalContext} from '../../services/contexts/AddNoteModalContext';
import {Button} from '../button/Button';
import {NoteModal} from '../modals/addNoteModal/NoteModal';
import {Note} from '../note/Note';
import './NodeList.css';
import {Outlet, useSearchParams} from 'react-router-dom';
import {DeleteModal} from '../modals/deleteModal/DeleteModal';
import {DeleteNoteModalContext} from '../../services/contexts/DeleteNoteModalContext';
import {LinkButton} from '../linkButton/LinkButton';
import {EditNoteModalContext} from '../../services/contexts/EditNoteModalContext';

type NotesListProps = {
  isPublic: boolean;
  isFavorites?: boolean;
};

export const NotesList = (props: NotesListProps) => {
  const {isPublic} = props;
  const {language: loc} = useLocalization();
  const mockNotesList = [...mockNotes];
  const {modalVisibility, setModalVisibility} = useContext(AddNoteModalContext);
  const {modalVisibility: deleteModalVisibility} = useContext(DeleteNoteModalContext);
  const {modalContent} = useContext(EditNoteModalContext);
  const favoritesNotes = mockNotesList.filter((note: NoteInterface) => note.isFavorite);

  const [searchParams, setSearchParams] = useSearchParams();

  const noteId: string = searchParams.get('noteId');
  const isFavorites: string = searchParams.get('favorites');

  const openAddNewNoteModal = () => {
    setModalVisibility(() => !modalVisibility);
  };

  const openFavorites = () => {
    setSearchParams(searchParams => {
      searchParams.set('favorites', String(true));
      return searchParams;
    });
  };

  const openAllNotes = () => {
    setSearchParams(searchParams => {
      searchParams.delete('favorites');
      return searchParams;
    });
  };

  return (
    <div className={noteId ? 'details-layout notes-list-wrap' : 'notes-list-wrap'}>
      <div className="main-container">
        <h2>
          {isPublic ? loc.public_notes_title : loc.private_notes_title}
          {isPublic ? (
            <div className="favorites-notes">
              <LinkButton text={'All notes'} onClick={openAllNotes} /> |{' '}
              <LinkButton text={'Favorites'} onClick={openFavorites} />
            </div>
          ) : (
            ''
          )}
        </h2>
        <div className="notes-list">
          {isPublic ? (
            ''
          ) : (
            <div className="note  add-note">
              <Button className={'add-btn'} text={'Add note'} onClick={openAddNewNoteModal} />
              {modalVisibility ? <NoteModal /> : ''}
            </div>
          )}
          {isFavorites
            ? favoritesNotes.map((noteItem: NoteInterface, index) => {
                return <Note note={noteItem} key={noteItem.id} isPublic={isPublic}></Note>;
              })
            : mockNotesList.map((noteItem: NoteInterface, index) => {
                return <Note note={noteItem} key={noteItem.id} isPublic={isPublic}></Note>;
              })}
          {deleteModalVisibility ? <DeleteModal /> : ''}
          {modalContent.visibility ? <NoteModal isEdit note={modalContent.note} /> : ''}
        </div>
      </div>
      {noteId ? <Outlet /> : ''}
    </div>
  );
};
