import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './reducers/eventsSlice';
import registeredEventsReducer from './reducers/registeredEventsSlice';
import userEventsReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    registeredEvents: registeredEventsReducer,
    user: userEventsReducer
  },
});

export default store;
