import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';
import {NoteInterface} from '../interfaces/note';

type EditNoteContentType = {
  visibility: boolean;
  note: NoteInterface;
};

export type EditNoteModalContextType = {
  modalContent: EditNoteContentType;
  setModalContent: React.Dispatch<React.SetStateAction<EditNoteContentType>>;
};

const simpleNote: NoteInterface = {
  id: 0,
  isPublic: false,
  owner: 'No owner',
  tags: [],
  text: 'No text',
  title: 'No title',
  color: '#fff',
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
