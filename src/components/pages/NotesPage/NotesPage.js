import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import './notesPage.scss';

const NotesPage = () => {
   const notes = useSelector((state) => state.notes.notes); // Извлечение массива заметок из объекта

   return (
      <>
         <div className="container">
            <AppNavigation />
            <section className="notes">
               <div className="notes-page">
                  <h1>Список статей</h1>
                  <div className="notes-container">
                     {Array.isArray(notes) && notes.length > 0 ? ( // Проверка, что notes - это массив и не пуст
                        notes.map((note) => (
                           <div className="note-card" key={note.id}>
                              <h2>{note.title}</h2>
                              <p>{note.description.slice(0, 100)}...</p>
                              <Link to={`/notes/${note.id}`}>Читать далее</Link>
                           </div>
                        ))
                     ) : (
                        <p>Нет доступных заметок.</p> // Сообщение, если заметок нет
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
