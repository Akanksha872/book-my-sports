
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../components/auth/Login';
import { getData } from '../services/apiService';
import { setUser } from '../store/reducers/userSlice';


function Login () {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    event.preventDefault();
    try {
      const response = await getData(`login/${email}`);
      if (response.ok) {
        const res = await response.json();
        localStorage.setItem('userId', res.id);
        dispatch(setUser(res));
        navigate('/events', { replace: true });
        setLoading(false);
        setError(false);
      } else {
        const res = await response.json();
        setErrorMsg(res.message);
        setLoading(false);
        setSnackbarOpen(true);
        setError(true);
      }
    } catch (error) {
      setErrorMsg("Something went wrong");
      setLoading(false);
      setSnackbarOpen(true);
      setError(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <LoginComponent
      loading={loading}
      error={error}
      snackbarOpen={snackbarOpen}
      email={email}
      errorMsg={errorMsg}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
      handleCloseSnackbar={handleCloseSnackbar}
    />
  );
}

export default Login;
