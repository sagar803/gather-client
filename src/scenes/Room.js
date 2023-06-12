import React , { useState } from "react";
import io from 'socket.io-client'
import Chat from '../components/Chat';
import Menu from '../components/Menu';
import './Room.css'


const socket = io.connect(`${process.env.REACT_APP_API}`);

const Room = () => {
    const userName = localStorage.getItem('user');
    const [showMenu, setShowMenu] = useState(true);
    const [room, setRoom] = useState('');

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const joinRoom = () => {
        if (userName!== "" && room !== ""){
            socket.emit("join_room", {userName, room})
            setShowMenu(false);
        }
    }

    return (
        <div className="roomContainer">
            {showMenu && <Menu toggleMenu={toggleMenu} setRoom={setRoom} joinRoom={joinRoom} room={room}/>}
            <Chat toggleMenu={toggleMenu} socket={socket} userName={userName} room={room} />
        </div>
    )
}

export default Room;