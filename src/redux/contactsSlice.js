import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      const contact = { ...action.payload, createdAt: new Date().toISOString() };
      state.push(contact);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;