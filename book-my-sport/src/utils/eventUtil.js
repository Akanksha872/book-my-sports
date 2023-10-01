import { format, parseISO } from 'date-fns';

export const doesEventConflict = (selectedEvent, registeredEvents) => {
  const selectedEventStartTime = new Date(selectedEvent.start_time);
  const selectedEventEndTime = new Date(selectedEvent.end_time);
  if (registeredEvents.length === 0) return false; 
  for (const registeredEvent of registeredEvents) {
    const registeredEventStartTime = new Date(registeredEvent.start_time);
    const registeredEventEndTime = new Date(registeredEvent.end_time);
    if (selectedEventStartTime < registeredEventEndTime && selectedEventEndTime > registeredEventStartTime) return true;
  }
  return false;
}

export const formatDateTimeToDate = (dateTime) => {
  const dateTimeISO = parseISO(dateTime);
  return format(dateTimeISO, 'EEE, d MMM, yyyy');
}

export const formatDateTimeToTime = (dateTime) => {
  const dateTimeISO = parseISO(dateTime);
  return format(dateTimeISO, 'ha');
}
  