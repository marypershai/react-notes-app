import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';
import {locals} from '../localization/localization';
import {Local} from '../interfaces/localization';

export type LocalizationContextType = {
  language: Local;
  setLanguage: React.Dispatch<React.SetStateAction<Local>>;
};

export const LocalizationContext = createContext<LocalizationContextType>(null!);

export function LocalizationContextProvider({children}: PropsWithChildren) {
  const [language, setLanguage] = useState<Local>(locals['en']);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>;
}
