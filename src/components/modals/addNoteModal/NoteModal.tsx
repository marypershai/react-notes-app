import {useLocalization} from '../../../services/hooks/UseLocalization';
import {createPortal} from 'react-dom';
import {FormField} from '../../formField/FormField';
import './NoteModal.css';
import {Textarea} from '../../textarea/Textarea';
import React, {useContext} from 'react';
import {AddNoteModalContext} from '../../../services/contexts/AddNoteModalContext';
import {Button} from '../../button/Button';
import {LinkButton} from '../../linkButton/LinkButton';
import {Switch} from '../../switch/Switch';
import {NoteInterface} from '../../../services/interfaces/note';
import {EditNoteModalContext} from '../../../services/contexts/EditNoteModalContext';

type NoteModalProps = {
  isEdit?: boolean;
  note?: NoteInterface;
};

export const NoteModal = props => {
  const {language: loc} = useLocalization();
  const {modalVisibility, setModalVisibility} = useContext(AddNoteModalContext);
  const {modalContent, setModalContent} = useContext(EditNoteModalContext);
  const {isEdit, note} = props;

  const closeModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      if (isEdit) {
        setModalContent(prev => {
          prev.visibility = !modalContent.visibility;
          return prev;
        });
      } else setModalVisibility(() => !modalVisibility);
    }
  };
  return createPortal(
    <div className="modal" onClick={closeModal}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{isEdit ? loc.edit_note_title : loc.new_note_title}</h3>
            <a title="Close" className="close" onClick={closeModal}>
              ×
            </a>
          </div>
          <div className="modal-body">
            <FormField
              fieldType={'text'}
              fieldPlaceholder={loc.note_title}
              label={loc.note_title}
            />
            <Textarea />
            <FormField
              fieldType={'color'}
              fieldPlaceholder={loc.note_color}
              label={loc.note_color}
            />
            <Switch></Switch>
          </div>

          <div className="modal-buttons">
            <Button text={loc.save} onClick={closeModal} />
            <LinkButton text={loc.cancel} onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
