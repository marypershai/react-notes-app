import React from 'react';
import './AddToFavorites.css';

export const AddToFavorites = () => {
  return (
    <div className="checkbox">
      <label className="fancy-checkbox">
        <input id="c1" type="checkbox" />
        <span></span>
      </label>
    </div>
  );
};
