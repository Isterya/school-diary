import mailIcon from '../../resources/icons/mail.svg';
import footerLogo from '../../resources/icons/footer-logo.svg';

import './appFooter.scss';

const AppFooter = () => {
   return (
      <footer className="footer">
         <div className="footer__top">
            <div className="footer__about-us">
               <h3>Informacje</h3>
               <p className="footer__descr">
                  Dziennik ucznia z notatkami na temat „Projektowanie Oprogramowania”. Wykonany z miłością i duszą.
               </p>
               <div className="footer__contact">
                  <p>
                     <span>Email : </span>
                     <a href="mailto:by.connectme@gmail.com">by.connectme@gmail.com</a>
                  </p>
                  <p>
                     <span>Telegram : </span>
                     <a href="http://t.me/perfectn1ght">@perfectn1ght</a>
                  </p>
               </div>
            </div>

            <div className="footer__links">
               <h3>Quick Link</h3>
               <ul>
                  <li>
                     <a href="#">Główna</a>
                  </li>
                  <li>
                     <a href="#">Notatki</a>
                  </li>
                  <li>
                     <a href="#">Nowa notatka</a>
                  </li>
                  <li>
                     <a href="#">Kontakt</a>
                  </li>
               </ul>
            </div>

            <div className="footer__newsletter">
               <h3>Regularny Mailing</h3>
               <p>Otrzymuj artykuły z bloga pocztą e-mail</p>

               <form action="#" method="POST" className="footer__form">
                  <div className="footer__input">
                     <input placeholder="Twój e-mail" required name="email" />
                     <span className="footer__input-icon">
                        <img src={mailIcon} alt="mail-icon" />
                     </span>
                  </div>
                  <button type="submit" className="footer__btn">
                     Subskrybuj
                  </button>
               </form>
            </div>
         </div>

         <div className="footer__bottom">
            <img src={footerLogo} alt="footer-logo" />
         </div>
      </footer>
   );
};

export default AppFooter;
