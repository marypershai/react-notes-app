import React, {useState} from 'react';
import {locals} from '../../services/localization/localization';
import './Localization.css';
import {useLocalization} from '../../services/hooks/UseLocalization';

export const Localization = () => {
  const {language, setLanguage} = useLocalization();
  const [localState, setLocalState] = useState('en');

  const handleChangeLang = event => {
    const element = event.target as HTMLSelectElement;
    const newLang: string = element.value;
    if (!newLang) return;
    setLocalState(newLang);
    setLanguage(locals[newLang]);
  };

  return (
    <div className="localization">
      <select value={localState} onChange={handleChangeLang} className="localization-wrap">
        <option value={'en'}>EN</option>
        <option value={'ru'}>RU</option>
      </select>
    </div>
  );
};
