import React  from "react";
import {Create, Person, Chat, Settings } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import './Navbar.css'


const Navbar = ({isAuth}) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Gather</h1>
      {isAuth && (
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

            <li >
                <Settings />Settings
            </li>
        </ul>
        )
      }

    </nav>
  );
};

export default Navbar;
