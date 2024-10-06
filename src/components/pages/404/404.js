import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import { Link } from 'react-router-dom';

import './404.scss';

const Page404 = () => {
   return (
      <>
         <div className="container">
            <AppNavigation />
            <div className="error">
               <h1 className="error__header">404</h1>
               <p className="error__text">Oops! The page you're looking for doesn't exist.</p>
               <Link className="error__link" to="/">
                  Back to Home
               </Link>
            </div>
         </div>
         <AppFooter />
      </>
   );
};

export default Page404;
