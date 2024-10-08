import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';

import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import homeImg from '../../../resources/img/home-img.jpg';
import profileAvatar from '../../../resources/img/profile-avatar.jpg';

import planningIcon from '../../../resources/icons/subject/planning.svg';
import engineeringIcon from '../../../resources/icons/subject/engineering.svg';
import programmingIcon from '../../../resources/icons/subject/programming.svg';
import managementIcon from '../../../resources/icons/subject/management.svg';
import teamworkIcon from '../../../resources/icons/subject/teamwork.svg';
import testingIcon from '../../../resources/icons/subject/testing.svg';
import deploymentIcon from '../../../resources/icons/subject/deployment.svg';

import './homePage.scss';

const renderCards = () => {
   return (
      <>
         <li className="info__card">
            <img src={planningIcon} alt="planning" />
            <h3>Planowanie i analiza wymagań projektowych</h3>
         </li>
         <li className="info__card">
            <img src={engineeringIcon} alt="engineering" />
            <h3>Tworzenie architektury oprogramowania</h3>
         </li>
         <li className="info__card">
            <img src={programmingIcon} alt="programming" />
            <h3>Programowanie w różnych językach</h3>
         </li>
         <li className="info__card">
            <img src={managementIcon} alt="management" />
            <h3>Wykorzystanie narzędzi do zarządzania projektami (np. Git, Jira)</h3>
         </li>
         <li className="info__card">
            <img src={teamworkIcon} alt="teamwork" />
            <h3>Pracę zespołową i agile methodologies (np. Scrum)</h3>
         </li>
         <li className="info__card">
            <img src={testingIcon} alt="testing" />
            <h3>Testowanie i debugowanie oprogramowania</h3>
         </li>
         <li className="info__card">
            <img src={deploymentIcon} alt="deployment" />
            <h3>Zarządzanie wersjami i wdrażanie aplikacji</h3>
         </li>
      </>
   );
};

const HomePage = () => {
   const formattedDate = format(new Date(), 'MMMM d, yyyy');

   return (
      <>
      <Helmet>
            <meta name="description" content="Dziennik Website" />
            <title>Dziennik | Home</title>
         </Helmet>
         
         <div className="container">
            <AppNavigation />
            <section className="promo">
               <div className="promo__img">
                  <img src={homeImg} alt="Technology impact on workplace" />
               </div>
               <div className="promo__content">
                  <div className="promo__tag">Projektowanie Oprogramowania</div>
                  <h1 className="promo__title">Dziennik Ucznia 2E</h1>
                  <div className="promo__meta">
                     <img className="promo-avatar" src={profileAvatar} alt="Author" />
                     <span className="promo__author">Bohdan Yevsieiev</span>
                     <span className="promo__date">{formattedDate}</span>
                  </div>
               </div>
            </section>

            <section className="info">
               <h2 className="info__header">Czym jest Projektowanie Oprogramowania?</h2>
               <p className="info__descr">
                  Przedmiot ten koncentruje się na nauce tworzenia oraz rozwoju aplikacji i systemów informatycznych.
                  Uczniowie zgłębiają kluczowe zasady, techniki oraz narzędzia wykorzystywane w inżynierii
                  oprogramowania. Program obejmuje szeroki zakres tematów, takich jak:
               </p>
               <div className="info__list-wrapper">
                  <ul className="info__list">
                     {/* First set of cards */}
                     {renderCards()}
                  </ul>
                  <ul className="info__list">
                     {/* Second set of cards */}
                     {renderCards()}
                  </ul>
               </div>
               <p className="info__summary">
                  Kurs rozwija praktyczne umiejętności, w tym rozwiązywanie problemów, myślenie krytyczne, współpracę w
                  zespole oraz organizację procesu tworzenia oprogramowania. Wszystko to przygotowuje uczestników do
                  przyszłej kariery w branży IT. Na tej stronie będę gromadził notatki z tego kursu, stale poszerzając
                  swoją wiedzę i pracując nad różnorodnymi projektami, co pozwoli mi zdobyć cenne, praktyczne
                  doświadczenie.
               </p>
            </section>
         </div>
         <AppFooter />
      </>
   );
};

export default HomePage;
