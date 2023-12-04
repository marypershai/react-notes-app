import {useLocalization} from '../../../services/hooks/UseLocalization';
import {createPortal} from 'react-dom';
import {FormField} from '../../formField/FormField';
import './NoteModal.css';
import {Textarea} from '../../textarea/Textarea';
import React, {useContext, useId, useState} from 'react';
import {AddNoteModalContext} from '../../../services/contexts/AddNoteModalContext';
import {Button} from '../../button/Button';
import {LinkButton} from '../../linkButton/LinkButton';
import {Switch} from '../../switch/Switch';
import {EditNoteModalContext} from '../../../services/contexts/EditNoteModalContext';
import {simpleNote} from '../../../services/data/simpleNote';
import {useAppDispatch, useAppSelector} from '../../../services/hooks/redux';
import {privateNotesSlice} from '../../../services/store/reducers/PrivateNotesSlice';

type NoteModalProps = {
  isEdit?: boolean;
};

export const NoteModal = (props: NoteModalProps) => {
  const {language: loc} = useLocalization();
  const {modalVisibility, setModalVisibility} = useContext(AddNoteModalContext);
  const {modalContent, setModalContent} = useContext(EditNoteModalContext);
  const {isEdit} = props;
  const noteObj = isEdit ? modalContent.note : {...simpleNote};
  const [noteTitle, setNoteTitle] = useState(noteObj.title);
  const [noteText, setNoteText] = useState(noteObj.text);
  const [noteTags, setNoteTags] = useState(noteObj.tags);
  const [noteColor, setNoteColor] = useState(noteObj.color);
  const [noteIsPublic, setNoteIsPublic] = useState(noteObj.isPublic);
  const noteId = useId();
  const dispatch = useAppDispatch();

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
    setNoteIsPublic(!noteIsPublic);
  };

  const handleNoteTitle = event => {
    setNoteTitle(event.target.value);
  };

  const handleNoteText = event => {
    setNoteText(event.target.value);
  };

  const handleNoteTags = event => {
    const tagsStr: string = event.target.value;
    const tagsArr: string[] = tagsStr.split(' ');
    setNoteTags(tagsArr);
  };

  const handleNoteColor = event => {
    setNoteColor(event.target.value);
  };

  const saveNote = event => {
    const note = {
      id: noteId,
      isPublic: noteIsPublic,
      owner: 'No owner',
      tags: noteTags,
      text: noteText,
      title: noteTitle,
      color: noteColor,
    };
    if (!isEdit) {
      dispatch(privateNotesSlice.actions.addNewNote(note));
    } else {
      console.log('edit');
    }
    closeModal(event);
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
              value={noteTitle}
              onChange={handleNoteTitle}
            />
            <Textarea value={noteText} onChange={handleNoteText} />
            <FormField
              fieldType={'text'}
              fieldPlaceholder={loc.note_tags}
              label={loc.note_tags}
              value={noteTags.join(' ')}
              onChange={handleNoteTags}
            />
            <FormField
              fieldType={'color'}
              fieldPlaceholder={loc.note_color}
              label={loc.note_color}
              value={noteColor}
              onChange={handleNoteColor}
            />

            <Switch value={noteIsPublic} onChange={changePublic}></Switch>
          </div>

          <div className="modal-buttons">
            <Button text={loc.save} onClick={saveNote} />
            <LinkButton text={loc.cancel} onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
