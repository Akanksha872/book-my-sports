import {
  Typography,
  TextField,
  Box,
  Button,
  Link,
} from '@mui/material';
import PropTypes from 'prop-types'; 
import { Link as RouterLink } from 'react-router-dom';
import SnackbarNotification from '../common/SnackbarNotification';
import AuthPage from './AuthPage';


function LoginComponent ({
  loading,
  error,
  snackbarOpen,
  email,
  errorMsg,
  setEmail,
  handleSubmit,
  handleCloseSnackbar,
}) {
  return (
    <AuthPage>
      <SnackbarNotification
        type={error ? 'error' : 'success'}
        open={snackbarOpen}
        message={errorMsg}
        handleClose={handleCloseSnackbar}
      />
      <Typography variant="h5" align="center">Welcome</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type='email'
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </Button>
        </Box>
      </form>
      <Typography fontSize={12} align="center" mt={2}>
      Don&apos;t have an account?
        <Link component={RouterLink} to="/signin">
          Sign up
        </Link>
      </Typography>
    </AuthPage>
  );
}

LoginComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  snackbarOpen: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCloseSnackbar: PropTypes.func.isRequired,
};

export default LoginComponent;
