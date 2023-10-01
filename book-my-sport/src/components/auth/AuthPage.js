import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../common/Header';
import '../../styles/page.css';

const AuthPageWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AuthPage = ({ children }) => {
  return (
    <div className="page-background">
      <Header></Header>
      <Box mt={12}>
        <AuthPageWrapper>
          {children}
        </AuthPageWrapper>
      </Box>
    </div>);
};

AuthPage.propTypes = {
  children: PropTypes.node,
};

export default AuthPage;
