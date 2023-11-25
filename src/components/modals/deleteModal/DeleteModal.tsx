import {useLocalization} from '../../../services/hooks/UseLocalization';
import {createPortal} from 'react-dom';
import './DeleteModal.css';
import React, {useContext} from 'react';
import {Button} from '../../button/Button';
import {LinkButton} from '../../linkButton/LinkButton';
import {DeleteNoteModalContext} from '../../../services/contexts/DeleteNoteModalContext';

type DeleteModalProps = {
  note_id: number;
};
export const DeleteModal = (props: DeleteModalProps) => {
  const {language: loc} = useLocalization();
  const {modalVisibility, setModalVisibility} = useContext(DeleteNoteModalContext);

  const closeModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setModalVisibility(() => !modalVisibility);
    }
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
            <Button text={loc.delete} onClick={closeModal} />
            <LinkButton text={loc.cancel} onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
