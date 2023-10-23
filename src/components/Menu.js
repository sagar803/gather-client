import React  from "react";
import {Create, Person, Chat, Settings, Home } from '@mui/icons-material';
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { trendingRooms, communityRooms, techRooms } from "../data/room";

const Menu = ({toggleMenu, setJoinedRoom, joinedRoom}) => {
    const navigate = useNavigate();

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
                            setJoinedRoom({name: room.name, id: room._id});
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
                            setJoinedRoom({name: room.name, id: room._id});
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
                            setJoinedRoom({name: room.name, id: room._id});
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