import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCamperById,
  fetchCampers,
} from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    camperById: null,
    error: null,
    status: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchCamperById.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchCamperById.fulfilled,
        (state, action) => {
          state.status = 'succes';
          state.camperById = action.payload;
        }
      )
      .addCase(
        fetchCamperById.rejected,
        (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        }
      );
  },
});

export default campersSlice.reducer;
