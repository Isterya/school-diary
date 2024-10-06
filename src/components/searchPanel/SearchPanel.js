import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import searchIcon from '../../resources/icons/search.svg';

import './searchPanel.scss';

const SearchPanel = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const notes = useSelector((state) => state.notes.notes);

   const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

   return (
      <div className="menu-search">
         <div className="menu-search__input">
            <input
               type="text"
               placeholder="Wyszukiwanie"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="menu-search__icon">
               <img src={searchIcon} alt="search-icon" />
            </span>
         </div>

         {searchTerm && (
            <div className="menu-search__results">
               {filteredNotes.length > 0 ? (
                  <ul>
                     {filteredNotes.map((note) => (
                        <li key={note.id}>
                           <Link to={`/notes/${note.id}`}>{note.title}</Link>
                        </li>
                     ))}
                  </ul>
               ) : (
                  <p className="menu-search__empty">Nie znaleziono żadnych wyników.</p>
               )}
            </div>
         )}
      </div>
   );
};

export default SearchPanel;
