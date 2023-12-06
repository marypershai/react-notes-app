import {NotesList} from '../../components/noteList/NoteList';
import {useEffect} from 'react';
import {fetchPublicNotes} from '../../services/store/reducers/ActionCreator';
import {useAppDispatch, useAppSelector} from '../../services/hooks/redux';

export const PublicNotesListPage = () => {
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchPublicNotes(token));
  }, [token, dispatch]);
  return <NotesList isPublic={true} />;
};
