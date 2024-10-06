import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loader from '../loader/Loader';

const Page404 = lazy(() => import('../pages/404/404'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotesPage = lazy(() => import('../pages/NotesPage/NotesPage'));
const NewNotePage = lazy(() => import('../pages/NewNotePage/NewNotePage'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));
const SingleNotePage = lazy(() => import('../pages/SingleNotePage/SingleNotePage'));

const App = () => {
   return (
      <Router>
         <div className="app">
            <main>
               <Suspense fallback={<Loader />}>
                  <Routes>
                     <Route path="/" element={<HomePage />} />
                     <Route path="/notes" element={<NotesPage />} />
                     <Route path="/new-note" element={<NewNotePage />} />
                     <Route path="/contact" element={<ContactPage />} />
                     <Route path="/notes/:id" element={<SingleNotePage />} />
                     <Route path="*" element={<Page404 />} />
                  </Routes>
               </Suspense>
            </main>
         </div>
      </Router>
   );
};

export default App;
