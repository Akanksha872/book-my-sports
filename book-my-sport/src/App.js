import Button from '@mui/material/Button';
import './App.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0566', // pink
    },
    secondary: {
      main: '#0436FF', // Blue
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
     <Button variant="contained" color="secondary">
        Material-UI Button
      </Button>
      <Button variant="contained" color="primary">
        Material-UI Button
      </Button>
    </ThemeProvider>

  );
}

export default App;
