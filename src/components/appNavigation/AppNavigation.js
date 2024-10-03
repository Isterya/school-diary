import './appNavigation.scss';

const AppNavigation = () => {
   return (
      <header className="menu">
         <div className="menu-wrapper">
            <ul className="menu-list">
               <li className="menu__item">
                  <a href="#">Home</a>
               </li>
               <li className="menu__item">
                  <a href="#">Notes</a>
               </li>
               <li className="menu__item">
                  <a href="#">New note</a>
               </li>
               <li className="menu__item">
                  <a href="#">Contact</a>
               </li>
            </ul>
         </div>
      </header>
   );
};

export default AppNavigation;
