import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperation';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [addContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.items.push(payload);
      state.contacts.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [deleteContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== payload
      );
      state.contacts.isLoading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;