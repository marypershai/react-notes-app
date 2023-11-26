import {createBrowserRouter, redirect, Route, Routes} from 'react-router-dom';
import {NotFoundPage} from '../../pages/notFoundPage/NotFoundPage';
import {PublicNotesListPage} from '../../pages/publicNotesListPage/PublicNotesListPage';
import {PrivateNotesListPage} from '../../pages/privateNotesListPage/PrivateNotesListPage';
import {AuthorizationPage} from '../../pages/authorizationPage/AuthorizationPage';
import App from '../../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // loader() {
    //   return redirect('/login');
    // },
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/public-notes',
        element: <PublicNotesListPage />,
      },
      {
        path: '/private-notes',
        element: <PrivateNotesListPage />,
      },
    ],
  },

  {
    path: '/login',
    element: <AuthorizationPage />,
  },
]);
