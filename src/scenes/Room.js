import { Box, useMediaQuery } from "@mui/material";
import React , { useState } from "react";
import io from 'socket.io-client'
import Chat from '../components/Chat';
import Menu from '../components/Menu';

const socket = io.connect(`${process.env.REACT_APP_API}`);

const Room = ({setIsAuth}) => {
    const isNonMobileScreens = useMediaQuery("(min-width:850px)");
    const userName = localStorage.getItem('user');
    const [showMenu, setShowMenu] = useState(true);
    const [joinedRoom, setJoinedRoom] = useState({name: "", id: ""});

    const toggleMenu = () => {
        console.log("toggeled")
        setShowMenu(!showMenu);
    }
    const joinRoom = () => {
        if (userName!== "" && joinedRoom.id !== ""){
            socket.emit("join_room", {userName, joinedRoom : joinedRoom.id})
            setShowMenu(false);
        }
    }

    return (
        <Box 
            height="100%"
            width="100%"
            display={isNonMobileScreens ? "flex" : "block"}
            justifyContent="space-between"
        >
            { !isNonMobileScreens ? (
                    showMenu && (
                        <Box 
                            position="absolute"
                            zIndex="1"
                            height="100%"
                            width='100%'
                        >
                            <Menu toggleMenu={toggleMenu} setJoinedRoom={setJoinedRoom} joinRoom={joinRoom} joinedRoom={joinedRoom}/>
                        </Box>
                    )
            ) : (
                <Box 
                    flexBasis={isNonMobileScreens ? "25%" : undefined}
                >
                    <Menu toggleMenu={toggleMenu} setJoinedRoom={setJoinedRoom} joinRoom={joinRoom} joinedRoom={joinedRoom}/>
                </Box>
            ) 
        }
            <Box 
                height="100%"
                flexBasis={isNonMobileScreens ? "75%" : undefined}
            >
                <Chat setIsAuth={setIsAuth} toggleMenu={toggleMenu} socket={socket} userName={userName} joinedRoom={joinedRoom} />
            </Box>
        </Box>
    )
}

export default Room;