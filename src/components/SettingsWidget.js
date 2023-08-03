import React from 'react';
import { Typography } from '@mui/material';
import './GroupsWidget.css'

const SettingsWidget = ({userName}) => {
    //const stringifyRoom = localStorage.getItem('rooms');
    //const rooms = JSON.parse(stringifyRoom);
  
    return (
      <div className='groups-container'>
        <div className='groups-head'>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Settings:</Typography>
        </div>
      </div>
    );
  };
  
  export default SettingsWidget;