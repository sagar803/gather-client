import React from 'react';
import { Avatar, Typography } from '@mui/material';

const Profile = ({userName}) => {

  return (
    <div>
      <Avatar alt="Profile Picture" src="profile-picture.jpg" style={{ width: '150px', height: '150px' }} />
      <h1>{userName}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Typography variant="body2" style={{ fontWeight: 'bold' }}>Age: 30</Typography>
      <Typography variant="body2" style={{ fontWeight: 'bold' }}>Location: New York</Typography>
      <Typography variant="body2" style={{ fontWeight: 'bold' }}>Occupation: Web Developer</Typography>

    </div>
  );
};

export default Profile;
