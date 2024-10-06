import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import './notesPage.scss';

const NotesPage = () => {
   const notes = useSelector((state) => state.notes.notes);

   return (
      <>
         <div className="container">
            <AppNavigation />
            <section className="notes">
               <div className="notes-page">
                  <h1>Latest Post</h1>
                  <div className="notes-container">
                     {Array.isArray(notes) && notes.length > 0 ? (
                        notes.map((note) => {
                           const formattedDate = format(new Date(note.date), 'MMMM d, yyyy');

                           return (
                              <div className="note-card" key={note.id}>
                                 <h2>{note.title}</h2>
                                 <p>{note.description.slice(0, 100)}...</p>
                                 <p className="note-date">Created on: {formattedDate}</p>
                                 <Link to={`/notes/${note.id}`}>Читать далее</Link>
                              </div>
                           );
                        })
                     ) : (
                        <p>Нет доступных заметок.</p>
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
