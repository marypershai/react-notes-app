import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';
import {INote} from '../interfaces/INote';
import {simpleNote} from '../data/simpleNote';

type EditNoteContentType = {
  visibility: boolean;
  note: INote;
};

export type EditNoteModalContextType = {
  modalContent: EditNoteContentType;
  setModalContent: React.Dispatch<React.SetStateAction<EditNoteContentType>>;
};

export const EditNoteModalContext = createContext<EditNoteModalContextType>(null!);

export function EditNoteModalContextProvider({children}: PropsWithChildren) {
  const [modalContent, setModalContent] = useState<EditNoteContentType>({
    visibility: false,
    note: simpleNote,
  });

  const value = useMemo(
    () => ({
      modalContent,
      setModalContent,
    }),
    [modalContent]
  );

  return <EditNoteModalContext.Provider value={value}>{children}</EditNoteModalContext.Provider>;
}
