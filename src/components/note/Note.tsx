import {Button} from '../../components/button/Button';
import {useLocalization} from '../../services/hooks/UseLocalization';
import './Note.css';
import {NoteInerface} from '../../services/interfaces/note';

type NoteProps = {
  note: NoteInerface;
};

export const Note = (props: NoteProps) => {
  const {isPublic, owner, tags, text, title, color} = props;

  return (
    <div className="note">
      <div>
        <div>title</div>
        <div>icon</div>
      </div>
      <div>text</div>
      <div>tags</div>
    </div>
  );
};
