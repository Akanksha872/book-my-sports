import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header () {
  const userDetails = useSelector((state) => state.user);
  var nameInitial = 'User';

  if(userDetails && userDetails.name){
    nameInitial = userDetails.name.split(' ').map((n)=>n[0]).join("").toUpperCase();
  }

  const signOut = async () => {
    localStorage.removeItem('userId');
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userId  = localStorage.getItem('userId');

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Book My Sport
        </Typography>
        {userId && 
        <Avatar 
          sx={{ bgcolor: '#CBC255' }}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >{nameInitial}</Avatar>}

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={signOut} component={Link} to="/">Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
