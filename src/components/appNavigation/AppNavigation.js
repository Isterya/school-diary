import logo from '../../resources/icons/logo.svg';
import searchIcon from '../../resources/icons/search.svg';

import './appNavigation.scss';

const AppNavigation = () => {
   return (
      <header className="menu">
         <div className="menu-logo">
            <a href="#">
               <img src={logo} alt="logo-icon" />
            </a>
         </div>
         <div className="menu-wrapper">
            <ul className="menu-list">
               <li className="menu__item">
                  <a href="#">Główna</a>
               </li>
               <li className="menu__item">
                  <a href="#">Notatki</a>
               </li>
               <li className="menu__item">
                  <a href="#">Nowa notatka</a>
               </li>
               <li className="menu__item">
                  <a href="#">Kontakt</a>
               </li>
            </ul>
         </div>
         <div className="menu-search">
            <div className="menu-search__input">
               <input type="text" placeholder="Search" />
               <span className="menu-search__icon">
                  <img src={searchIcon} alt="search-icon" />
               </span>
            </div>
         </div>
      </header>
   );
};

export default AppNavigation;
