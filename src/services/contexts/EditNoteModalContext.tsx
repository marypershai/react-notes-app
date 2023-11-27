import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';
import {NoteInterface} from '../interfaces/note';
import {simpleNote} from '../data/simpleNote';

type EditNoteContentType = {
  visibility: boolean;
  note: NoteInterface;
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
