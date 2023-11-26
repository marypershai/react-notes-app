import {NavLink} from 'react-router-dom';
import './Menu.css';
import {useLocalization} from '../../services/hooks/UseLocalization';

export const Menu = () => {
  const {language: loc} = useLocalization();
  return (
    <nav>
      <ul>
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
    </nav>
  );
};
