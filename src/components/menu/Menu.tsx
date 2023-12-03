import {NavLink, useNavigate} from 'react-router-dom';
import './Menu.css';
import {useLocalization} from '../../services/hooks/UseLocalization';
import {LinkButton} from '../linkButton/LinkButton';
import {useAppDispatch} from '../../services/hooks/redux';
import {authSlice} from '../../services/store/reducers/AuthSlice';

export const Menu = () => {
  const {language: loc} = useLocalization();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(authSlice.actions.authLogout());
    localStorage.removeItem('authToken');
    navigate('/login', {replace: true});
  };

  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <NavLink to="/private-notes" className={({isActive}) => (isActive ? 'active' : '')}>
            {loc.private_notes_title}
          </NavLink>
        </li>
        <li>
          <NavLink to="/public-notes" className={({isActive}) => (isActive ? 'active' : '')}>
            {loc.public_notes_title}
          </NavLink>
        </li>
      </ul>

      <LinkButton text={loc.logout} onClick={logout} className={'logout'} />
    </nav>
  );
};
