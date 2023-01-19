import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

const logOutFulfilledReducer = state => {
  return (state = '');
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
  extraReducers: builder =>
    builder.addCase(logOut.fulfilled, logOutFulfilledReducer),
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
