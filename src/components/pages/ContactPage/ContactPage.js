import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import profileAvatar from '../../../resources/img/profile-avatar.jpg';

import facebookIcon from '../../../resources/icons/social/facebook-icon.svg';
import githubIcon from '../../../resources/icons/social/github-icon.svg';
import instagramIcon from '../../../resources/icons/social/instagram-icon.svg';
import telegramIcon from '../../../resources/icons/social/telegram-icon.svg';

import './contactPage.scss';

const ContactPage = () => {
   return (
      <>
         <div className="container">
            <AppNavigation />
            <section className="contact">
               <div className="contact__wrapper">
                  <div className="contact__author">
                     <img src={profileAvatar} alt="profile-avatar" />
                     <div className="contact__author-descr">
                        <h3>Bohdan Yevsieiev</h3>
                        <p>Strong Junior Developer</p>
                     </div>
                  </div>
                  <p className="contact__descr">
                     Front-end Developer z doświadczeniem w technologiach takich jak React i JavaScript / TypeScript, a
                     także w wielu innych narzędziach niezbędnych do nowoczesnego tworzenia aplikacji webowych.
                     Zapraszam do zapoznania się z moim portfolio, które prezentuje moje umiejętności oraz najnowsze
                     projekty, a także do odwiedzenia mojego profilu na GitHubie.
                  </p>

                  <a
                     className="contact__portfolio"
                     href="https://purrcode.ru/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Odwiedź Moje Portfolio
                  </a>

                  <ul className="contact__links">
                     <li>
                        <a href="https://www.facebook.com/bohdan.one.bro">
                           <img src={facebookIcon} alt="facebook" />
                        </a>
                     </li>
                     <li>
                        <a href="https://github.com/Isterya">
                           <img src={githubIcon} alt="github" />
                        </a>
                     </li>
                     <li>
                        <a href="https://www.instagram.com/dad.isterya?igsh=MTM0ZXJlbHAyeHBoaA==">
                           <img src={instagramIcon} alt="instagram" />
                        </a>
                     </li>
                     <li>
                        <a href="http://t.me/perfectn1ght">
                           <img src={telegramIcon} alt="telegram" />
                        </a>
                     </li>
                  </ul>
               </div>
            </section>
         </div>
         <AppFooter />
      </>
   );
};

export default ContactPage;
