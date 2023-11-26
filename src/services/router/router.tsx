import {createBrowserRouter, redirect, Route, Routes} from 'react-router-dom';
import {NotFoundPage} from '../../pages/notFoundPage/NotFoundPage';
import {PublicNotesListPage} from '../../pages/publicNotesListPage/PublicNotesListPage';
import {PrivateNotesListPage} from '../../pages/privateNotesListPage/PrivateNotesListPage';
import {AuthorizationPage} from '../../pages/authorizationPage/AuthorizationPage';
import App from '../../App';
import {DetailsNotePage} from '../../pages/detailsNotePage/DetailsNotePage';
import {ChangePasswordPage} from '../../pages/authorizationPage/changePasswordPage/ChangePasswordPage';
import {LoginPage} from '../../pages/authorizationPage/loginPage/LoginPage';

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
        children: [
          {
            path: '/public-notes/details/:id',
            element: <DetailsNotePage />,
          },
        ],
      },
      {
        path: '/private-notes',
        element: <PrivateNotesListPage />,
        children: [
          {
            path: '/private-notes/details/:id',
            element: <DetailsNotePage />,
          },
        ],
      },
    ],
  },

  {
    path: '/login',
    element: <AuthorizationPage />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/login/change-password',
        element: <ChangePasswordPage />,
      },
    ],
  },
]);
