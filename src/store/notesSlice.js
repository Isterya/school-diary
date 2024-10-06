import { createSlice } from '@reduxjs/toolkit';

const loadNotesFromLocalStorage = () => {
   try {
      const savedNotes = localStorage.getItem('notes');
      return savedNotes ? JSON.parse(savedNotes) : [];
   } catch (err) {
      return [];
   }
};

const initialState = {
   notes: loadNotesFromLocalStorage(),
};

const notesSlice = createSlice({
   name: 'notes',
   initialState,
   reducers: {
      addNote: (state, action) => {
         state.notes.push(action.payload);
         localStorage.setItem('notes', JSON.stringify(state.notes));
      },
   },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
