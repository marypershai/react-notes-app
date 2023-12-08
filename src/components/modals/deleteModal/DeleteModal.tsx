import {useLocalization} from '../../../services/hooks/UseLocalization';
import {createPortal} from 'react-dom';
import './DeleteModal.css';
import React, {useContext} from 'react';
import {Button} from '../../button/Button';
import {LinkButton} from '../../linkButton/LinkButton';
import {DeleteNoteModalContext} from '../../../services/contexts/DeleteNoteModalContext';
import {useAppDispatch, useAppSelector} from '../../../services/hooks/redux';
import {deletePrivateNote, fetchPrivateNotes} from '../../../services/store/reducers/ActionCreator';
import {selectToken} from '../../../services/store/store';

export const DeleteModal = () => {
  const {language: loc} = useLocalization();
  const {modalContent, setModalContent} = useContext(DeleteNoteModalContext);
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(selectToken);

  const closeModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setModalContent(prev => ({
        visibility: !prev.visibility,
        note: prev.note,
      }));
    }
  };

  const deleteNote = async (event: React.MouseEvent) => {
    dispatch(deletePrivateNote(token, modalContent.note.id!));
    setModalContent(prev => ({
      visibility: !prev.visibility,
      note: prev.note,
    }));
  };
  return createPortal(
    <div className="modal" onClick={closeModal}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{loc.delete_modal_title}</h3>
            <a title="Close" className="close" onClick={closeModal}>
              ×
            </a>
          </div>
          <div className="modal-body">
            <p>{loc.delete_notification}</p>
          </div>

          <div className="modal-buttons">
            <Button text={loc.delete} onClick={deleteNote} />
            <LinkButton text={loc.cancel} onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
