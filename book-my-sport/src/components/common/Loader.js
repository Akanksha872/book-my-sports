import '../../styles/page.css';
import { Box } from '@mui/material';
import LoaderImg from '../../assets/loader.gif';

function Loader () {

  return (
    <Box display="flex" justifyContent="center" alignItems="center" className="loader">
      <img src={LoaderImg} alt='Loading'/>
    </Box>
  );
}

export default Loader;
