import {Button} from '../../components/button/Button';
import {useLocalization} from '../../services/hooks/UseLocalization';
import './Note.css';
import {NoteInerface} from '../../services/interfaces/note';

type NoteProps = {
  note: NoteInerface;
  isPublic: boolean;
};

export const Note = (props: NoteProps) => {
  const {language: loc} = useLocalization();
  const {note, isPublic} = props;

  const deleteNote = () => {
    console.log('Delete Note');
  };

  const editNote = () => {
    console.log('Edit Note');
  };
  console.log('isPublic', isPublic);
  return (
    <div className="note">
      <div>
        <div>{note.title}</div>
        <div>icon</div>
      </div>
      <div>{note.text}</div>
      <div>{note.tags}</div>
      {isPublic ? (
        ''
      ) : (
        <div className="note-buttons">
          <Button text={loc.delete} onClick={deleteNote}></Button>
          <Button text={loc.edit} onClick={editNote}></Button>
        </div>
      )}
    </div>
  );
};
