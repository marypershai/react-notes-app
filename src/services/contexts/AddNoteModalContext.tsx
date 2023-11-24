import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';

export type AddNoteModalContextType = {
  modalVisibility: boolean;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddNoteModalContext = createContext<AddNoteModalContextType>(null!);

export function AddNoteModalContextProvider({children}: PropsWithChildren) {
  const [modalVisibility, setModalVisibility] = useState<boolean>(true);

  const value = useMemo(
    () => ({
      modalVisibility,
      setModalVisibility,
    }),
    [modalVisibility]
  );

  return <AddNoteModalContext.Provider value={value}>{children}</AddNoteModalContext.Provider>;
}
