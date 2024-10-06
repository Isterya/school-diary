import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';

import { deleteNote } from '../../../store/notesSlice';

import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import profileAvatar from '../../../resources/img/profile-avatar.jpg';
import deleteIcon from '../../../resources/icons/delete.svg';

import './notesPage.scss';

const NotesPage = () => {
   const notes = useSelector((state) => state.notes.notes);
   const dispatch = useDispatch();

   useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
   }, [notes]);

   const handleDelete = (id) => {
      dispatch(deleteNote(id));
   };

   return (
      <>
         <Helmet>
            <meta name="description" content="Dziennik Website" />
            <title>Dziennik | Notes</title>
         </Helmet>

         <div className="container">
            <AppNavigation />
            <section className="notes">
               <div className="notes-page">
                  <h1>Najnowsze notatki</h1>
                  <div className="notes-container">
                     {Array.isArray(notes) && notes.length > 0 ? (
                        notes.map((note) => {
                           const formattedDate = format(new Date(note.date), 'MMMM d, yyyy');

                           return (
                              <div className="notes-card" key={note.id}>
                                 <Link to={`/notes/${note.id}`} className="notes-card__link">
                                    <img src={note.image} alt="post" className="notes-card__img" />
                                    <div className="notes-card__content">
                                       <span className="notes-card__category">Projektowanie Oprogramowania</span>
                                       <h2 className="notes-card__title">
                                          {note.title.length > 50 ? `${note.title.slice(0, 50)}...` : note.title}
                                       </h2>
                                       <div className="notes-card__footer">
                                          <img src={profileAvatar} alt="author" className="notes-card__author-avatar" />
                                          <span className="notes-card__author-name">Bohdan Yevsieiev</span>
                                          <span className="notes-card__date">{formattedDate}</span>
                                       </div>
                                    </div>
                                 </Link>
                                 <button className="notes-card__delete-btn" onClick={() => handleDelete(note.id)}>
                                    <img src={deleteIcon} alt="delete-btn" />
                                 </button>
                              </div>
                           );
                        })
                     ) : (
                        <p className="notes-empty">Nie ma dostępnych notatek.</p>
                     )}
                  </div>
               </div>
            </section>
         </div>
         <AppFooter />
      </>
   );
};

export default NotesPage;
