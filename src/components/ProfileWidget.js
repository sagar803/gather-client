import React from 'react';
import { Avatar, Typography } from '@mui/material';
import './ProfileWidget.css'

const Profile = ({userName}) => {

  return (
    <div>
      <div className='profile-widget-head'>
        <Avatar alt="Profile Picture" src="profile-picture.jpg" style={{ width: '150px', height: '150px' }} />
        <div>
          <h1>{userName}</h1>
          <h3>Age: 30</h3>
        </div>
      </div>
      <div className='profile-widget-body'></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Typography variant="body2" style={{ fontWeight: 'bold' }}>Location: New York</Typography>
      <Typography variant="body2" style={{ fontWeight: 'bold' }}>Occupation: Web Developer</Typography>
    </div>
  );
};

export default Profile;
