import homeImg from '../../../resources/img/home-img.jpg';
import profileAvatar from '../../../resources/img/profile-avatar.jpg';

import './homePage.scss';

const HomePage = () => {
   return (
      <section className="promo">
         <div className="promo__img">
            <img src={homeImg} alt="Technology impact on workplace" />
         </div>
         <div className="promo__content">
            <div className="promo__tag">Projektowanie Oprogramowania</div>
            <h1 className="promo__title">Dziennik Ucznia</h1>
            <div className="promo__meta">
               <img className="promo-avatar" src={profileAvatar} alt="Author Image" />
               <span className="promo__author">Bohdan Yevsieiev</span>
               <span className="promo__date">Październik 7, 2024</span>
            </div>
         </div>
      </section>
   );
};

export default HomePage;
