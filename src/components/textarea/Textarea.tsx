import './Textarea.css';
import {useLocalization} from '../../services/hooks/UseLocalization';
import React from 'react';

type TextareaProps = {
  errorState?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = (props: TextareaProps) => {
  const {language: loc} = useLocalization();

  const {errorState, value, onChange} = props;

  return (
    <div className={errorState ? 'error form-field' : 'form-field'}>
      <div className="input-label">{loc.note_text}</div>
      <textarea rows={4} cols={50} value={value} onChange={onChange} />
      {errorState ? <p className="error-text">{loc.error_field}</p> : ''}
    </div>
  );
};
