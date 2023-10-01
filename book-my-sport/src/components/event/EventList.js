import { Pagination, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import EventCard from './EventCard';

function EventList ({ eventsList, allEvents, updateEvents, registeredEventIds }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const noOfPages = Math.ceil(eventsList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let eventsToDisplay = eventsList.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  
  if(!eventsList.length){
    return <Typography variant="h6" color="inherit" align="center" mt={2} mb={4}>No Data Available</Typography>
  }
  
  return (
    <>
      <Grid container spacing={2}>
        {eventsToDisplay.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={5} lg={4}>
            <EventCard event={event} allEvents={allEvents}  updateEvents={updateEvents}  registeredEventIds={registeredEventIds}/>
          </Grid>
        ))}
      </Grid>
      {noOfPages != 1 && <Stack spacing={2} alignItems="center" mt={4}>
        <Pagination count={noOfPages} color="primary" page={currentPage}   onChange={handlePageChange}/>
      </Stack>}
    </>
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
  registeredEventIds: PropTypes.array,
  updateEvents: PropTypes.func.isRequired,
};

export default EventList;
