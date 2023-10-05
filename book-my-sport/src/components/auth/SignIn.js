import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthPage from './AuthPage';

function SignInComponent ({
  name,
  email,
  setName,
  setEmail,
  handleSubmit,
}) {
  return (
    <AuthPage>
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
          <Button variant="contained" color="secondary" type="submit">Sign In </Button>
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
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignInComponent;
