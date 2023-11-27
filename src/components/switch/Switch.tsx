import './Switch.css';
import {useLocalization} from '../../services/hooks/UseLocalization';
import React from 'react';

type SwitchFieldProps = {
  value?: boolean;
  onChange: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

export const Switch = (props: SwitchFieldProps) => {
  const {language: loc} = useLocalization();
  const {value, onChange} = props;

  return (
    <div className="form-field">
      <div className="input-label">{loc.note_isPublic}</div>
      <div className="switcher">
        <input type="checkbox" id="switch" checked={value} onChange={onChange} />
        <label htmlFor="switch" className="green"></label>
      </div>
    </div>
  );
};
