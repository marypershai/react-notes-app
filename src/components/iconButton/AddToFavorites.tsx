import React from 'react';
import './AddToFavorites.css';

export const AddToFavorites = props => {
  const {isFavorite, onChange} = props;

  return (
    <div className="checkbox">
      <label className="fancy-checkbox">
        <input id="c1" type="checkbox" checked={isFavorite} onChange={onChange} />
        <span></span>
      </label>
    </div>
  );
};
