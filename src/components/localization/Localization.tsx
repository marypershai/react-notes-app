import React, {useContext, useState} from 'react';
import {LocalizationContext} from '../../services/contexts/LocalizationContext';
import {locals} from '../../services/localization/localization';
import './Localization.css';

export const Localization = () => {
  const {language, setLanguage} = useContext(LocalizationContext);
  const [localState, setLocalState] = useState('en');

  const handleChangeLang = event => {
    const element = event.target as HTMLSelectElement;
    const newLang: string = element.value;
    if (!newLang) return;
    setLocalState(newLang);
    setLanguage(locals[newLang]);
  };

  return (
    <select value={localState} onChange={handleChangeLang} className="localization-wrap">
      <option value={'en'}>EN</option>
      <option value={'ru'}>RU</option>
    </select>
  );
};
