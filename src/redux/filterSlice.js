import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(_, action) {
      return action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;