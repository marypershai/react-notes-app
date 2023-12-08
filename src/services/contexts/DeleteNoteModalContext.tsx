import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';
import {INote} from '../interfaces/INote';
import {simpleNote} from '../data/simpleNote';

type DeleteNoteContentType = {
  visibility: boolean;
  note: INote;
};

export type DeleteNoteModalContextType = {
  modalContent: DeleteNoteContentType;
  setModalContent: React.Dispatch<React.SetStateAction<DeleteNoteContentType>>;
};

export const DeleteNoteModalContext = createContext<DeleteNoteModalContextType>(null!);

export function DeleteNoteModalContextProvider({children}: PropsWithChildren) {
  const [modalContent, setModalContent] = useState<DeleteNoteContentType>({
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

  return (
    <DeleteNoteModalContext.Provider value={value}>{children}</DeleteNoteModalContext.Provider>
  );
}
