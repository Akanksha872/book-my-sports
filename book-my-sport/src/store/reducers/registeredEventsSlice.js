import { createSlice } from '@reduxjs/toolkit';

const registeredEventsSlice = createSlice({
  name: 'registeredEvents',
  initialState: { events: [], eventIds: [] },
  reducers: {
    setRegisteredEvents: (state, action) => {
      state.events = action.payload; // Store the array of registered events
      state.eventIds = action.payload.map((event) => event.id); // Extract and store only the IDs
    },
  },
});

export const { setRegisteredEvents } = registeredEventsSlice.actions;

export default registeredEventsSlice.reducer;
