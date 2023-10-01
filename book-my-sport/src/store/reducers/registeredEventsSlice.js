import { createSlice } from '@reduxjs/toolkit';

const registeredEventsSlice = createSlice({
  name: 'registeredEvents',
  initialState: [],
  reducers: {
    setRegisteredEvents: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRegisteredEvents } = registeredEventsSlice.actions;

export default registeredEventsSlice.reducer;
