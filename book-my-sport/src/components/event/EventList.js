import { Pagination, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import EventCard from './EventCard';

function EventList ({ isAllEventsList, updateEvents }) {
  const eventsList  = isAllEventsList ? useSelector((state) => state.events) : useSelector((state) => state.registeredEvents.events);
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
            <EventCard event={event} isAllEventsList={isAllEventsList}  updateEvents={updateEvents}/>
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
  isAllEventsList: PropTypes.bool.isRequired,
  updateEvents: PropTypes.func.isRequired,
};

export default EventList;
