import { Box, Typography } from '@mui/material';
import '../../styles/page.css';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import EventList from './EventList';

function AllEventsComponent ({ updateEvents }) {
  
  return (
    <div>
      <Header />
      <Box>
        <Box display="flex" flexDirection="row" mt={5}>
          <Box mr={5} ml={2} className="event-list">
            <Typography variant="h4" color="inherit" align="center" mt={2} mb={4}>Events near you</Typography>
            <EventList isAllEventsList={true} updateEvents={updateEvents}/>
          </Box>
          <Box className="event-list">
            <Typography variant="h4" color="inherit" align="center" mt={2} mb={4}>All your registered events</Typography>
            <EventList isAllEventsList={false} updateEvents={updateEvents}/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

AllEventsComponent.propTypes = {
  updateEvents: PropTypes.func.isRequired,
};

export default AllEventsComponent;
