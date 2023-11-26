import {useLocalization} from '../../services/hooks/UseLocalization';
import {mockNotes} from '../../services/data/notes';
import {NoteInterface} from '../../services/interfaces/note';
import React, {useContext} from 'react';
import {AddNoteModalContext} from '../../services/contexts/AddNoteModalContext';
import {Button} from '../button/Button';
import {AddNoteModal} from '../modals/addNoteModal/AddNoteModal';
import {Note} from '../note/Note';
import './NodeList.css';
import {Outlet, useSearchParams} from 'react-router-dom';
import {DeleteModal} from '../modals/deleteModal/DeleteModal';
import {DeleteNoteModalContext} from '../../services/contexts/DeleteNoteModalContext';

type NotesListProps = {
  isPublic: boolean;
};

export const NotesList = (props: NotesListProps) => {
  const {isPublic} = props;
  const {language: loc} = useLocalization();
  const mockNotesList = [...mockNotes];
  const {modalVisibility, setModalVisibility} = useContext(AddNoteModalContext);
  const {modalVisibility: deleteModalVIsibility, setModalVisibility: setDeleteModalVIsibility} =
    useContext(DeleteNoteModalContext);

  const [searchParams] = useSearchParams();

  const noteId: string = searchParams.get('noteId');

  const openAddNewNoteModal = () => {
    setModalVisibility(() => !modalVisibility);
  };

  return (
    <div className={noteId ? 'details-layout notes-list-wrap' : 'notes-list-wrap'}>
      <div className="main-container">
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
          {mockNotesList.map((noteItem: NoteInterface, index) => {
            return <Note note={noteItem} key={noteItem.id} isPublic={isPublic}></Note>;
          })}
          {deleteModalVIsibility ? <DeleteModal /> : ''}
        </div>
      </div>
      {noteId ? <Outlet /> : ''}
    </div>
  );
};
