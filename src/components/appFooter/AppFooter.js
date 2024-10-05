import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import mailIcon from '../../resources/icons/mail.svg';
import footerLogo from '../../resources/icons/footer-logo.svg';

import './appFooter.scss';

const AppFooter = () => {
   const [email, setEmail] = useState('');
   const [statusMessage, setStatusMessage] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      setStatusMessage('Wysyłka...');

      const templateParams = {
         email: email,
         from_name: 'Dziennik Team',
      };

      emailjs
         .send('service_vm3ywcp', 'template_1k8zhqo', templateParams, 'zlBD2yNWHqskn7PB6')
         .then(() => {
            setStatusMessage('Dziękujemy za subskrypcję! Sprawdź swoją skrzynkę e-mail.');
            setEmail('');
         })
         .catch(() => {
            setStatusMessage('Błąd wysyłania!');
         });
   };

   useEffect(() => {
      if (statusMessage) {
         const timer = setTimeout(() => {
            setStatusMessage('');
         }, 7000);

         return () => clearTimeout(timer);
      }
   }, [statusMessage]);

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

               <form onSubmit={handleSubmit} className="footer__form">
                  <div className="footer__input">
                     <input
                        type="email"
                        placeholder="Twój e-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <span className="footer__input-icon">
                        <img src={mailIcon} alt="mail-icon" />
                     </span>
                  </div>
                  <button type="submit" className="footer__btn">
                     Subskrybuj
                  </button>
               </form>
               {statusMessage && <p className="status-message">{statusMessage}</p>}
            </div>
         </div>

         <div className="footer__bottom">
            <a href="#">
               <img src={footerLogo} alt="footer-logo" />
            </a>
         </div>
      </footer>
   );
};

export default AppFooter;
