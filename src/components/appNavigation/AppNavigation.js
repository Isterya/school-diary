import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import SearchPanel from '../searchPanel/SearchPanel';
import logo from '../../resources/icons/logo.svg';
import closeIcon from '../../resources/icons/close.svg'

import './appNavigation.scss';

const AppNavigation = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   useEffect(() => {
      if (isMobileMenuOpen) {
         document.body.classList.add('no-scroll');
      } else {
         document.body.classList.remove('no-scroll')
      }
   }, [isMobileMenuOpen])

   return (
      <header className="menu">
         <div className="menu-logo">
            <Link to="/">
               <img src={logo} alt="logo-icon" />
            </Link>
         </div>

         <div className="hamburger" onClick={toggleMobileMenu}>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
         </div>

         {isMobileMenuOpen && (
            <img
               src={closeIcon}
               alt="close-menu-icon"
               className="close-menu-icon"
               onClick={toggleMobileMenu}
            />
         )}

         <nav className={`menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
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
