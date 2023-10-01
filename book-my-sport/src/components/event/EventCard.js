import {
  Card, CardContent, Typography, Button, CardMedia, Box
} from '@mui/material';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import { formatDateTimeToDate, formatDateTimeToTime } from '../../utils/eventUtil';
import '../../styles/page.css';

function EventCard ({ event, allEvents, updateEvents, registeredEventIds }) {

  const handleSubmit = async () => {
    updateEvents({ event: event, allEvents });
  };

  return (
    <Card>
      {registeredEventIds && registeredEventIds.includes(event.id) && <div className="card-label">Registered</div>}
      <CardMedia
        component="img"
        alt="Image"
        height="140"
        image={event.image} 
        title={event.event_category} 
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {event.event_name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mb={1}>
          {event.event_category}
        </Typography>
        <Divider />
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Box display="flex" flexDirection="column">
            <Typography variant="caption" color="textSecondary">
              {formatDateTimeToDate(event.start_time)}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {formatDateTimeToTime(event.start_time)}
              {' '}
              -
              {formatDateTimeToTime(event.end_time)}
            </Typography>
          </Box>

          <Button variant="contained" color={ allEvents ? "secondary" : "error"} onClick={handleSubmit} size="small">
            {allEvents ? 'Register' : 'Remove'}
          </Button>
        </Box>
      </CardContent>
    </Card>   
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    event_name: PropTypes.string.isRequired,
    event_category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
  }).isRequired,
  allEvents: PropTypes.bool.isRequired,
  updateEvents: PropTypes.func.isRequired,
  registeredEventIds: PropTypes.array
};
export default EventCard;
