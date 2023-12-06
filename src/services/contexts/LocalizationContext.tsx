import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';
import {locals} from '../localization/localization';
import {ILocal} from '../interfaces/ILocal';

export type LocalizationContextType = {
  language: ILocal;
  setLanguage: React.Dispatch<React.SetStateAction<ILocal>>;
};

export const LocalizationContext = createContext<LocalizationContextType>(null!);

export function LocalizationContextProvider({children}: PropsWithChildren) {
  const [language, setLanguage] = useState<ILocal>(locals['en']);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>;
}
