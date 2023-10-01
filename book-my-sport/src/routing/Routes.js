import { Route, Routes } from 'react-router-dom';
import AllEvents from '../containers/AllEvents';
import Login from '../containers/Login';
import SignIn from '../containers/SignIn';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path='/events' element={
        <ProtectedRoute>
          <AllEvents />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default AppRoutes;
