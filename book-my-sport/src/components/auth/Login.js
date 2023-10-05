import {
  Typography,
  TextField,
  Box,
  Button,
  Link,
} from '@mui/material';
import PropTypes from 'prop-types'; 
import { Link as RouterLink } from 'react-router-dom';
import AuthPage from './AuthPage';


function LoginComponent ({
  email,
  setEmail,
  handleSubmit
}) {
  return (
    <AuthPage>
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
          <Button variant="contained" color="secondary" type="submit"> Log In </Button>
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
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginComponent;
