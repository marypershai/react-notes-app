import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';

export function ProtectedRoute({children, redirectTo}) {
  const {isAuthenticated} = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
