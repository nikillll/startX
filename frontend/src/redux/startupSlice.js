import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  startupData: null,
  eirData: [],
  grantSchemeData: [],
  messages: [],
};

const startupSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setStartupData(state, action) {
      state.startupData = action.payload;
    },
    setEirData(state, action) {
      state.eirData = action.payload;
    },
    setGrantSchemeData(state, action) {
      state.grantSchemeData = action.payload;
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
  },
});

export const {
  setUserData,
  setStartupData,
  setEirData,
  setGrantSchemeData,
  setMessages,
} = startupSlice.actions;

export default startupSlice.reducer;
