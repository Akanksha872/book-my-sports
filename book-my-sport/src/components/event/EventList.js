import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import EventCard from './EventCard';

function EventList ({ eventsList, allEvents, updateEvents }) {
  
  if(!eventsList.length){
    return <Typography variant="h6" color="inherit" align="center" mt={2} mb={4}>No Data Available</Typography>
  }
  
  return (
    <Grid container spacing={2}>
      {eventsList.map((event) => (
        <Grid item key={event.id} xs={12} sm={6} md={5} lg={4}>
          <EventCard event={event} allEvents={allEvents}  updateEvents={updateEvents} />
        </Grid>
      ))}
    </Grid>
  );
}

EventList.propTypes = {
  eventsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      event_name: PropTypes.string.isRequired,
      event_category: PropTypes.string.isRequired,
      start_time: PropTypes.string.isRequired,
      end_time: PropTypes.string.isRequired,
    })
  ).isRequired,
  allEvents: PropTypes.bool.isRequired,
  updateEvents: PropTypes.func.isRequired,
};

export default EventList;
