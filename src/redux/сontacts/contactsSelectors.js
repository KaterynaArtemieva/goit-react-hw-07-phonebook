import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  return state.contacts.contacts.items;
};
export const selectLoading = state => {
  return state.contacts.contacts.isLoading;
};
export const selectError = state => {
  return state.contacts.contacts.error;
};
export const selectFilter = state => {
  return state.filter;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
  }
);
