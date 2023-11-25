import './Textarea.css';
import {useLocalization} from '../../services/hooks/UseLocalization';

type TextareaProps = {
  errorState?: boolean;
};

export const Textarea = (props: TextareaProps) => {
  const {language: loc} = useLocalization();

  const {errorState} = props;

  return (
    <div className={errorState ? 'error form-field' : 'form-field'}>
      <div className="input-label">{loc.note_text}</div>
      <textarea rows="4" cols="50" />
      {errorState ? <p className="error-text">{loc.error_field}</p> : ''}
    </div>
  );
};
