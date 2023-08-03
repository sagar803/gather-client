import React  from "react";
import {Create, Person, Chat, Settings, Home } from '@mui/icons-material';
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Menu = ({toggleMenu, setJoinedRoom, joinedRoom}) => {
    const navigate = useNavigate();

    const trendingRooms = [
        { name: 'Art Showcase', id: 'TR010' },
        { name: 'Fashion and Style', id: 'TR009' },
        { name: 'Music Jam', id: 'TR008' },
        { name: 'Travel Adventures', id: 'TR007' },
        { name: 'Book Club', id: 'TR006' },
        { name: 'Photography Enthusiasts', id: 'TR005' },
        { name: 'Entrepreneurship', id: 'TR004' },
        { name: 'Health and Wellness', id: 'TR003' },
        { name: 'Gaming Zone', id: 'TR002' },
        { name: 'Technology Innovations', id: 'TR001' }
      ];
      
    const communityRooms = [
        { name: 'Sports Enthusiasts', id: 'CRABC' },
        { name: 'Music Lovers', id: 'CR789' },
        { name: 'Art and Design', id: 'CR456' },
        { name: 'General Chat', id: 'CR123' }
      ];
    
      const techRooms = [
        { name: 'UI/UX Design', id: 'TRXYZ' },
        { name: 'Machine Learning', id: 'TRABC' },
        { name: 'Data Science', id: 'TR789' },
        { name: 'Mobile App Development', id: 'TR456' },
        { name: 'Web Development', id: 'TR123' }
      ];

    return (
        <div className='menuContainer'>
            <div className="searchComponent">
                <Search toggleMenu = {toggleMenu} setJoinedRoom={setJoinedRoom} joinedRoom={joinedRoom}/>
            </div>
            <div className="menu-body">
                <ul className="menu-list">
                    <li onClick={() => navigate('/home')} >
                        <Home />Home    
                    </li>
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
            

                <div className="sample-rooms">

                    <h2 className="gradient-heading">Trending Rooms</h2>
                    <ul className="room-list">
                        {trendingRooms.map((room) => (
                        <li onClick={() => {
                            setJoinedRoom(room);
                        }}
                        key={room.id} 
                        className="room-item"
                        >
                            {room.name}
                        </li>
                        ))}
                    </ul>

                    <h2 className="gradient-heading">Community Rooms</h2>
                    <ul className="room-list">
                        {communityRooms.map((room) => (
                        <li onClick={() => {
                            setJoinedRoom(room);
                        }}
                        key={room.id} 
                        className="room-item"
                        >
                            {room.name}
                        </li>
                        ))}
                    </ul>

                    <h2 className="gradient-heading">Tech Rooms</h2>
                    <ul className="room-list">
                        {techRooms.map((room) => (
                        <li onClick={() => {
                            setJoinedRoom(room);
                        }}
                        key={room.id} 
                        className="room-item"
                        >
                            {room.name}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;