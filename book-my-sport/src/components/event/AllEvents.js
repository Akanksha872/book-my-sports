import { Box, Typography } from '@mui/material';
import '../../styles/page.css';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import SnackbarNotification from '../common/SnackbarNotification';
import EventList from './EventList';

function AllEventsComponent ({
  loading,
  snackbarOpen,
  error,
  errorMsg,
  events,
  registeredEvents,
  registeredEventIds,
  updateEvents,
  handleCloseSnackbar,
}) {

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <Header />
      <Box>
        <SnackbarNotification
          type={error ? 'error' : 'success'}
          open={snackbarOpen}
          message={errorMsg}
          handleClose={handleCloseSnackbar}
        />
        <Box display="flex" flexDirection="row" mt={5}>
          <Box mr={5} ml={2} className="event-list">
            <Typography variant="h4" color="inherit" align="center" mt={2} mb={4}>Events near you</Typography>
            <EventList eventsList={events} allEvents={true} updateEvents={updateEvents} registeredEventIds={registeredEventIds}/>
          </Box>
          <Box className="event-list">
            <Typography variant="h4" color="inherit" align="center" mt={2} mb={4}>All your registered events</Typography>
            <EventList eventsList={registeredEvents} allEvents={false} updateEvents={updateEvents}/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

AllEventsComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  snackbarOpen: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  registeredEvents: PropTypes.array.isRequired,
  registeredEventIds: PropTypes.array.isRequired,
  updateEvents: PropTypes.func.isRequired,
  handleCloseSnackbar: PropTypes.func.isRequired,
};

export default AllEventsComponent;
