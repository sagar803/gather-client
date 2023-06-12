import { Box, useMediaQuery } from "@mui/material";
import React , { useState , useRef} from "react";
import io from 'socket.io-client'
import Chat from '../components/Chat';
import Menu from '../components/Menu';

const socket = io.connect(`${process.env.REACT_APP_API}`);

const Room = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:850px)");
    
    console.log(isNonMobileScreens)
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
        <Box 
            className="roomContainer" 
            width="100%"
            display={isNonMobileScreens ? "flex" : "block"}
            justifyContent="space-between"
        >
            { !isNonMobileScreens ? (
                <Box 
                    position="absolute"
                    zIndex="1"
                >
                    {showMenu && <Menu toggleMenu={toggleMenu} setRoom={setRoom} joinRoom={joinRoom} room={room}/>}
                </Box>
            ) : (
                <Box 
                    flexBasis={isNonMobileScreens ? "30%" : undefined}
                >
                    <Menu toggleMenu={toggleMenu} setRoom={setRoom} joinRoom={joinRoom} room={room}/>
                </Box>
            ) 
            }
            <Box 
                flexBasis={isNonMobileScreens ? "70%" : undefined}
            >
            <Chat toggleMenu={toggleMenu} socket={socket} userName={userName} room={room} />
          </Box>
        </Box>
    )
}

export default Room;