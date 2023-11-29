import {Route, Routes} from 'react-router-dom';
import {pages} from './page';
import {ProtectedRoute} from './protectedRouter';

export function Router() {
  return (
    <Routes>
      <Route
        path={pages.homePage.path}
        element={<ProtectedRoute redirectTo="/login">{pages.homePage.element}</ProtectedRoute>}>
        <Route
          path={pages.privateNotesPage.path}
          element={
            <ProtectedRoute redirectTo="/login">{pages.privateNotesPage.element}</ProtectedRoute>
          }>
          <Route
            path={pages.detailsNotePage.path}
            element={
              <ProtectedRoute redirectTo="/login">{pages.detailsNotePage.element}</ProtectedRoute>
            }
          />
        </Route>
        <Route
          path={pages.publicNotesPage.path}
          element={
            <ProtectedRoute redirectTo="/login">{pages.publicNotesPage.element}</ProtectedRoute>
          }
        />
      </Route>
      <Route path={pages.notFoundPage.path} element={pages.notFoundPage.element} />
      <Route path={pages.authPage.path} element={pages.authPage.element}>
        <Route path={pages.loginPage.path} element={pages.loginPage.element} />
        <Route path={pages.changePasswordPage.path} element={pages.changePasswordPage.element} />
      </Route>
    </Routes>
  );
}
