import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../hooks/redux';

export function ProtectedRoute({children, redirectTo}) {
  const {isAuth} = useAppSelector(state => state.auth);

  return isAuth ? children : <Navigate to={redirectTo} />;
}
