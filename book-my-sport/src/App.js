import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routing/Routes';
import { customTheme } from './styles/theme';

function App () {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
