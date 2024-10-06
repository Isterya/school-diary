import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import './newNotePage.scss';

const NewNotePage = () => {
   return (
      <>
         <div className="container">
            <AppNavigation />
            <section className="new-note"></section>
         </div>
         <AppFooter />
      </>
   );
};

export default NewNotePage;
