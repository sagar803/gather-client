import React  from "react";
import {Create, Person, Chat, Settings , Menu as MenuIcon, Logout} from '@mui/icons-material';
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Navbar.css'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:850px)");
  const navigate = useNavigate();
  /*
  const logout = () => {
    socket.emit("leave_room", {userName, room: joinedRoom.id})
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsAuth(false);
  }
  */
  
  //For mobile menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //till here

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Gather</h1>
      {
        isNonMobileScreens ? (
          <ul className="nav-list">
            <li onClick={() => navigate('/profile')} >
                <Person />Profile    
            </li>

            <li onClick={() => navigate('/room')}>
                <Chat />Chat
            </li>

            <li onClick={() => navigate('/create')}>
                <Create />Create
            </li>

            <li onClick={() => navigate('/settings')}>
                <Settings />Settings
            </li>
            <li >
                <Logout className="pointer logout"/>
            </li>
          </ul>
        ) : (
          <div>
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{color: "white"}}
            >
              <MenuIcon/>
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => navigate('/profile')} >
                <Person />Profile  
              </MenuItem>
              <MenuItem onClick={() => navigate('/room')}>
                <Chat />Chat
              </MenuItem>
              <MenuItem onClick={() => navigate('/create')}>
                <Create />Create
              </MenuItem>
              <MenuItem >
                <Settings />Settings
              </MenuItem>
              <MenuItem >
                <Logout />Logout
              </MenuItem>

            </Menu>
          </div>
          )
      }

    </nav>
  );
};

export default Navbar;
