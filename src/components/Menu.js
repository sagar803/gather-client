import React  from "react";
import {Create, Person, Chat, Settings } from '@mui/icons-material';
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Menu = ({toggleMenu, joinRoom, setJoinedRoom, joinedRoom}) => {
    const navigate = useNavigate();

    const trendingRooms = [
        { id: 'TR001', name: 'Technology Innovations' },
        { id: 'TR002', name: 'Gaming Zone' },
        { id: 'TR003', name: 'Health and Wellness' },
        { id: 'TR004', name: 'Entrepreneurship' },
        { id: 'TR005', name: 'Photography Enthusiasts' },
        { id: 'TR006', name: 'Book Club' },
        { id: 'TR007', name: 'Travel Adventures' },
        { id: 'TR008', name: 'Music Jam' },
        { id: 'TR009', name: 'Fashion and Style' },
        { id: 'TR010', name: 'Art Showcase' },
      ];
      
    const communityRooms = [
        { id: 'CR123', name: 'General Chat' },
        { id: 'CR456', name: 'Art and Design' },
        { id: 'CR789', name: 'Music Lovers' },
        { id: 'CRABC', name: 'Sports Enthusiasts' },
      ];
    
      const techRooms = [
        { id: 'TR123', name: 'Web Development' },
        { id: 'TR456', name: 'Mobile App Development' },
        { id: 'TR789', name: 'Data Science' },
        { id: 'TRABC', name: 'Machine Learning' },
        { id: 'TRXYZ', name: 'UI/UX Design' },
      ];

    return (
        <div className='menuContainer'>
            <Search joinRoom={joinRoom} toggleMenu = {toggleMenu} setJoinedRoom={setJoinedRoom} joinedRoom={joinedRoom}/>
            <ul className="menu-list">
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
            <hr />

            <div className="sample-rooms">

                <h2 className="gradient-heading">Trending Rooms</h2>
                <ul className="room-list">
                    {trendingRooms.map((room) => (
                    <li onClick={() => {
                        setJoinedRoom(room);
                        joinRoom();
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
                        joinRoom();
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
                        joinRoom();
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
    )
}

export default Menu;