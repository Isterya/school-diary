import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet-async';

import { addNote } from '../../../store/notesSlice';

import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import defaultImage from '../../../resources/img/post-img.jpg';

import './newNotePage.scss';

const NewNotePage = () => {
   const [formTitle, setFormTitle] = useState('');
   const [formDescription, setFormDescription] = useState('');
   const [postImg, setPostImg] = useState(null);
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState('');

   const dispatch = useDispatch();

   useEffect(() => {
      if (success || error) {
         const timer = setTimeout(() => {
            setSuccess(false);
            setError('');
         }, 10000);

         return () => clearTimeout(timer);
      }
   }, [success, error]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setSuccess(false);
      setError('');

      try {
         const newNote = {
            id: uuidv4(),
            title: formTitle,
            description: formDescription.replace(/\n/g, '<br/>'),
            date: new Date().toISOString(),
            image: postImg || defaultImage,
         };

         dispatch(addNote(newNote));

         setSuccess(true);
         setFormTitle('');
         setFormDescription('');
         setPostImg(null);
      } catch (err) {
         setError('Błąd podczas tworzenia notatki. Spróbuj ponownie.');
      } finally {
         setLoading(false);
      }
   };

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setPostImg(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   return (
      <>
         <Helmet>
            <meta name="description" content="Dziennik Website" />
            <title>Dziennik | Create New Note</title>
         </Helmet>

         <div className="container">
            <AppNavigation />
            <section className="new-note">
               <div className="new-note__wrapper">
                  <h1>Utwórz nową notatkę</h1>

                  {loading && <p className="status loading">Loading...</p>}
                  {success && <p className="status success">Notatka została pomyślnie utworzona!</p>}
                  {error && <p className="status error">{error}</p>}

                  <form onSubmit={handleSubmit}>
                     <label htmlFor="title">Tytuł:</label>
                     <input
                        type="text"
                        id="title"
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        required
                        disabled={loading}
                     />
                     <label htmlFor="description">Treść:</label>
                     <textarea
                        id="description"
                        value={formDescription}
                        onChange={(e) => setFormDescription(e.target.value)}
                        required
                        disabled={loading}
                     ></textarea>

                     <label htmlFor="image" className="image-upload-label">
                        Wybierz obrazek:
                        <input
                           type="file"
                           id="image"
                           accept="image/*"
                           onChange={handleImageChange}
                           className="image-upload-input"
                           disabled={loading}
                        />
                        <span className="image-upload-preview">
                           {postImg ? (
                              <img src={postImg} alt="Selected" className="notes-card__img" />
                           ) : (
                              'Dodaj obrazek'
                           )}
                        </span>
                     </label>

                     <button type="submit" disabled={loading}>
                        {loading ? 'Tworzenie...' : 'Utwórz Notatkę'}
                     </button>
                  </form>
               </div>
            </section>
         </div>
         <AppFooter />
      </>
   );
};

export default NewNotePage;
