import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';
import {NoteInterface} from '../interfaces/note';
import {mockNotes} from '../data/notes';

export type NoteListContextType = {
  noteList: NoteInterface[];
  // setNoteList: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
};

export const NoteListContext = createContext<NoteListContextType>(null!);

export function NoteListContextProvider({children}: PropsWithChildren) {
  const [noteList, setNoteList] = useState<NoteInterface[]>([]);

  const value = useMemo(
    () => ({
      noteList,
      // setNoteList,
    }),
    [noteList]
  );

  return (
    <NoteListContextProvider.Provider value={value}>{children}</NoteListContextProvider.Provider>
  );
}
