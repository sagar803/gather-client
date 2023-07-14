import React from 'react';
import { Typography } from '@mui/material';
import SearchResult from './SearchResult';
import './GroupsWidget.css'

const GroupsWidget = ({userName}) => {
    const stringifyRoom = localStorage.getItem('rooms');
    const rooms = JSON.parse(stringifyRoom);
  
    return (
      <div className='groups-container'>
        <div className='groups-head'>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Groups/Rooms Created:</Typography>
        </div>
        <div className='groups-body'>
          {rooms.length !== 0 ? (
            rooms.map((room) => (
                <div
                    key={room._id}
                >
                    <SearchResult
                        room={room}
                    />
                </div>
              ))
            ) : (
            <p>No room found...</p>
            )}
          </div>
        </div>
    );
  };
  
  export default GroupsWidget;