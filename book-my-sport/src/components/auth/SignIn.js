import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from '../common/Loader';
import SnackbarNotification from '../common/SnackbarNotification';
import AuthPage from './AuthPage';

function SignInComponent ({
  loading,
  error,
  snackbarOpen,
  name,
  email,
  errorMsg,
  setName,
  setEmail,
  handleSubmit,
  handleCloseSnackbar,
}) {
  if (loading) {
    return <Loader></Loader>
  }

  return (
    <AuthPage>
      <SnackbarNotification
        type={error ? 'error' : 'success'}
        open={snackbarOpen}
        message={errorMsg}
        handleClose={handleCloseSnackbar}
      />
      <Typography variant="h5" align="center">Create your Account</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          <Button variant="contained" color="secondary" type="submit">
            {loading ? 'Creating..' : 'Sign In'}
          </Button>
        </Box>

      </form>
      <Typography fontSize={12} align="center" mt={2}>
        Already, have an account?
        <Link to="/">Log in</Link>
      </Typography>
    </AuthPage>
  );
}

SignInComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  snackbarOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCloseSnackbar: PropTypes.func.isRequired,
};

export default SignInComponent;
