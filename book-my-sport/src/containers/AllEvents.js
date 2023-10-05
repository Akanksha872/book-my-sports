import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/common/Loader';
import SnackbarNotification from '../components/common/SnackbarNotification';
import AllEventsComponent from '../components/event/AllEvents';
import { getData, postData } from '../services/apiService';
import { setEvents } from '../store/reducers/eventsSlice';
import { setRegisteredEvents } from '../store/reducers/registeredEventsSlice';
import { doesEventConflict } from '../utils/eventUtil';

function AllEvents () {  
  const [loading, setLoading] = useState(true);
  const [eventsUpdated, setEventsUpdated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const registeredEvents = useSelector((state) => state.registeredEvents.events);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    setLoading(true);
    getAllEvents();
    getAllUserEvents();
    setEventsUpdated(false);
  }, [eventsUpdated]);

  const updateEvents = async (data) => {
    try {
      const body = { user_id: Number(localStorage.getItem('userId')), event_id:  data.event.id };
      var response;
      if(data.isAllEventsList) {
        if(registeredEvents.length >= 3) {
          setErrorMsg("You can not register in more than 3 events");
          return;
        } else if(doesEventConflict(data.event, registeredEvents)){
          setErrorMsg("Event time is conflicting with registered events");
          return;
        }
        response = await postData('register-event', body);
      } else{
        response = await postData('unregister-event', body);
      }
      if (response.ok) {
        setEventsUpdated(true);
      } else {
        console.error('Error updating event registration', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getAllEvents =  async () => {
    try {
      const response = await getData('events');
      if (response.ok) {
        const res = await response.json();
        dispatch(setEvents(res));
        setLoading(false);
      } else {
        const res = await response.json();
        setErrorMsg(res.message); 
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Something went wrong");
      setLoading(false);
    }
  }


  const getAllUserEvents =  async () => {
    try {
      const response = await getData(`registered-events/${userId}`);
      if (response.ok) {
        const res = await response.json();
        dispatch(setRegisteredEvents(res));
        setLoading(false);
      } else {
        const res = await response.json();
        setErrorMsg(res.message);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Something went wrong");
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <SnackbarNotification
        type={errorMsg ? 'error' : 'success'}
        open={errorMsg ? true : false}
        message={errorMsg}
      />
      <AllEventsComponent updateEvents={updateEvents}
      />
    </>
  );
}

export default AllEvents;
