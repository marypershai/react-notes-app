import {NavLink, useNavigate} from 'react-router-dom';
import './Menu.css';
import {useLocalization} from '../../services/hooks/UseLocalization';
import {LinkButton} from '../linkButton/LinkButton';

export const Menu = () => {
  const {language: loc} = useLocalization();
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
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
