import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInComponent from '../components/auth/SignIn';
import { postData } from '../services/apiService';

function SignIn () {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const body = { name, email };
    try {
      const response = await postData('user',body);
      if (response.ok) {
        navigate('/', { replace: true });
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

  return (
    <SignInComponent
      loading={loading}
      error={error}
      snackbarOpen={snackbarOpen}
      name={name}
      email={email}
      errorMsg={errorMsg}
      setName={setName}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
      handleCloseSnackbar={handleCloseSnackbar}
    />
  );
}

export default SignIn;
