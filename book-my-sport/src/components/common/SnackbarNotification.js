import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';

function SnackbarNotification ({ open, message, handleClose, type }) {
  
  const anchorOrigin = {
    vertical: 'top', 
    horizontal: 'right',
  };

  return (
    <Snackbar
      anchorOrigin={anchorOrigin} 
      open={open}
      autoHideDuration={20000} 
      onClose={handleClose}
    >
      <Alert severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}

SnackbarNotification.propTypes = {
  open: PropTypes.bool.isRequired, 
  message: PropTypes.string.isRequired, 
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default SnackbarNotification;
