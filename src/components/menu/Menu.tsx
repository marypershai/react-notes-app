import {NavLink} from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/private-notes" className={({isActive}) => (isActive ? 'active' : '')}>
            Private notes
          </NavLink>
        </li>
        <li>
          <NavLink to="/public-notes" className={({isActive}) => (isActive ? 'active' : '')}>
            Public notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
