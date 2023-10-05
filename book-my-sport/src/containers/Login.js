
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../components/auth/Login';
import Loader from '../components/common/Loader';
import SnackbarNotification from '../components/common/SnackbarNotification';
import { getData } from '../services/apiService';
import { setUser } from '../store/reducers/userSlice';


function Login () {
  const [loading, setLoading] = useState(false);
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
      } else {
        const res = await response.json();
        setErrorMsg(res.message);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Something went wrong");
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <SnackbarNotification
        type={errorMsg ? 'error' : 'success'}
        open={errorMsg ? true : false}
        message={errorMsg}
      />
      <LoginComponent      
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Login;
