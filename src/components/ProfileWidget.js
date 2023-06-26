import React from 'react';
import { Avatar, Typography, List, ListItem, ListItemText } from '@mui/material';

const Profile = ({userName}) => {
  const groups = [
    { id: 1, name: 'Group 1' },
    { id: 2, name: 'Group 2' },
    { id: 3, name: 'Group 3' },
  ];

  return (
    <div style={{ 
        backgroundColor:"rgb(17, 18, 20)", 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        gap: '16px',
        color: "grey" ,
        height: '100vh'
      }}>
      <Avatar alt="Profile Picture" src="profile-picture.jpg" style={{ width: '150px', height: '150px' }} />
      <h1>{userName}</h1>
      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      <Typography variant="body2" style={{ fontWeight: 'bold' }}>Age: 30</Typography>
      <Typography variant="body2" style={{ fontWeight: 'bold' }}>Location: New York</Typography>
      <Typography variant="body2" style={{ fontWeight: 'bold' }}>Occupation: Web Developer</Typography>

      <Typography variant="h6" style={{ fontWeight: 'bold' }}>Groups/Rooms Created:</Typography>
      <List>
        {groups.map((group) => (
          <ListItem key={group.id}>
            <ListItemText primary={group.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Profile;
