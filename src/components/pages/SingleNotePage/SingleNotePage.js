import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import profileAvatar from '../../../resources/img/profile-avatar.jpg';

import './singleNotePage.scss';

const SingleNotePage = () => {
   const { id } = useParams();
   const notes = useSelector((state) => state.notes.notes);
   const note = notes.find((note) => note.id === id);

   const formattedDate = note ? format(new Date(note.date), 'MMMM d, yyyy') : '';

   return (
      <>
         <div className="container">
            <AppNavigation />
            <section className="single-note">
               {note ? (
                  <div className="single-note__wrapper">
                     <div className="single-note__tag">Projektowanie Oprogramowania</div>
                     <h1 className="single-note__title">{note.title}</h1>
                     <div className="single-note__author">
                        <img className="single-note__author-avatar" src={profileAvatar} alt="author" />
                        <div className="single-note__author-name">Bohdan Yevsieiev</div>
                        <div className="single-note__author-date">{formattedDate}</div>
                     </div>
                     <img src={note.image} alt="note" className="single-note__img" />
                     <div className="single-note__text" dangerouslySetInnerHTML={{ __html: note.description }} />
                  </div>
               ) : (
                  <p className="single-note__empty">Notatka nie została odnaleziona.</p>
               )}
            </section>
         </div>
         <AppFooter />
      </>
   );
};

export default SingleNotePage;
