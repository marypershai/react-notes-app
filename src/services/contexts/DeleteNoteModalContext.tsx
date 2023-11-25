import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';

export type DeleteNoteModalContextType = {
  modalVisibility: boolean;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DeleteNoteModalContext = createContext<DeleteNoteModalContextType>(null!);

export function DeleteNoteModalContextProvider({children}: PropsWithChildren) {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      modalVisibility,
      setModalVisibility,
    }),
    [modalVisibility]
  );

  return (
    <DeleteNoteModalContext.Provider value={value}>{children}</DeleteNoteModalContext.Provider>
  );
}
