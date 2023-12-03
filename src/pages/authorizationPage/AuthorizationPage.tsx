import './AuthorizationPage.css';
import {Outlet} from 'react-router-dom';
import {useAppSelector} from '../../services/hooks/redux';
import React from 'react';

export const AuthorizationPage = () => {
  return (
    <div className="authorization">
      <Outlet />
    </div>
  );
};
