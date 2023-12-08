import {useSearchParams} from 'react-router-dom';
import {Note} from '../../components/note/Note';
import './DetailsNotePage.css';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../services/hooks/redux';
import {getPrivateNote} from '../../services/store/reducers/ActionCreator';
import {selectToken} from '../../services/store/store';

export const DetailsNotePage = () => {
  const {notes} = useAppSelector(state => state.privateNotes);
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId: string = searchParams.get('noteId')!;
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(selectToken);
  const {note} = useAppSelector(state => state.privateNotes);

  useEffect(() => {
    dispatch(getPrivateNote(token, noteId));
  }, [noteId, token, dispatch]);

  const closeDetails = () => {
    if (!noteId) return;
    setSearchParams(searchParams => {
      searchParams.delete('noteId');
      return searchParams;
    });
  };

  return (
    <div className="details-page">
      <div className="details-page-container">
        <div>
          <a title="Close" className="details-close" onClick={closeDetails}>
            ×
          </a>
        </div>
        <Note note={note} isPublic={false} forDetailsPage={true} />
      </div>
    </div>
  );
};
