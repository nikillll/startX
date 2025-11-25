import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startups: [],
  eirRequests: [],
  grantRequests: [],
  visibleDetails: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setStartups(state, action) {
      state.startups = action.payload;
    },
    setEirRequests(state, action) {
      state.eirRequests = action.payload;
    },
    setGrantRequests(state, action) {
      state.grantRequests = action.payload;
    },
    setVisibleDetails(state, action) {
      state.visibleDetails = action.payload === state.visibleDetails ? null : action.payload;
    },
  },
});

export const {
  setStartups,
  setEirRequests,
  setGrantRequests,
  setVisibleDetails,
} = adminSlice.actions;

export default adminSlice.reducer;