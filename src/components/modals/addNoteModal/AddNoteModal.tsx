import {useLocalization} from '../../../services/hooks/UseLocalization';
import {createPortal} from 'react-dom';
import {FormField} from '../../formField/FormField';
import './AddNoteModal.css';
import {Textarea} from '../../textarea/Textarea';
import React, {useContext} from 'react';
import {AddNoteModalContext} from '../../../services/contexts/AddNoteModalContext';
import {Button} from '../../button/Button';
import {LinkButton} from '../../linkButton/LinkButton';
import {Switch} from '../../switch/Switch';

export const AddNoteModal = props => {
  const {language: loc} = useLocalization();
  const {modalVisibility, setModalVisibility} = useContext(AddNoteModalContext);

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
            <h3 className="modal-title">{loc.new_note_title}</h3>
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
