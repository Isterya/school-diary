import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import './contactPage.scss';

const ContactPage = () => {
   return (
      <>
         <div className="container">
            <AppNavigation />
            <section className="contact"></section>
         </div>
         <AppFooter />
      </>
   );
};

export default ContactPage;
