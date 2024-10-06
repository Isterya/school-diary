import { Link, NavLink } from 'react-router-dom';

import logo from '../../resources/icons/logo.svg';
import searchIcon from '../../resources/icons/search.svg';

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
         <div className="menu-search">
            <div className="menu-search__input">
               <input type="text" placeholder="Wyszukiwanie" />
               <span className="menu-search__icon">
                  <img src={searchIcon} alt="search-icon" />
               </span>
            </div>
         </div>
      </header>
   );
};

export default AppNavigation;
