import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import './notesPage.scss';

const NotesPage = () => {
   return (
      <>
         <div className="container">
            <AppNavigation />
            <section className="notes"></section>
         </div>
         <AppFooter />
      </>
   );
};

export default NotesPage;
