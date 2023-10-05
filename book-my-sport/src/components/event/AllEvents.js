import { Box, Typography } from '@mui/material';
import '../../styles/page.css';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import EventList from './EventList';

function AllEventsComponent ({
  events,
  registeredEvents,
  registeredEventIds,
  updateEvents,
}) {
  
  return (
    <div>
      <Header />
      <Box>
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
  events: PropTypes.array.isRequired,
  registeredEvents: PropTypes.array.isRequired,
  registeredEventIds: PropTypes.array.isRequired,
  updateEvents: PropTypes.func.isRequired,
};

export default AllEventsComponent;
