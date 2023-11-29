import App from '../../App';
import {NotFoundPage} from '../../pages/notFoundPage/NotFoundPage';
import {PublicNotesListPage} from '../../pages/publicNotesListPage/PublicNotesListPage';
import {PrivateNotesListPage} from '../../pages/privateNotesListPage/PrivateNotesListPage';
import {DetailsNotePage} from '../../pages/detailsNotePage/DetailsNotePage';
import {AuthorizationPage} from '../../pages/authorizationPage/AuthorizationPage';
import {ChangePasswordPage} from '../../pages/authorizationPage/changePasswordPage/ChangePasswordPage';
import {LoginPage} from '../../pages/authorizationPage/loginPage/LoginPage';

export const pages = {
  authPage: {
    path: '',
    element: <AuthorizationPage />,
  },
  loginPage: {
    path: '/login',
    element: <LoginPage />,
  },
  changePasswordPage: {
    path: '/login/change-password',
    element: <ChangePasswordPage />,
  },
  homePage: {
    path: '/',
    element: <App />,
  },
  publicNotesPage: {
    path: '/public-notes',
    element: <PublicNotesListPage />,
  },
  privateNotesPage: {
    path: '/private-notes',
    element: <PrivateNotesListPage />,
  },
  detailsNotePage: {
    path: '',
    element: <DetailsNotePage />,
  },
  notFoundPage: {
    path: '*',
    element: <NotFoundPage />,
  },
};
