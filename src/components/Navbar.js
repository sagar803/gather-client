import React  from "react";
import {Create, Close, Person, Chat, Settings, Logout } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Gather</h1>
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

    </nav>
  );
};

export default Navbar;
