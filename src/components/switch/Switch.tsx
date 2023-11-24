import './Switch.css';
import {useLocalization} from '../../services/hooks/UseLocalization';

export const Switch = () => {
  const {language: loc} = useLocalization();

  return (
    <div className="form-field">
      <div className="input-label">{loc.note_isPublic}</div>
      <div className="switcher">
        <input type="checkbox" id="switch" />
        <label htmlFor="switch" className="green"></label>
      </div>
    </div>
  );
};
