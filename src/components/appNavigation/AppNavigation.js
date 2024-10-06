import { Link, NavLink } from 'react-router-dom';

import SearchPanel from '../searchPanel/SearchPanel';

import logo from '../../resources/icons/logo.svg';

import './appNavigation.scss';

const AppNavigation = () => {
   return (
      <header className="menu">
         <div className="menu-logo">
            <Link to="/">
               <img src={logo} alt="logo-icon" />
            </Link>
         </div>
         <nav className="menu-wrapper">
            <ul className="menu-list">
               <li className="menu__item">
                  <NavLink end style={({ isActive }) => ({ color: isActive ? '#4b6bfb' : 'inherit' })} to="/">
                     Główna
                  </NavLink>
               </li>
               <li className="menu__item">
                  <NavLink style={({ isActive }) => ({ color: isActive ? '#4b6bfb' : 'inherit' })} to="/notes">
                     Notatki
                  </NavLink>
               </li>
               <li className="menu__item">
                  <NavLink style={({ isActive }) => ({ color: isActive ? '#4b6bfb' : 'inherit' })} to="/new-note">
                     Nowa notatka
                  </NavLink>
               </li>
               <li className="menu__item">
                  <NavLink style={({ isActive }) => ({ color: isActive ? '#4b6bfb' : 'inherit' })} to="/contact">
                     Kontakt
                  </NavLink>
               </li>
            </ul>
         </nav>
         <SearchPanel />
      </header>
   );
};

export default AppNavigation;
