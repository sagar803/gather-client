import React from 'react';
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";
import ProfileWidget from '../components/ProfileWidget';

const Profile = ({isAuth ,setIsAuth}) => {
  const isNonMobileScreens = useMediaQuery("(min-width:850px)");
  const userName = localStorage.getItem('user');
  return (
    <Box>      
      <Box
          height='10%'
          gridColumn="span 4"
          zIndex="1"
          position={isNonMobileScreens ?'sticky' : "block"}
          top="15px"
          sx={{backdropFilter: isNonMobileScreens ? 'blur(2px)' : "undefined"}}
          
      >
          <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
          <ProfileWidget userName={userName} />
      </Box>

    </Box>
  );
};

export default Profile;
