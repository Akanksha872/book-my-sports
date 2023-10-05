import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function SnackbarNotification ({ open, message, type }) {
  
  const [openAlert, setOpenAlert] = useState(open);

  useEffect(() => {
    setOpenAlert(open);
  }, [open]);

  const handleClose = () =>{
    setOpenAlert(false);
  }
  
  const anchorOrigin = {
    vertical: 'top', 
    horizontal: 'right',
  };

  return (
    <Snackbar
      anchorOrigin={anchorOrigin} 
      open={openAlert}>
      <Alert severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}

SnackbarNotification.propTypes = {
  open: PropTypes.bool.isRequired, 
  message: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired,
};

export default SnackbarNotification;
