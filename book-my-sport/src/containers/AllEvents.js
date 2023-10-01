import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllEventsComponent from '../components/event/AllEvents';
import { getData, postData } from '../services/apiService';
import { setEvents } from '../store/reducers/eventsSlice';
import { setRegisteredEvents } from '../store/reducers/registeredEventsSlice';
import { doesEventConflict } from '../utils/eventUtil';

function AllEvents () {
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const registeredEvents = useSelector((state) => state.registeredEvents.events);
  const registeredEventIds = useSelector((state) => state.registeredEvents.eventIds);
  
  useEffect(() => {
    getAllEvents();
    getAllUserEvents();
  }, [dispatch]);

  const getAllEvents =  async () => {
    setLoading(true);
    try {
      const response = await getData('events');
      if (response.ok) {
        const res = await response.json();
        dispatch(setEvents(res));
        setLoading(false);
        setError(false);
      } else {
        const res = await response.json();
        setErrorMsg(res.message);
        setLoading(false);
        setSnackbarOpen(true);
        setError(true);
      }
    } catch (error) {
      setErrorMsg("Something went wrong");
      setLoading(false);
      setSnackbarOpen(true);
      setError(true);
    }
  }

  const getAllUserEvents = async () => {
    setLoading(true);
    try {
      const userId = localStorage.getItem('userId');
      const response = await getData(`registered-events/${userId}`);
      if (response.ok) {
        const res = await response.json();
        dispatch(setRegisteredEvents(res));
        setLoading(false);
        setError(false);
      } else {
        const res = await response.json();
        setErrorMsg(res.message);
        setLoading(false);
        setSnackbarOpen(true);
        setError(true);
      }
    } catch (error) {
      setErrorMsg("Something went wrong");
      setLoading(false);
      setSnackbarOpen(true);
      setError(true);
    }
  }

  const updateEvents = async (data) => {
    try {
      const body = { user_id: Number(localStorage.getItem('userId')), event_id:  data.event.id };
      var response;
      if(data.allEvents) {
        if(registeredEvents.length >= 3) {
          setError(true);
          setSnackbarOpen(true);
          setErrorMsg("You can not register in more than 3 events");
          return;
        } else if(doesEventConflict(data.event, registeredEvents)){
          setError(true);
          setSnackbarOpen(true);
          setErrorMsg("Event time is conflicting with registered events");
          return;
        }
        response = await postData('register-event', body);
      } else{
        response = await postData('unregister-event', body);
      }
      if (response.ok) {
        getAllEvents();
        getAllUserEvents();
      } else {
        console.error('Error updating event registration', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <AllEventsComponent
      loading={loading}
      snackbarOpen={snackbarOpen}
      error={error}
      errorMsg={errorMsg}
      events={events}
      registeredEvents={registeredEvents}
      registeredEventIds={registeredEventIds}
      updateEvents={updateEvents}
      handleCloseSnackbar={handleCloseSnackbar}
    />
  );
}

export default AllEvents;
