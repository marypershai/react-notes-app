import {NotesList} from '../../components/noteList/NoteList';
import {useAppDispatch, useAppSelector} from '../../services/hooks/redux';
import {useEffect} from 'react';
import {fetchPrivateNotes} from '../../services/store/reducers/ActionCreator';
import {selectToken} from '../../services/store/store';

export const PrivateNotesListPage = () => {
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(selectToken);

  useEffect(() => {
    dispatch(fetchPrivateNotes(token));
  }, [token, dispatch]);

  return <NotesList isPublic={false} />;
};
