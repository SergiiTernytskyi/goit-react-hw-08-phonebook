import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchAllContacts,
} from '../contacts/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchAllContacts, addContact, deleteContact, editContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchAllContactsFulfieldReducer = (state, action) => {
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const editContactFulfilledReducer = (state, action) => {
  const { id, name, number } = action.payload;
  const index = state.items.findIndex(contact => contact.id === id);
  state.items.splice(index, 1, {
    id,
    name,
    number,
  });
};

const contactsAnyPendingReducer = state => {
  state.isLoading = true;
};

const contactsAnyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsAnyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchAllContacts.fulfilled, fetchAllContactsFulfieldReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(editContact.fulfilled, editContactFulfilledReducer)
      .addMatcher(getActions('pending'), contactsAnyPendingReducer)
      .addMatcher(getActions('rejected'), contactsAnyRejectedReducer)
      .addMatcher(getActions('fulfilled'), contactsAnyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
