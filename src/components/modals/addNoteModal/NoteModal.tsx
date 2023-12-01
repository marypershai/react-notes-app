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
import {EditNoteModalContext} from '../../../services/contexts/EditNoteModalContext';
import {simpleNote} from '../../../services/data/simpleNote';

type NoteModalProps = {
  isEdit?: boolean;
};

export const NoteModal = (props: NoteModalProps) => {
  const {language: loc} = useLocalization();
  const {modalVisibility, setModalVisibility} = useContext(AddNoteModalContext);
  const {modalContent, setModalContent} = useContext(EditNoteModalContext);
  const {isEdit} = props;
  const noteObj = isEdit ? modalContent.note : {...simpleNote};

  const closeModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      if (isEdit) {
        setModalContent(prev => ({
          visibility: !prev.visibility,
          note: prev.note,
        }));
      } else setModalVisibility(() => !modalVisibility);
    }
  };

  const changePublic = () => {
    console.log('change public');
  };

  const handleNoteTitle = () => {
    console.log('handleNoteTitle');
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
              value={noteObj.title}
              onChange={handleNoteTitle}
            />
            <Textarea />
            <FormField
              fieldType={'text'}
              fieldPlaceholder={loc.note_tags}
              label={loc.note_tags}
              value={noteObj.tags.join(', ')}
              onChange={handleNoteTitle}
            />
            <FormField
              fieldType={'color'}
              fieldPlaceholder={loc.note_color}
              label={loc.note_color}
              value={noteObj.color}
              onChange={handleNoteTitle}
            />
            <Switch value={noteObj.isPublic} onChange={changePublic}></Switch>
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
