import {useLocalization} from '../../services/hooks/UseLocalization';
import {useLocation, useSearchParams} from 'react-router-dom';
import {Note} from '../../components/note/Note';
import './DetailsNotePage.css';

import {mockNotes} from '../../services/data/notes';
import React from 'react';
import {NoteInterface} from '../../services/interfaces/note';

export const DetailsNotePage = props => {
  const {language: loc} = useLocalization();
  const mockData = [...mockNotes];
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId: string = searchParams.get('noteId');

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
        <Note
          note={mockData.find((note: NoteInterface) => note.id === +noteId)}
          isPublic={false}
          forDetailsPage={true}
        />
      </div>
    </div>
  );
};
