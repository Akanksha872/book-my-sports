import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInComponent from '../components/auth/SignIn';
import Loader from '../components/common/Loader';
import SnackbarNotification from '../components/common/SnackbarNotification';
import { postData } from '../services/apiService';

function SignIn () {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
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
      <SignInComponent
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    </>
   
  );
}

export default SignIn;
