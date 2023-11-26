import './AuthorizationPage.css';
import {Outlet} from 'react-router-dom';

export const AuthorizationPage = () => {
  return (
    <div className="authorization">
      <Outlet />
    </div>
  );
};
